"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-dark-green px-5 text-center">
      <h1 className="font-headline text-orange text-5xl md:text-6xl mb-4">
        oops
      </h1>
      <p className="text-cream text-lg md:text-xl leading-relaxed mb-10">
        something went wrong. try again or head back home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="font-subhead border border-cream text-cream px-8 py-3 text-base transition-colors hover:border-orange hover:text-orange"
        >
          try again
        </button>
        <Link
          href="/"
          className="font-subhead border border-cream/40 text-cream/70 px-8 py-3 text-base transition-colors hover:border-orange hover:text-orange"
        >
          go home
        </Link>
      </div>
    </section>
  );
}
