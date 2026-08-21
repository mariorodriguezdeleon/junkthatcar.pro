import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Junk That Car — We Buy Junk Cars for Cash | Free Towing",
    template: "%s | Junk That Car",
  },
  description:
    "Sell your junk car for top dollar in the Seattle metro area. Free towing, instant quotes, same-day pickup. We buy cars in any condition — running, wrecked, or totaled.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://junkthatcar.pro"),
  keywords: ["junk car removal", "sell junk car", "cash for cars", "free towing", "Seattle", "junk car buyer"],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Junk That Car",
    title: "Junk That Car — We Buy Junk Cars for Cash",
    description: "Sell your junk car for top dollar. Free towing, instant quotes, same-day pickup.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junk That Car — We Buy Junk Cars for Cash",
    description: "Sell your junk car for top dollar. Free towing, instant quotes, same-day pickup.",
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-950 text-slate-100">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}