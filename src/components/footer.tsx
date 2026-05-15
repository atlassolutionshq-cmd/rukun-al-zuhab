"use client"

import Link from "next/link"
import { ArrowRight, Phone, MapPin, Mail, Share2, Globe } from "lucide-react"

import { FadeIn } from "@/components/animations"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-24 pb-12 overflow-hidden">
      <FadeIn className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <div className="w-10 h-10 bg-cyan flex items-center justify-center rounded-sm">
                <span className="text-navy font-black text-2xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none tracking-tight">RUKUN AL ZUHAB</span>
                <span className="text-cyan font-bold text-[10px] leading-tight tracking-[0.2em]">TRADING CO.</span>
              </div>
            </Link>
            <p className="text-xl text-white/50 max-w-md leading-relaxed">
              Bridging global excellence with local industrial requirements since 1999. The foundation of Saudi Arabia's connected future.
            </p>
            <div className="flex gap-4">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan hover:border-cyan/30 transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-8">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-8">Direct Access</p>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-cyan transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-8">Contact Desk</p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <MapPin className="h-5 w-5 text-cyan shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    Olaya Riyadh,<br />
                    P.O Box : 335119 - Riyadh 11341
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="h-5 w-5 text-cyan shrink-0" />
                  <a href="tel:+966550602197" className="text-white/60 hover:text-cyan transition-colors text-sm font-bold">
                    +966 55 060 2197
                  </a>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="h-5 w-5 text-cyan shrink-0" />
                  <a href="mailto:info@rukunalzuhab.com" className="text-white/60 hover:text-cyan transition-colors text-sm">
                    info@rukunalzuhab.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            &copy; {new Date().getFullYear()} Rukun Al Zuhab Trading Co. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link key={label} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-cyan transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
