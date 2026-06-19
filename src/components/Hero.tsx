import Image from "next/image";

export default function Hero() {
  return (
    <section data-bg="dark" className="relative h-screen bg-dark-green">
      <h1 className="sr-only">Savana Santos</h1>

      {/* Mobile banner (below 768px) */}
      <Image
        src="/banners/SavanaSantos_4Minutes_MobileBanner.jpg"
        alt="4 Minutes by Savana Santos"
        fill
        className="object-cover md:hidden"
        priority
        sizes="100vw"
      />

      {/* Desktop banner (768px and wider) */}
      <Image
        src="/banners/SavanaSantos_4Minutes_DesktopBanner.jpg"
        alt="4 Minutes by Savana Santos"
        fill
        className="hidden object-cover md:block"
        priority
        sizes="100vw"
      />
    </section>
  );
}
