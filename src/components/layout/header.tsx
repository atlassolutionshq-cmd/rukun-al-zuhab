"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  )
  const headerBgDark = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  )

  const blur = useTransform(scrollY, [0, 50], [0, 8])

  return (
    <motion.header
      style={{
        backdropFilter: `blur(${blur}px)`,
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 border-b border-transparent",
        mobileMenuOpen && "bg-background"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-2xl transform transition-transform group-hover:rotate-12">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter leading-none">RUKUN AL ZUHAB</span>
            <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Trading Co.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors relative group",
                pathname === item.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.title}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                initial={false}
                animate={pathname === item.href ? { width: "100%" } : { width: "0%" }}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="rounded-full font-bold uppercase tracking-widest text-xs px-6">
            <Link href="/contact">Inquiry</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        className="md:hidden overflow-hidden bg-background border-b"
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-black tracking-tighter uppercase",
                pathname === item.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full font-black uppercase tracking-widest py-6">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </motion.div>
    </motion.header>
  )
}
