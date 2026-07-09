import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
