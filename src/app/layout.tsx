import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

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
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Action Button */}
        <a 
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[100] h-14 w-14 bg-[#25D366] text-white rounded-full flex items-center justify-center whatsapp-glow transition-all hover:scale-110 active:scale-95 group shadow-xl"
          aria-label="Contact on WhatsApp"
        >
          <svg className="h-6 w-6 transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L22 2l-2.6 4.6z"/></svg>
          <span className="absolute right-20 bg-white text-[#25D366] px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl border border-gray-100 translate-x-4 group-hover:translate-x-0 whitespace-nowrap">
            WhatsApp Us
          </span>
        </a>
      </body>
    </html>
  );
}
