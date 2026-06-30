import Image from "next/image";

const covers = [
  {
    src: "/covers/SavanaSantos_4MinutesCover.jpg",
    alt: "4 Minutes single cover by Savana Santos",
    caption: "4 minutes",
    rotate: "rotate-[-2.5deg]",
    offset: "lg:translate-y-3",
  },
  {
    src: "/covers/SavanaSantos_SoulmatesCover.jpg",
    alt: "Soulmates cover by Savana Santos",
    caption: "soulmates",
    rotate: "rotate-[1.8deg]",
    offset: "lg:-translate-y-2",
  },
];

export default function Covers() {
  return (
    <section data-bg="dark" aria-label="Releases" className="bg-dark-green py-20 md:!pt-20 md:pb-28 px-5 md:px-8">
      <h2 className="sr-only">Releases</h2>
      <div className="flex flex-col items-center gap-14 lg:flex-row lg:justify-center lg:gap-14">
        {covers.map((cover) => (
          <div
            key={cover.src}
            className={`${cover.rotate} ${cover.offset} shrink-0 transition-transform duration-300 ease-in-out hover:rotate-0 hover:scale-105`}
          >
            <div className="border-[6px] border-white">
              <Image
                src={cover.src}
                alt={cover.alt}
                width={460}
                height={460}
                className="block h-auto w-[75vw] md:w-[55vw] lg:w-[460px]"
              />
            </div>
            <p className="mt-2 text-center font-subhead text-cream text-[1rem]">
              {cover.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
