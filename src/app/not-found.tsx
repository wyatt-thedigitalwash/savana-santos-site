import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Savana Santos",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-dark-green px-5 text-center">
      <h1 className="font-headline text-orange text-5xl md:text-6xl mb-4">
        404
      </h1>
      <p className="text-cream text-lg md:text-xl leading-relaxed mb-10">
        this page doesn&apos;t exist. maybe it never did.
      </p>
      <Link
        href="/"
        className="font-subhead border border-cream text-cream px-8 py-3 text-base transition-colors hover:border-orange hover:text-orange"
      >
        go home
      </Link>
    </section>
  );
}
