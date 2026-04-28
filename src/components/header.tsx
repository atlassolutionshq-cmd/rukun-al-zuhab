"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { motion, AnimatePresence } from "framer-motion"
import { productCategories } from "@/data/products"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isProductsHovered, setIsProductsHovered] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/footer-logos.webp"
            alt="Rukun Al Zuhab"
            width={240}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-colors relative py-1",
                  isActive
                    ? "text-red"
                    : "text-gray-400 hover:text-red"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="header-active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red rounded-full shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" 
                  />
                )}
              </Link>
            )
          })}

          {/* Products with Tactical Dropdown */}
          <div 
            className="relative py-1"
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => setIsProductsHovered(false)}
          >
            <Link
              href="/products"
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-colors relative flex items-center gap-1.5",
                pathname?.startsWith("/products")
                  ? "text-red"
                  : "text-gray-400 hover:text-red"
              )}
            >
              Products
              <motion.div
                animate={{ rotate: isProductsHovered ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-3 w-3 flex items-center justify-center"
              >
                <Menu className="h-2 w-2" /> {/* Using Menu as a small chevron-like icon for industrial feel */}
              </motion.div>
              {pathname?.startsWith("/products") && (
                <motion.span 
                  layoutId="header-active-dot"
                  className="absolute -bottom-1 left-[calc(50%-8px)] -translate-x-1/2 w-1 h-1 bg-red rounded-full shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" 
                />
              )}
            </Link>

            <AnimatePresence>
              {isProductsHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-4 w-72 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-4 z-[100]"
                >
                  <div className="px-6 py-2 mb-2 border-b border-gray-50">
                    <p className="text-[10px] font-bold text-red uppercase tracking-[0.3em]">Protocol_Sectors</p>
                  </div>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={cat.id === 'all' ? '/products' : `/products/${cat.id}`}
                      className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-[11px] font-bold text-blue/60 group-hover:text-red uppercase tracking-widest transition-colors">
                        {cat.name}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button asChild variant="default" size="sm" className="rounded-full px-8 bg-red hover:bg-red/90 text-white transition-all ml-4 text-[11px] uppercase tracking-widest font-bold h-11 glow-primary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-gray-100">
            <div className="flex flex-col h-full bg-white">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                <Image
                  src="/footer-logos.webp"
                  alt="Rukun Al Zuhab"
                  width={200}
                  height={50}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <nav className="flex flex-col gap-2 p-8">
                {[...navItems, { href: "/products", label: "Products" }].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-5 rounded-xl text-xl font-bold transition-colors uppercase tracking-wider",
                      pathname === item.href
                        ? "bg-gray-50 text-primary"
                        : "text-gray-400 hover:bg-gray-50 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-8 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold mb-6">Regional Headquarters</p>
                <a href="tel:+96611XXXXXXX" className="text-2xl font-bold text-primary hover:text-gold transition-colors block mb-2">
                  +966 11 XXX XXXX
                </a>
                <p className="text-sm text-gray-500">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
