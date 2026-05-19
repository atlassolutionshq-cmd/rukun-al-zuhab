"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { motion, AnimatePresence } from "framer-motion"
import { productCategories } from "@/data/products"
import { Magnetic } from "@/components/animations"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isProductsHovered, setIsProductsHovered] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled 
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent border-b border-white/10 py-6"
      )}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-90">
          <div className="w-12 h-12 bg-cyan flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <span className="text-navy font-black text-2xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl leading-none tracking-tight">RUKUN AL ZUHAB</span>
            <span className="label-tech text-[10px] mt-1">TRADING CO.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div 
                  key={item.href}
                  className="relative py-2"
                  onMouseEnter={() => setIsProductsHovered(true)}
                  onMouseLeave={() => setIsProductsHovered(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-[12px] font-black uppercase tracking-widest transition-colors flex items-center gap-2",
                      pathname?.startsWith("/products")
                        ? "text-cyan"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isProductsHovered && "rotate-180")} />
                  </Link>

                  <AnimatePresence>
                    {isProductsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-navy/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden py-4 z-[100]"
                      >
                        <div className="hud-corner-tl" />
                        <div className="hud-corner-br" />
                        <div className="px-6 pb-4 mb-2 border-b border-white/5">
                          <p className="label-tech text-[9px]">Master Database</p>
                        </div>
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={cat.id === 'all' ? '/products' : `/products/${cat.id}`}
                            className="flex items-center px-6 py-3 hover:bg-white/5 transition-colors group/item"
                          >
                            <span className="text-[11px] font-bold text-white/50 group-hover/item:text-cyan group-hover/item:translate-x-1 transition-all">
                              {cat.name.toUpperCase()}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] font-black uppercase tracking-widest transition-colors",
                  isActive
                    ? "text-cyan"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="tel:+966550602197" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan group-hover:bg-cyan/5 transition-all">
              <Phone className="h-3.5 w-3.5 text-cyan" />
            </div>
            <span className="text-sm font-black">+966 55 060 2197</span>
          </a>
          <Magnetic strength={0.3}>
            <Button asChild className="bg-cyan hover:bg-cyan/90 text-navy font-black rounded-xl px-10 h-14 transition-all cyan-glow">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-white/10 bg-navy">
            <div className="flex flex-col h-full">
              <div className="p-8 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan flex items-center justify-center rounded-sm">
                    <span className="text-navy font-black text-xl">R</span>
                  </div>
                  <span className="text-white font-black text-md tracking-tight">RUKUN AL ZUHAB</span>
                </div>
              </div>
              <nav className="flex flex-col gap-2 p-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-4 rounded-lg text-lg font-bold transition-colors",
                      pathname === item.href
                        ? "bg-white/5 text-cyan"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-8 border-t border-white/10 bg-navy-light/50">
                <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-6">Contact Support</p>
                <a href="tel:+966550602197" className="text-xl font-bold text-white hover:text-cyan transition-colors block mb-2">
                  +966 55 060 2197
                </a>
                <p className="text-sm text-white/50">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

