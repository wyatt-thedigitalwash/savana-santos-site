import Image from "next/image";

const covers = [
  {
    src: "/covers/SavanaSantos_4MinutesCover.jpg",
    alt: "4 Minutes single cover by Savana Santos",
    caption: "4 minutes",
    rotate: "rotate-[-2.5deg]",
    offset: "md:translate-y-3",
  },
  {
    src: "/covers/SavanaSantos_SoulmatesCover.jpg",
    alt: "Soulmates cover by Savana Santos",
    caption: "soulmates",
    rotate: "rotate-[1.8deg]",
    offset: "md:-translate-y-2",
  },
  {
    src: "/covers/SavanaSantos_CryingOnYourBirthdayCover.jpg",
    alt: "Crying On Your Birthday cover by Savana Santos",
    caption: "crying on your birthday",
    rotate: "rotate-[-1.2deg]",
    offset: "md:translate-y-5",
  },
];

export default function Covers() {
  return (
    <section data-bg="dark" className="bg-dark-green !py-20 md:!py-28 px-5 md:px-8">
      <div className="flex flex-col items-center gap-14 md:flex-row md:justify-center md:gap-10 lg:gap-14">
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
                className="block h-auto w-[95vw] md:w-[460px]"
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
