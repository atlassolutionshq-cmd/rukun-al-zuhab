"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-colors relative py-1",
                pathname === item.href
                  ? "text-red"
                  : "text-gray-400 hover:text-red"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red rounded-full shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" />
              )}
            </Link>
          ))}

          <Link
            href="/products"
            className={cn(
              "text-[13px] font-bold uppercase tracking-widest transition-colors relative py-1",
              pathname?.startsWith("/products")
                ? "text-red"
                : "text-gray-400 hover:text-red"
            )}
          >
            Products
            {pathname?.startsWith("/products") && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red rounded-full shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" />
            )}
          </Link>

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
                {[...navItems, { href: "/products", label: "Products" }, { href: "/contact", label: "Contact" }].map((item) => (
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
