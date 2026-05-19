import { products, productCategories } from "@/data/products"
import { constructMetadata } from "@/lib/seo"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, MessageCircle, Share2, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) return constructMetadata({ title: "Product Not Found" })

  return constructMetadata({
    title: product.name,
    description: product.description || `Technical specifications for ${product.name}. High-quality infrastructure solutions from Rukun Al Zuhab Trading Co.`,
  })
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) notFound()

  const category = productCategories.find((c) => c.id === product.category)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex flex-col w-full bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs / Back */}
        <Link href="/products" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-3 h-3 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Protocol Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Gallery */}
          <div className="relative group">
            <div className="relative aspect-square rounded-[48px] overflow-hidden bg-secondary/30 border border-border flex items-center justify-center p-12">
              {product.image ? (
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105" 
                />
              ) : (
                <div className="text-xl font-black uppercase tracking-widest text-muted-foreground/20 italic">No Visual Protocol</div>
              )}
              <div className="absolute top-8 left-8 bg-background border border-border px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                Code: {product.code}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="space-y-4 mb-10">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">{category?.name}</span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">{product.name}</h1>
            </div>

            <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-12">
              {product.description || "Enterprise-grade infrastructure solution engineered for high-performance network environments. This unit meets all international technical standards for commercial and industrial deployment."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <Feature icon={ShieldCheck} title="ISO Certified" desc="Quality assured protocol." />
              <Feature icon={Zap} title="High Efficiency" desc="Optimized for performance." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button asChild size="lg" className="rounded-full h-16 px-10 font-black uppercase tracking-widest text-xs flex-grow shadow-2xl shadow-primary/20">
                <Link href="/contact">Initialize Inquiry</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 font-black uppercase tracking-widest text-xs border-2">
                <a href={`https://wa.me/966550602197?text=Hello, I am interested in ${product.name} (Code: ${product.code})`} target="_blank" rel="noopener noreferrer">
                   WhatsApp Desk <MessageCircle className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full w-16 h-16 shrink-0 border">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Related */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-24">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12">Related Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link href={`/products/${p.id}`} key={p.id} className="group bg-secondary/20 border border-border p-6 rounded-[32px] hover:border-primary transition-all">
                  <div className="relative aspect-square rounded-[24px] overflow-hidden bg-background mb-6">
                    {p.image ? <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" /> : <div className="w-full h-full" />}
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-tight line-clamp-2 mb-2 group-hover:text-primary transition-colors">{p.name}</h4>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{p.code}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-center space-x-4 p-4 rounded-3xl bg-secondary/30 border border-border">
      <div className="w-10 h-10 bg-background rounded-2xl flex items-center justify-center text-primary shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h5 className="text-xs font-black uppercase tracking-widest">{title}</h5>
        <p className="text-[10px] font-bold text-muted-foreground uppercase">{desc}</p>
      </div>
    </div>
  )
}
