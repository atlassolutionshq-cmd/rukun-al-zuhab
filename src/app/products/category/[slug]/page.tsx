import { products, productCategories } from "@/data/products"
import { constructMetadata } from "@/lib/seo"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = productCategories.find((c) => c.id === slug)

  if (!category) return constructMetadata({ title: "Category Not Found" })

  return constructMetadata({
    title: `${category.name} Solutions`,
    description: `Browse our full protocol of ${category.name} solutions. Premium industrial networking infrastructure from Rukun Al Zuhab Trading Co.`,
  })
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = productCategories.find((c) => c.id === slug)

  if (!category) notFound()

  const categoryProducts = products.filter((p) => p.category === slug)

  return (
    <div className="flex flex-col w-full bg-background min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4">
        {/* Category Hero */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Deployment Sector</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
            {category.name.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 1 ? "text-primary italic" : ""}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-bold max-w-3xl leading-relaxed">
            High-performance architecture specifically engineered for {category.name} requirements in industrial and commercial environments.
          </p>
        </div>

        {/* Results */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categoryProducts.map((p) => (
              <Link href={`/products/${p.id}`} key={p.id} className="group relative bg-background border border-border rounded-[40px] p-5 hover:border-primary transition-all duration-500 flex flex-col h-full shadow-xl shadow-black/[0.02] overflow-hidden">
                <div className="relative aspect-square rounded-[32px] overflow-hidden bg-secondary/30 mb-8">
                  {p.image ? (
                    <Image 
                      src={p.image} 
                      alt={p.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-muted-foreground/20 italic">Protocol Null</div>
                  )}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-primary">
                    {p.code}
                  </div>
                </div>
                <div className="flex flex-col flex-grow px-2">
                  <h4 className="text-md font-black tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2 uppercase leading-tight">
                    {p.name}
                  </h4>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">Analyze Unit</span>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-secondary/20 rounded-[48px] border-2 border-dashed border-border">
            <Package className="w-16 h-16 text-muted-foreground/20 mx-auto mb-8" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">No active protocol</h3>
            <p className="text-muted-foreground font-medium mb-12">This sector is currently undergoing inventory sync.</p>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/products">Return to Database</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
