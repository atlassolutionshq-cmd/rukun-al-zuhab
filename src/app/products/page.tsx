"use client"

import { useState, useMemo } from "react"
import { products, productCategories } from "@/data/products"
import { Search, Filter, X, ArrowRight, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.code.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Inventory Database</h2>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              MASTER <span className="text-primary italic">PROTOCOL</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-muted-foreground">
              Sourcing the complete chain of structured cabling, fiber systems, and rack solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="sticky top-20 z-50 bg-background/80 backdrop-blur-xl border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="SEARCH_MASTER_DATABASE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 bg-secondary/50 border border-border rounded-full pl-12 pr-6 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all uppercase tracking-widest"
              />
            </div>

            {/* Categories Scroll */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 w-full lg:w-auto">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border-2",
                    selectedCategory === cat.id 
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "bg-background border-border text-muted-foreground hover:border-primary/50"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="hidden lg:flex items-center space-x-2 bg-secondary p-1 rounded-full border border-border">
              <button 
                onClick={() => setViewMode("grid")}
                className={cn("p-2 rounded-full transition-all", viewMode === "grid" ? "bg-background text-primary shadow-sm" : "text-muted-foreground")}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={cn("p-2 rounded-full transition-all", viewMode === "list" ? "bg-background text-primary shadow-sm" : "text-muted-foreground")}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-background min-h-[600px]">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Showing {filteredProducts.length} results
            </p>
            { (searchQuery || selectedCategory !== "all") && (
              <Button 
                variant="ghost" 
                onClick={() => {setSearchQuery(""); setSelectedCategory("all")}}
                className="h-auto p-0 text-[10px] font-black uppercase tracking-widest text-destructive hover:bg-transparent"
              >
                <X className="w-3 h-3 mr-2" /> Clear All Filters
              </Button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                className={cn(
                  "grid gap-8",
                  viewMode === "grid" 
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
                    : "grid-cols-1"
                )}
              >
                {filteredProducts.map((p) => (
                  <motion.div
                    layout
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductItem product={p} viewMode={viewMode} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                  <Search className="w-8 h-8 text-muted-foreground/30" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">No results found</h3>
                <p className="text-muted-foreground font-medium">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

function ProductItem({ product, viewMode }: { product: any; viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <Link href={`/products/${product.id}`} className="group relative bg-background border border-border rounded-[32px] p-6 hover:border-primary transition-all duration-500 flex items-center space-x-8 shadow-xl shadow-black/[0.02]">
        <div className="relative w-32 h-32 rounded-[24px] overflow-hidden bg-secondary/30 shrink-0">
          {product.image ? (
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              sizes="(max-width: 768px) 128px, 128px"
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[8px] font-black uppercase tracking-widest text-muted-foreground/20 italic">No Image</div>
          )}
        </div>
        <div className="flex-grow">
          <div className="flex items-center space-x-3 mb-2">
            <span className="bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full">{product.code}</span>
            <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">/ {product.category}</span>
          </div>
          <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
          <p className="text-sm text-muted-foreground line-clamp-1 font-medium">{product.description || "Premium technical specification for industrial networking."}</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
          <ArrowRight className="w-5 h-5" />
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/products/${product.id}`} className="group relative bg-background border border-border rounded-[40px] p-5 hover:border-primary transition-all duration-500 flex flex-col h-full shadow-xl shadow-black/[0.02] overflow-hidden">
      <div className="relative aspect-square rounded-[32px] overflow-hidden bg-secondary/30 mb-8">
        {product.image ? (
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/20 italic">Protocol Null</div>
        )}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-primary">
          {product.code}
        </div>
      </div>
      <div className="flex flex-col flex-grow px-2">
        <h4 className="text-md font-black tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2 uppercase leading-tight">
          {product.name}
        </h4>
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-8 opacity-60">
          Sector: {product.category}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Analyze Unit</span>
          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
