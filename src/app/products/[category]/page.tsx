"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Package, ArrowRight, Cpu, Network, Database, Settings, ShieldCheck, Wrench, Terminal, LucideIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
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
    <div className="bg-white">
      {/* Hero Section - Themed to Category */}
      <section className="relative h-[40vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt={category.name}
            fill
            className="object-cover grayscale brightness-[0.15] contrast-[1.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/60 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
                <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase font-mono">
                  SECTOR_SPECIFIC_VIEW // {categoryId.toUpperCase()}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
                  <Icon className="h-8 w-8 text-red" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">
                  {category.name}
                </h1>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Local Command Bar */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <Link href="/products" className="text-[10px] font-bold text-blue/40 hover:text-red uppercase tracking-widest transition-colors flex items-center gap-2">
               <ArrowRight className="h-3 w-3 rotate-180" /> Back to Master Catalog
             </Link>
             <div className="h-4 w-px bg-gray-100 hidden md:block" />
             <div className="flex items-center gap-3">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <p className="text-[10px] font-bold text-blue uppercase tracking-widest">{category.name} Protocol Active</p>
             </div>
          </div>

          <div className="relative w-full md:w-80 group">
            <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-blue/30 group-focus-within:text-red transition-colors" />
            <input
              type="text"
              placeholder="FILTER_WITHIN_SECTOR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-100 focus:border-red focus:bg-white pl-10 pr-6 py-3 rounded-full text-[11px] font-bold text-blue placeholder:text-blue/20 transition-all outline-none uppercase tracking-widest"
            />
          </div>
        </div>
      </section>

      {/* Product Matrix */}
      <section className="py-24 tech-grid min-h-[600px]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            {filteredProducts.length === 0 ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-40 text-center rounded-[3rem] bg-gray-50/50 border border-dashed border-gray-200"
              >
                <Package className="h-16 w-16 text-blue/5 mx-auto mb-6" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue/20">Zero matches in sector protocol</p>
                <Button 
                  variant="ghost" 
                  onClick={() => setSearchQuery("")}
                  className="mt-8 text-red font-bold text-[10px] uppercase tracking-widest"
                >
                  Clear Sector Filter
                </Button>
              </motion.div>
            ) : (
              <StaggerContainer 
                key="grid"
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredProducts.map((product) => {
                  return (
                    <StaggerItem 
                      key={product.id} 
                      className={cn(
                        "group bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-red/20 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between min-h-[500px] overflow-hidden"
                      )}
                    >
                      <div className="absolute -right-8 -top-8 h-48 w-48 bg-blue/[0.02] rounded-full group-hover:bg-red/[0.03] transition-colors duration-700" />
                      <Icon className="absolute -right-4 -bottom-4 h-32 w-32 text-blue/[0.01] group-hover:text-red/[0.03] transition-colors duration-700" />
                      
                      <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-start">
                          <div className="px-3 py-1 rounded bg-blue/5 border border-blue/5 text-[8px] font-mono font-bold text-blue/40 uppercase tracking-widest group-hover:text-red group-hover:border-red/10 transition-all">
                            {product.code}
                          </div>
                          <Icon className="h-4 w-4 text-blue/20 group-hover:text-red transition-colors" />
                        </div>

                        {product.image && (
                          <div className="relative w-full h-44 overflow-hidden rounded-xl border border-gray-50 bg-gray-50/50 p-6">
                            <Image 
                              src={product.image} 
                              alt={product.name}
                              fill
                              className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-blue leading-tight group-hover:text-red transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="text-[12px] text-blue/50 leading-relaxed line-clamp-3 font-medium">
                              {product.description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="relative z-10 pt-6 border-t border-gray-50 flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-[8px] font-bold text-blue/20 uppercase tracking-[0.2em]">Deployment Sector</p>
                          <p className="text-[10px] font-bold text-blue uppercase tracking-widest">{category.name}</p>
                        </div>
                        <Link 
                          href="/contact" 
                          className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-red hover:text-white hover:border-red transition-all shadow-sm hover:shadow-xl group/btn"
                        >
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
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
