"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { Search, Package, ArrowRight, Download, Cpu, Network, Database, Settings, ShieldCheck, Wrench } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products, productCategories } from "@/data/products"

const categoryIcons: Record<string, any> = {
  fiber: Cpu,
  copper: Network,
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
    <div className="bg-[#fafafa] min-h-screen tech-grid">
      {/* Hero Section - Futuristic Technical */}
      <section className="bg-white pt-40 pb-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red/5 to-transparent pointer-events-none" />
        <div className="container-wide relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 bg-blue/5 px-4 py-2 rounded-full border border-blue/5">
              <div className="h-2 w-2 rounded-full bg-red animate-pulse shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue">Live Inventory Data</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-blue tracking-tighter leading-[0.85]">
              The <span className="text-red">Tech</span> <br />
              Stack.
            </h1>
            <p className="text-2xl text-blue/50 max-w-xl leading-relaxed font-medium">
              Precision components for mission-critical infrastructure. Search through our 
              verified regional supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Control Panel */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="container-wide py-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Categories with Icons */}
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            {productCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Package
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest transition-all group relative py-2",
                    activeCategory === cat.id
                      ? "text-blue"
                      : "text-blue/30 hover:text-blue"
                  )}
                >
                  <Icon className={cn("h-4 w-4 transition-colors", activeCategory === cat.id ? "text-red" : "text-blue/20 group-hover:text-red")} />
                  {cat.name}
                  {activeCategory === cat.id && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red shadow-[0_0_8px_rgba(var(--brand-red),0.5)]" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Futuristic Search */}
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue/30 group-focus-within:text-red transition-colors" />
            <input
              type="text"
              placeholder="Search ID / Description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-transparent focus:border-red/30 focus:bg-white pl-12 pr-6 py-4 rounded-xl text-sm font-bold text-blue placeholder:text-blue/20 transition-all outline-none"
            />
          </div>
        </div>
      </section>

      {/* Data Grid - No Images, Only Pure Data */}
      <section className="py-24">
        <div className="container-wide">
          {filteredProducts.length === 0 ? (
            <div className="py-40 text-center glass-futuristic rounded-[3rem]">
              <Package className="h-16 w-16 text-blue/5 mx-auto mb-6" />
              <p className="text-sm font-bold uppercase tracking-widest text-blue/20">No matching components found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const Icon = categoryIcons[product.category] || Package
                return (
                  <div 
                    key={product.id} 
                    className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all duration-500 relative flex flex-col justify-between h-[400px] overflow-hidden"
                  >
                    {/* Background Icon */}
                    <Icon className="absolute -right-8 -bottom-8 h-48 w-48 text-blue/[0.02] group-hover:text-red/[0.03] transition-colors" />
                    
                    <div className="space-y-8 relative z-10">
                      <div className="flex justify-between items-start">
                        <div className="px-4 py-1.5 rounded-full bg-blue/5 border border-blue/5 text-[9px] font-bold text-blue uppercase tracking-widest">
                          {product.code}
                        </div>
                        <Icon className="h-5 w-5 text-blue/20 group-hover:text-red transition-colors" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-blue tracking-tight leading-tight group-hover:text-red transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-[9px] font-bold text-blue/30 uppercase tracking-[0.2em]">Operational Sector</p>
                        <p className="text-xs font-bold text-blue uppercase">{product.category}</p>
                      </div>
                      <Button asChild variant="ghost" className="rounded-full h-12 w-12 p-0 hover:bg-red hover:text-white transition-all border border-blue/5">
                        <Link href="/contact">
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Sourcing Banner - Full Tech */}
      <section className="bg-blue py-40 text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-wide text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-red">Technical Procurement</p>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Direct <span className="text-red italic">Access</span>
            </h2>
          </div>
          <p className="text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium">
            Connect with our senior technical desk for high-volume procurement 
            frameworks and specialized industrial sourcing.
          </p>
          <Button asChild size="lg" className="rounded-full px-16 py-8 bg-red hover:bg-red/90 text-white font-bold uppercase tracking-widest text-xs transition-all glow-primary shadow-[0_0_40px_rgba(var(--brand-red),0.2)]">
            <Link href="/contact">Inquiry Desk</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
