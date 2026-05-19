import { TechBackground } from "@/components/ui/tech-background"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Package, Users, Award, MessageSquare, Building2, Send } from "lucide-react"
import { products, productCategories } from "@/data/products"
import Image from "next/image"

export default function HomePage() {
  const featuredCategories = productCategories.slice(1, 5)
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <TechBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Est. 1999 · Riyadh, KSA</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gradient animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            THE PHYSICAL <br /> FOUNDATION OF <br /> <span className="text-primary">FUTURE NETWORKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-bold animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Rukun Al Zuhab Trading Co. provides world-class infrastructure solutions 
            for the Middle East's largest sectors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Button asChild size="lg" className="rounded-full h-16 px-10 font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20">
              <Link href="/products">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 font-black uppercase tracking-widest text-sm border-2">
              <Link href="/about">Our Legacy</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={Package} value="285+" label="Active SKUs" />
            <StatItem icon={Users} value="5000+" label="Projects Delivered" />
            <StatItem icon={Globe} value="25+" label="Regional Reach" />
            <StatItem icon={Award} value="ISO" label="Certified Quality" />
          </div>
        </div>
      </section>

      {/* Featured Categories (Light) */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4">Core Ecosystem</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                OUR PRODUCT <br /> <span className="text-muted-foreground/40 italic">VERTICALS</span>
              </h3>
            </div>
            <Button asChild variant="ghost" className="font-bold uppercase tracking-widest text-xs group">
              <Link href="/products">
                View All Protocol <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((cat, i) => (
              <div key={cat.id} className="group relative bg-background border border-border p-8 rounded-[32px] hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl shadow-black/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-4">{cat.name}</h4>
                  <p className="text-muted-foreground text-sm font-medium mb-8 leading-relaxed">
                    Premium infrastructure solutions for enterprise networking requirements.
                  </p>
                  <Link href={`/products/category/${cat.id}`} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-primary hover:underline group-hover:translate-x-1 transition-transform">
                    Initialize Sector <ArrowRight className="ml-2 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Intro (Dark) */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-center opacity-5 scale-150" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -left-12 -top-12 w-64 h-64 bg-cyan-glow/10 blur-[100px] rounded-full" />
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
                EXCELLENCE <br /> THROUGH <br /> <span className="text-cyan-glow italic">CONSISTENCY</span>
              </h2>
              <div className="space-y-8">
                <Feature icon={ShieldCheck} text="ISO 9001:2015 certified quality management systems." />
                <Feature icon={Globe} text="Regional leader in industrial trading and supply chain." />
                <Feature icon={CheckCircle2} text="Official distribution partner for global infrastructure brands." />
              </div>
              <Button asChild className="mt-16 bg-white text-navy hover:bg-cyan-glow hover:text-navy rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm transition-all duration-500 shadow-2xl shadow-cyan-glow/20">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl shadow-black/50">
              <Image 
                src="/image.png" 
                alt="Corporate Excellence" 
                width={800} 
                height={600} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/40 mix-blend-overlay group-hover:bg-transparent transition-colors duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-center text-muted-foreground mb-16">Official Protocol Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <PartnerLogo name="AVAYO" />
            <PartnerLogo name="CORNING" />
            <PartnerLogo name="LEGRAND" />
            <PartnerLogo name="SIEMON" />
            <PartnerLogo name="PANDUIT" />
          </div>
        </div>
      </section>

      {/* Testimonials (Light) */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Client Feedback</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              TRUSTED BY <br /> <span className="text-primary italic">INDUSTRY LEADERS</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Eng. Khalid Al-Faisal" 
              role="Senior MEP Consultant" 
              content="Rukun Al Zuhab has consistently delivered high-specification copper and fiber systems for our large-scale residential projects in Riyadh."
            />
            <TestimonialCard 
              name="Omar Hassan" 
              role="Data Center Manager" 
              content="The D-Series rack systems and containment solutions provided by RZ were perfect for our Tier-4 upgrade. Their technical support is unmatched."
            />
            <TestimonialCard 
              name="Sarah Mohammed" 
              role="Procurement Director" 
              content="Reliable, ISO-certified, and always on schedule. RZ is our primary source for all industrial networking infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Inventory Spotlight</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
              ENGINEERED FOR <br /> <span className="text-primary italic">PERFORMANCE</span>
            </h3>
            <p className="text-muted-foreground font-bold">
              Explore our master protocol inventory of specialized networking and industrial equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm border-2">
              <Link href="/products">Load Master Database</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter (Dark) */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/globe.svg')] bg-no-repeat bg-right opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[48px] p-12 md:p-20 backdrop-blur-xl text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6">Technical <span className="text-cyan-glow">Briefings</span></h2>
            <p className="text-lg opacity-70 mb-12 max-w-xl mx-auto font-medium">
              Get the latest updates on inventory arrivals and technical infrastructure trends in the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="PROCURMENT_EMAIL_ADDRESS..." 
                className="flex-grow h-16 bg-white/5 border border-white/10 rounded-full px-8 font-bold focus:outline-none focus:ring-2 focus:ring-cyan-glow/50 placeholder:text-white/20 text-sm uppercase tracking-widest"
              />
              <Button className="h-16 rounded-full px-10 font-black uppercase tracking-widest text-xs bg-cyan-glow text-navy hover:bg-white hover:text-navy transition-all shadow-2xl shadow-cyan-glow/20">
                Subscribe <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-primary rounded-[48px] p-12 md:p-24 text-primary-foreground text-center relative overflow-hidden group shadow-2xl shadow-primary/30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-[250px] -mt-[250px] blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 relative z-10">
            READY TO <span className="italic">INITIALIZE?</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-16 max-w-2xl mx-auto opacity-90 relative z-10">
            Connect with our senior technical procurement desk for enterprise sourcing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 relative z-10">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm shadow-2xl transition-all hover:scale-105">
              <Link href="/contact">Launch Inquiry</Link>
            </Button>
            <a href="tel:+966550602197" className="text-xl font-black hover:text-white transition-colors">
              +966 55 060 2197
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatItem({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-[20px] text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <p className="text-3xl font-black tracking-tighter">{value}</p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

function Feature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-start space-x-6 group">
      <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center text-cyan-glow group-hover:bg-cyan-glow group-hover:text-navy transition-all shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-lg font-bold opacity-80 group-hover:opacity-100 transition-opacity">{text}</p>
    </div>
  )
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      <Building2 className="w-8 h-8 group-hover:text-primary transition-colors" />
      <span className="text-xl font-black tracking-tighter group-hover:text-primary transition-colors uppercase">{name}</span>
    </div>
  )
}

function TestimonialCard({ name, role, content }: { name: string; role: string; content: string }) {
  return (
    <div className="bg-background border border-border p-10 rounded-[48px] shadow-xl shadow-black/[0.02] hover:border-primary transition-colors group relative">
      <MessageSquare className="w-10 h-10 text-primary/10 absolute top-10 right-10 group-hover:text-primary transition-colors" />
      <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-10">"{content}"</p>
      <div>
        <h4 className="font-black tracking-tighter uppercase text-primary mb-1">{name}</h4>
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`} className="group relative bg-background border border-border rounded-[32px] p-4 hover:border-primary transition-all duration-500 flex flex-col h-full shadow-lg shadow-black/5 overflow-hidden">
      <div className="relative aspect-square rounded-[24px] overflow-hidden bg-secondary/30 mb-6">
        {product.image ? (
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic font-black text-xs uppercase tracking-widest">No Protocol Sync</div>
        )}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-border px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-primary">
          {product.code}
        </div>
      </div>
      <div className="px-2 pb-4 flex flex-col flex-grow">
        <h4 className="text-md font-black tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2 uppercase leading-tight">
          {product.name}
        </h4>
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-6 opacity-60">
          Sector: {product.category}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-primary">Analyze Specification</span>
          <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
