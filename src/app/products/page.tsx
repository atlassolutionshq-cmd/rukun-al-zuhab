"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Package, ArrowRight, Download, Cpu, Network, Database, Settings, ShieldCheck, Wrench, Terminal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products, productCategories } from "@/data/products"

const categoryIcons: Record<string, any> = {
  fiber: Cpu,
  copper: Network,
  "copper-system": ShieldCheck,
  cabinets: Database,
  tools: Wrench,
  accessories: Settings,
  all: Package,
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="bg-white">
      {/* Hero Section - Minimalist & Atmospheric */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Inventory Management"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/60 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
              <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                STRATEGIC INVENTORY • LIVE DATA
              </span>
            </div>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Technical <br />
                <span className="text-red italic font-medium">Sourcing</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-normal">
                Precision components for mission-critical infrastructure. Search through our 
                verified regional supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Command Center - Control Panel */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-2xl border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Advanced Category Interface */}
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {productCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Package
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all group relative py-2",
                    isActive ? "text-blue" : "text-blue/30 hover:text-blue"
                  )}
                >
                  <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-red" : "text-blue/20 group-hover:text-red")} />
                  {cat.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red shadow-[0_0_8px_rgba(var(--brand-red),0.5)]" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Search Terminal */}
          <div className="relative w-full lg:w-96 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              <Terminal className="h-4 w-4 text-blue/30 group-focus-within:text-red transition-colors" />
              <span className="text-[10px] font-bold text-blue/10 group-focus-within:hidden">SYS_SEARCH:</span>
            </div>
            <input
              type="text"
              placeholder="Search ID / Keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50/50 border border-gray-100 focus:border-red/20 focus:bg-white pl-28 pr-6 py-4 rounded-xl text-[13px] font-bold text-blue placeholder:text-blue/20 transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* Inventory Grid - Technical Data Cards */}
      <section className="py-32 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {filteredProducts.length === 0 ? (
            <div className="py-40 text-center glass-futuristic rounded-[3rem] bg-gray-50/50">
              <Package className="h-16 w-16 text-blue/5 mx-auto mb-6" />
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue/20">Zero matches in current protocol</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const Icon = categoryIcons[product.category] || Package
                return (
                  <div 
                    key={product.id} 
                    className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-red/20 hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between min-h-[520px] overflow-hidden"
                  >
                    {/* Background Visual Element */}
                    <div className="absolute -right-8 -top-8 h-48 w-48 bg-blue/[0.02] rounded-full group-hover:bg-red/[0.03] transition-colors duration-700" />
                    <Icon className="absolute -right-4 -bottom-4 h-32 w-32 text-blue/[0.01] group-hover:text-red/[0.03] transition-colors duration-700" />
                    
                    <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-start">
                        <div className="px-4 py-1.5 rounded-md bg-blue/5 border border-blue/5 text-[9px] font-bold text-blue/40 uppercase tracking-[0.3em] group-hover:text-red group-hover:border-red/10 transition-all">
                          {product.code}
                        </div>
                        <Icon className="h-5 w-5 text-blue/20 group-hover:text-red transition-colors" />
                      </div>

                      {product.image && (
                        <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-gray-50 bg-gray-50/50">
                          <Image 
                            src={product.image} 
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue tracking-tight leading-tight group-hover:text-red transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className="text-[13px] text-blue/50 leading-relaxed line-clamp-3 font-medium">
                            {product.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                      <div className="space-y-1.5">
                        <p className="text-[9px] font-bold text-blue/20 uppercase tracking-[0.3em]">Operational Sector</p>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-red/40 group-hover:bg-red animate-pulse" />
                          <p className="text-[11px] font-bold text-blue uppercase tracking-widest">
                            {productCategories.find(c => c.id === product.category)?.name || product.category}
                          </p>
                        </div>
                      </div>
                      <Link 
                        href="/contact" 
                        className="h-14 w-14 rounded-full border border-gray-100 flex items-center justify-center hover:bg-red hover:text-white hover:border-red transition-all shadow-sm hover:shadow-xl group/btn"
                      >
                        <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Sourcing Desk - Minimalist Visual Banner */}
      <section className="py-40 relative overflow-hidden bg-blue">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Technical Sourcing Desk"
            fill
            className="object-cover opacity-10 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-blue/90" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-red/60">SYSTEMS PROCUREMENT</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
              Direct <span className="text-red italic">Terminal</span>
            </h2>
          </div>
          <p className="text-lg text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
            Connect with our senior technical desk for high-volume procurement 
            frameworks and specialized industrial sourcing.
          </p>
          <div className="pt-8">
            <Button asChild size="lg" className="rounded-full px-16 py-8 bg-red hover:bg-red/90 text-white font-bold uppercase tracking-[0.2em] text-[11px] transition-all glow-primary shadow-2xl">
              <Link href="/contact">Initialize Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
