import type { Metadata } from "next";
import { Bubblegum_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const bubblegumSans = Bubblegum_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bubblegum-sans",
});

export const metadata: Metadata = {
  title: "S&F Art",
  description: "Купувайте качествени керамични изделия",
  icons: {
    icon: "/sf_art_logo.webp",
    shortcut: "/sf_art_logo.webp",
    apple: "/sf_art_logo.webp",
  },
  openGraph: {
    title: "S&F Art - Керамични изделия",
    description: "Купувайте качествени керамични изделия, изпращани по Еконт",
    siteName: "S&F Art",
    images: [
      {
        url: "/sf_art_logo.webp",
        width: 1200,
        height: 630,
        alt: "S&F Art Logo",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S&F Art - Керамични изделия",
    description: "Купувайте качествени керамични изделия, изпращани по Еконт",
    images: ["/sf_art_logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={bubblegumSans.variable}>
      <body
        className={`${bubblegumSans.className} flex min-h-full flex-col bg-white`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
