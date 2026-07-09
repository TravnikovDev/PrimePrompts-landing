import type { Metadata } from "next";
import { Archivo_Black, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// PolySans Bulky substitute per DESIGN.md
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

// PolySans Median / Neutral substitute per DESIGN.md
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeprompts.app"),
  title: "Prime Prompts. Fun AI ideas, ready to copy.",
  description:
    "A daily feed of trending AI prompts. Copy one, paste it into ChatGPT, Gemini, Claude or any image generator, and see what happens.",
  openGraph: {
    title: "Prime Prompts. Fun AI ideas, ready to copy.",
    description:
      "A daily feed of trending AI prompts. Copy one, paste it into any AI tool, and see what happens.",
    type: "website",
    url: "https://primeprompts.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
