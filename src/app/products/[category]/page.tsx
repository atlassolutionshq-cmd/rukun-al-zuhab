"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Package, ArrowRight, Cpu, Network, Database, Settings, ShieldCheck, Wrench, Search, LucideIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { products, productCategories } from "@/data/products"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const categoryIcons: Record<string, LucideIcon> = {
  fiber: Cpu,
  copper: Network,
  "copper-system": ShieldCheck,
  cabinets: Database,
  tools: Wrench,
  accessories: Settings,
  "rack-system": Database,
  "data-center-system": Network,
  "fiber-system": Cpu,
  all: Package,
}

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.category as string
  const [searchQuery, setSearchQuery] = useState("")

  const category = useMemo(() => {
    return productCategories.find(c => c.id === categoryId)
  }, [categoryId])

  if (!category) {
    notFound()
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = product.category === categoryId
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, categoryId])

  const Icon = categoryIcons[categoryId] || Package

  return (
    <div className="bg-navy min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative h-[40vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt={category.name}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-3 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                <span className="text-[10px] font-black text-cyan uppercase tracking-[0.3em]">Sector Specific View // {categoryId.toUpperCase()}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
                  <Icon className="h-8 w-8 text-cyan" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                  {category.name}
                </h1>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── COMMAND BAR ─── */}
      <section className="sticky top-24 z-40 bg-navy/80 backdrop-blur-xl border-y border-white/10 py-6">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <Link href="/products" className="text-[10px] font-black text-white/40 hover:text-cyan uppercase tracking-widest transition-colors flex items-center gap-2">
               <ArrowRight className="h-3 w-3 rotate-180" /> Back to Master Catalog
             </Link>
             <div className="h-4 w-px bg-white/10 hidden md:block" />
             <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
               <p className="text-[10px] font-black text-white uppercase tracking-widest">{category.name} Protocol Active</p>
             </div>
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 group-focus-within:text-cyan transition-colors" />
            <input
              type="text"
              placeholder="FILTER_WITHIN_SECTOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-cyan/50 focus:bg-white/10 pl-11 pr-6 py-3.5 rounded-lg text-[11px] font-black text-white placeholder:text-white/20 transition-all outline-none uppercase tracking-widest"
            />
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-24">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            {filteredProducts.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-40 text-center rounded-3xl bg-white/5 border border-dashed border-white/10"
              >
                <Package className="h-16 w-16 text-white/5 mx-auto mb-6" />
                <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/20">Zero matches in sector protocol</p>
                <Button 
                  variant="ghost" 
                  onClick={() => setSearchQuery("")}
                  className="mt-8 text-cyan font-black text-xs uppercase tracking-widest hover:bg-cyan/10"
                >
                  Clear Sector Filter
                </Button>
              </motion.div>
            ) : (
              <StaggerContainer 
                key="grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => {
                  return (
                    <StaggerItem 
                      key={product.id} 
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-cyan/30 transition-all duration-300 relative flex flex-col justify-between min-h-[500px] overflow-hidden"
                    >
                      <div className="absolute -right-8 -top-8 h-48 w-48 bg-cyan/[0.02] rounded-full group-hover:bg-cyan/[0.05] transition-colors" />
                      
                      <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 bg-cyan/10 border border-cyan/20 text-[10px] font-black text-cyan uppercase tracking-widest rounded-md">
                            {product.code}
                          </div>
                          <Icon className="h-5 w-5 text-white/20 group-hover:text-cyan transition-colors" />
                        </div>

                        {product.image && (
                          <div className="relative w-full h-48 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6">
                            <Image 
                              src={product.image} 
                              alt={product.name}
                              fill
                              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="text-sm text-white/40 leading-relaxed line-clamp-3">
                              {product.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Deployment Sector</p>
                          <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">{category.name}</p>
                        </div>
                        <Link 
                          href="/contact" 
                          className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-cyan group-hover:text-cyan transition-all cyan-glow"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
