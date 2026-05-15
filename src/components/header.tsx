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

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent border-b border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 flex h-24 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="w-10 h-10 bg-cyan flex items-center justify-center rounded-sm">
            <span className="text-navy font-black text-2xl">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-lg leading-none tracking-tight">RUKUN AL ZUHAB</span>
            <span className="text-cyan font-bold text-[10px] leading-tight tracking-[0.2em]">TRADING CO.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
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
                      "text-[13px] font-semibold transition-colors flex items-center gap-1",
                      pathname?.startsWith("/products")
                        ? "text-cyan"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("h-3 w-3 transition-transform", isProductsHovered && "rotate-180")} />
                  </Link>

                  <AnimatePresence>
                    {isProductsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-navy-light/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl overflow-hidden py-3 z-[100]"
                      >
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={cat.id === 'all' ? '/products' : `/products/${cat.id}`}
                            className="flex items-center px-6 py-2.5 hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-[12px] font-medium text-white/70 group-hover:text-cyan transition-colors">
                              {cat.name}
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
                  "text-[13px] font-semibold transition-colors",
                  isActive
                    ? "text-cyan"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="tel:+966550602197" className="flex items-center gap-2 text-white/90 hover:text-cyan transition-colors">
            <Phone className="h-4 w-4 text-cyan" />
            <span className="text-sm font-bold">+966 55 060 2197</span>
          </a>
          <Button asChild className="bg-cyan hover:bg-cyan/90 text-navy font-bold rounded-sm px-6 h-11 transition-all cyan-glow">
            <Link href="/contact">Get a Quote</Link>
          </Button>
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

