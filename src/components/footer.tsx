import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/footer-logos.webp"
                alt="Rukun Al Zuhab"
                width={280}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-2xl font-bold tracking-tight text-blue max-w-md leading-snug">
              Bridging global excellence with local industrial requirements since 1999.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Headquarters</p>
                <p className="text-sm font-medium text-blue">Riyadh, Saudi Arabia</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Direct Line</p>
                <p className="text-sm font-medium text-blue">+966 11 XXX XXXX</p>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-3 lg:offset-1 grid grid-cols-1 gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-8">Direct Access</p>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-bold text-blue hover:text-red transition-colors inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / Contact CTA */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red mb-8">Strategic Updates</p>
              <p className="text-blue/60 mb-8 text-sm leading-relaxed">
                Join our corporate network for technical briefs and regional market analysis.
              </p>
              <form className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-gray-200 py-4 text-blue placeholder:text-gray-300 focus:border-red focus:outline-none transition-colors"
                />
                <button className="absolute right-0 bottom-4 text-[10px] font-bold uppercase tracking-widest text-blue hover:text-red transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <div className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Rukun Al Zuhab Trading Co. All rights reserved.
          </div>
          <div className="flex gap-10">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-blue transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
