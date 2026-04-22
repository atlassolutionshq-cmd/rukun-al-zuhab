import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rukun Al Zuhab Trading Co",
    template: "%s | Rukun Al Zuhab Trading Co",
  },
  description:
    "Leading trading company in Saudi Arabia offering premium building materials, hardware, safety equipment, and electrical supplies. Trusted partner for quality solutions since 1999.",
  keywords: [
    "trading company",
    "Saudi Arabia",
    "building materials",
    "hardware",
    "safety equipment",
    "electrical supplies",
    "Rukun Al Zuhab",
  ],
  authors: [{ name: "Rukun Al Zuhab Trading Co" }],
  openGraph: {
    type: "website",
    locale: "en_SA",
    url: "https://rukun-alzuhab.com",
    siteName: "Rukun Al Zuhab Trading Co",
    title: "Rukun Al Zuhab Trading Co",
    description:
      "Leading trading company in Saudi Arabia offering premium building materials, hardware, safety equipment, and electrical supplies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rukun Al Zuhab Trading Co",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rukun Al Zuhab Trading Co",
    description:
      "Leading trading company in Saudi Arabia offering premium building materials and industrial solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rukun Al Zuhab Trading Co",
    "url": "https://rukun-alzuhab.com",
    "logo": "https://rukun-alzuhab.com/logo.jpg",
    "description": "Leading trading company in Saudi Arabia specializing in building materials, hardware, safety equipment, and electrical supplies since 1999.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahd Road, Olaya District",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966-11-XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "SA",
      "availableLanguage": ["en", "ar"]
    }
  };

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
