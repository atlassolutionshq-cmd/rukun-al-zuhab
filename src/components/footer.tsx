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
    <footer className="bg-navy border-t border-white/5 pt-32 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center bg-no-repeat opacity-[0.02] scale-150 pointer-events-none" />
      
      <FadeIn className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-90">
              <div className="w-12 h-12 bg-cyan flex items-center justify-center rounded-xl">
                <span className="text-navy font-black text-2xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-xl leading-none tracking-tight">RUKUN AL ZUHAB</span>
                <span className="label-tech text-[10px] mt-1">TRADING CO.</span>
              </div>
            </Link>
            <p className="text-2xl text-white/30 max-w-md leading-relaxed font-medium">
              Bridging global excellence with local industrial requirements since 1999.
            </p>
            <div className="flex gap-6">
              {[Share2, Globe, Mail].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-cyan hover:border-cyan/30 transition-all hover:scale-110">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="label-tech text-cyan mb-10">Access_Control</p>
            <ul className="space-y-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white transition-all flex items-center gap-3 group text-sm font-black uppercase tracking-widest"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="label-tech text-cyan mb-10">Contact_Protocol</p>
            <ul className="space-y-10">
              <li className="flex gap-6 items-start group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan/10 transition-colors">
                  <MapPin className="h-5 w-5 text-cyan" />
                </div>
                <span className="text-white/40 text-sm leading-relaxed font-bold">
                  Olaya Riyadh,<br />
                  P.O Box : 335119 - Riyadh 11341
                </span>
              </li>
              <li className="flex gap-6 items-center group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan/10 transition-colors">
                  <Phone className="h-5 w-5 text-cyan" />
                </div>
                <a href="tel:+966550602197" className="text-white/40 hover:text-white transition-all text-lg font-black tracking-tight">
                  +966 55 060 2197
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} RZ_INFRASTRUCTURE_TRADING // ALL RIGHTS RESERVED
            </p>
            <p className="text-[9px] font-mono text-cyan/20 uppercase tracking-[0.2em]">
              System_Version: 4.2.0_SA_Riyadh
            </p>
          </div>
          <div className="flex gap-10">
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <Link key={label} href="#" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 hover:text-cyan transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
