"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible sentinel placed right after the hero */}
      <div ref={sentinelRef} className="h-0 w-0" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-dark-green py-4 px-5 md:px-8 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-center">
          <Image
            src="/logos/SavanaSantos_ColoredLogo.png"
            alt="Savana Santos logo"
            width={180}
            height={40}
            className="h-6 w-auto md:h-8"
          />
        </div>
      </header>
    </>
  );
}
