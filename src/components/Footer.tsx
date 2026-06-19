import Image from "next/image";

const socialLinks = [
  { label: "tiktok", href: "https://www.tiktok.com/@savana_santos" },
  { label: "instagram", href: "https://www.instagram.com/savanasantos/" },
  { label: "youtube", href: "https://www.youtube.com/channel/UCUxdZbmpZVniUgn0sl6jSjA" },
  { label: "x", href: "https://x.com/savanasantos" },
];

const legalLinks = [
  { label: "Terms", href: "https://www.bigmachinerecords.com/terms" },
  { label: "Do Not Sell My Personal Information", href: "https://www.bigmachinerecords.com/privacy" },
  { label: "Privacy", href: "https://www.bigmachinerecords.com/privacy" },
  { label: "Cookie Choices", href: "https://www.bigmachinerecords.com/privacy" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dark-green text-cream py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        {/* Logo */}
        <Image
          src="/logos/SavanaSantos_ColoredLogo.png"
          alt="Savana Santos"
          width={180}
          height={40}
          className="h-7 w-auto md:h-9"
        />

        {/* Social links */}
        <nav aria-label="Social media">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-cream transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Credit line */}
        <p className="text-sm text-cream/70 text-center">
          &copy; Borchetta Entertainment Group, LLC d/b/a Big Machine Records
        </p>

        {/* Legal links */}
        <nav aria-label="Legal">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/50 transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
