import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Savana Santos",
  description:
    "savana santos makes songs about the things you'd only admit at 2am.",
};

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
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
