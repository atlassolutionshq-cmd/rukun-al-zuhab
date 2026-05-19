"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Share2, Globe, ArrowUpRight, MessageSquare } from "lucide-react"
import { siteConfig } from "@/config/site"
import { productCategories } from "@/data/products"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white pt-24 pb-12 overflow-hidden relative">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-12 h-12 bg-white flex items-center justify-center text-navy rounded-xl font-black text-2xl transform transition-transform group-hover:rotate-12">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none text-white">RUKUN AL ZUHAB</span>
                <span className="text-[10px] font-bold text-cyan-glow tracking-widest uppercase">Trading Co.</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Excellence in trading and industrial solutions. Providing the physical foundations for a connected future since 1999.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLink href={siteConfig.links.linkedin} icon={Share2} />
              <SocialLink href={siteConfig.links.twitter} icon={Globe} />
              <SocialLink href={siteConfig.links.facebook} icon={MessageSquare} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black tracking-tighter mb-8 text-white uppercase">Navigation</h4>
            <ul className="space-y-4">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-cyan-glow transition-colors text-sm font-bold flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-black tracking-tighter mb-8 text-white uppercase">Categories</h4>
            <ul className="space-y-4">
              {productCategories.slice(1, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products/category/${cat.id}`} className="text-white/60 hover:text-cyan-glow transition-colors text-sm font-bold flex items-center group">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-lg font-black tracking-tighter text-white uppercase">Contact Desk</h4>
            <div className="space-y-6">
              <ContactItem icon={MapPin} title="Address" content={siteConfig.contact.address} />
              <ContactItem icon={Phone} title="Direct Line" content={siteConfig.contact.phone} />
              <ContactItem icon={Mail} title="Email Support" content={siteConfig.contact.email} />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
            © {currentYear} Rukun Al Zuhab Trading Co. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 text-xs font-bold text-white/40 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-cyan-glow transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-glow transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  )
}

function ContactItem({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-cyan-glow group-hover:bg-cyan-glow group-hover:text-navy transition-all duration-300 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-1">{title}</p>
        <p className="text-sm font-bold text-white/80 leading-relaxed group-hover:text-white transition-colors">{content}</p>
      </div>
    </div>
  )
}
