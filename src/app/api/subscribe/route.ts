import { NextRequest, NextResponse } from "next/server";

const VALID_COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Mexico",
  "Brazil",
  "India",
  "Other",
];

// In-memory rate limiting: IP -> { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000; // 5 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: if the hidden field has a value, silently accept
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const { phone, email, zip, country } = body as {
    phone?: string;
    email?: string;
    zip?: string;
    country?: string;
  };

  // Server-side validation
  const errors: Record<string, string> = {};

  if (!phone || typeof phone !== "string" || !phone.trim()) {
    errors.phone = "phone is required";
  } else if (phone.length > 30) {
    errors.phone = "phone is too long";
  } else if (!/^[+\d][\d\s()./-]{6,}$/.test(phone.trim())) {
    errors.phone = "enter a valid phone number";
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    errors.email = "email is required";
  } else if (email.length > 254) {
    errors.email = "email is too long";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "enter a valid email";
  }

  if (!zip || typeof zip !== "string" || !zip.trim()) {
    errors.zip = "zip is required";
  } else if (zip.length > 20) {
    errors.zip = "zip is too long";
  } else if (zip.trim().length < 3) {
    errors.zip = "zip must be at least 3 characters";
  }

  if (!country || typeof country !== "string") {
    errors.country = "country is required";
  } else if (!VALID_COUNTRIES.includes(country)) {
    errors.country = "select a valid country";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: Wire to Laylo / Mailchimp here
  return NextResponse.json({ success: true });
}
