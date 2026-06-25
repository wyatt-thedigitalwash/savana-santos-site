import Image from "next/image";

export default function Hero() {
  return (
    <section data-bg="dark" className="bg-dark-green leading-[0]">
      <h1 className="sr-only">Savana Santos</h1>

      {/* Mobile banner (below 768px) */}
      <Image
        src="/banners/SavanaSantos_4Minutes_MobileBanner.jpg"
        alt="4 Minutes by Savana Santos"
        width={1080}
        height={1920}
        className="block h-auto w-full md:hidden"
        priority
        sizes="100vw"
      />

      {/* Desktop banner (768px and wider) */}
      <Image
        src="/banners/SavanaSantos_4Minutes_DesktopBanner.jpg"
        alt="4 Minutes by Savana Santos"
        width={1920}
        height={1080}
        className="hidden h-auto w-full max-h-screen object-cover md:block"
        priority
        sizes="100vw"
      />
    </section>
  );
}
