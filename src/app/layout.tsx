import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://DOMAIN.com";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-source-serif",
  display: "swap",
});

const burial = localFont({
  src: "../../public/fonts/Burial TM.ttf",
  variable: "--font-headline",
  display: "swap",
});

const zine = localFont({
  src: "../../public/fonts/Zine TM.ttf",
  variable: "--font-subhead",
  display: "swap",
});

const mazzy = localFont({
  src: "../../public/fonts/mazzy TM.ttf",
  variable: "--font-script",
  display: "swap",
});

const mazzyNew = localFont({
  src: "../../public/fonts/Mazzy New TM.ttf",
  variable: "--font-script-alt",
  display: "swap",
});

const siteTitle = "Savana Santos | Nashville Singer-Songwriter";
const siteDescription =
  "savana santos is a nashville-based singer-songwriter and producer from quincy, illinois. listen to 4 minutes and explore the soulmates era now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteTitle,
  description: siteDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    siteName: "Savana Santos",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  other: {
    "theme-color": "#1A2100",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "@id": `${SITE_URL}/#artist`,
    name: "Savana Santos",
    description: siteDescription,
    url: SITE_URL,
    genre: "Bedroom Pop",
    foundingLocation: {
      "@type": "Place",
      name: "Quincy, Illinois",
    },
    member: {
      "@type": "Person",
      name: "Savana Santos",
      jobTitle: "Singer-Songwriter, Producer",
    },
    sameAs: [
      "https://www.tiktok.com/@savana_santos",
      "https://www.instagram.com/savanasantos/",
      "https://www.youtube.com/channel/UCUxdZbmpZVniUgn0sl6jSjA",
      "https://x.com/savanasantos",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${burial.variable} ${zine.variable} ${mazzy.variable} ${mazzyNew.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
