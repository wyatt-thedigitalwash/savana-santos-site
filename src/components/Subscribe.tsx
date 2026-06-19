"use client";

import { useState, type FormEvent } from "react";

const COUNTRIES = [
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

interface FieldErrors {
  phone?: string;
  email?: string;
  zip?: string;
  country?: string;
}

export default function Subscribe() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};

    if (!phone.trim()) {
      errs.phone = "phone is required";
    } else if (!/^[+\d][\d\s()./-]{6,}$/.test(phone.trim())) {
      errs.phone = "enter a valid phone number";
    }

    if (!email.trim()) {
      errs.email = "email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "enter a valid email";
    }

    if (!zip.trim()) {
      errs.zip = "zip is required";
    } else if (zip.trim().length < 3) {
      errs.zip = "zip must be at least 3 characters";
    }

    if (!country) {
      errs.country = "country is required";
    }

    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <section data-bg="dark" className="bg-dark-green py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-headline text-orange text-4xl md:text-5xl mb-4">
          i&apos;ll text you first
        </h2>
        <p className="text-cream text-lg md:text-xl leading-relaxed mb-10">
          new music, show announcements, and the occasional oversharing text.
          drop your info.
        </p>

        <form onSubmit={handleSubmit} noValidate className="text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
            {/* Phone */}
            <div>
              <label
                htmlFor="subscribe-phone"
                className="block font-subhead text-cream text-base mb-1.5"
              >
                phone
              </label>
              <input
                id="subscribe-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-dark-green border border-cream/40 text-cream placeholder:text-cream/30 px-3 py-2.5 text-base focus:border-orange focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-orange text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="subscribe-email"
                className="block font-subhead text-cream text-base mb-1.5"
              >
                email
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-dark-green border border-cream/40 text-cream placeholder:text-cream/30 px-3 py-2.5 text-base focus:border-orange focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-orange text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Zip */}
            <div>
              <label
                htmlFor="subscribe-zip"
                className="block font-subhead text-cream text-base mb-1.5"
              >
                zip
              </label>
              <input
                id="subscribe-zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="90210"
                className="w-full bg-dark-green border border-cream/40 text-cream placeholder:text-cream/30 px-3 py-2.5 text-base focus:border-orange focus:outline-none transition-colors"
              />
              {errors.zip && (
                <p className="text-orange text-sm mt-1">{errors.zip}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="subscribe-country"
                className="block font-subhead text-cream text-base mb-1.5"
              >
                country
              </label>
              <select
                id="subscribe-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-dark-green border border-cream/40 text-cream px-3 py-2.5 text-base focus:border-orange focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="text-cream/30">
                  select country
                </option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="text-orange text-sm mt-1">{errors.country}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-full font-subhead bg-dark-green border border-cream text-cream px-8 py-3 text-base transition-colors hover:border-orange hover:text-orange"
            >
              sign me up
            </button>
          </div>

          {submitted && (
            <p className="text-cream text-base text-center mt-5">
              you&apos;re in. we&apos;ll be in touch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
