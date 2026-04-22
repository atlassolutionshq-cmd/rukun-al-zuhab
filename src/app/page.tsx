import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Building2, Hammer, ShieldCheck, Zap, Cpu, Network, Database, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Cpu,
    title: "Fiber Optics",
    description: "High-performance data transmission systems for regional infrastructure.",
  },
  {
    icon: Network,
    title: "Copper Networking",
    description: "Certified structured cabling solutions for mission-critical operations.",
  },
  {
    icon: Database,
    title: "Industrial Cabinets",
    description: "Strategic enclosure frameworks for advanced power and data distribution.",
  },
  {
    icon: Settings,
    title: "Technical Fittings",
    description: "Precision-engineered components for industrial-grade installations.",
  },
]

const stats = [
  { value: "25+", label: "Years active" },
  { value: "1000+", label: "SKUs" },
  { value: "500+", label: "Partners" },
  { value: "98%", label: "QA success" },
]

export default function HomePage() {
  return (
    <div className="bg-white tech-grid">
      {/* Hero Section - Futuristic Minimal */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-gradient-to-l from-red/5 via-transparent to-transparent pointer-events-none" />
        <div className="container-wide w-full grid lg:grid-cols-12 gap-16 items-center py-20 relative z-10">
          <div className="lg:col-span-8 space-y-12">
            <div className="inline-flex items-center gap-3 bg-blue/5 px-4 py-1.5 rounded-full border border-blue/5">
              <div className="h-1.5 w-1.5 rounded-full bg-red animate-pulse shadow-[0_0_8px_rgba(var(--brand-red),0.8)]" />
              <Badge className="bg-transparent text-blue border-none p-0 text-[10px] font-bold tracking-[0.2em] uppercase">
                Established 1999 • KSA Industrial Sector
              </Badge>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold text-blue leading-[0.85] tracking-tighter">
              The <span className="text-red italic">Source</span> <br />
              Code of <br />
              Industry.
            </h1>
            <p className="text-2xl text-blue/50 max-w-2xl leading-relaxed font-medium">
              We engineer the supply chains that power Saudi Arabia&apos;s most critical 
              infrastructure. Precision components for a digital-first industrial era.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-red hover:bg-red/90 text-white font-bold px-12 py-8 rounded-full transition-all text-[11px] uppercase tracking-widest glow-primary hover:-translate-y-1"
              >
                <Link href="/products">
                  Inventory Desk
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue/10 text-blue hover:bg-blue/5 px-12 py-8 rounded-full transition-all text-[11px] uppercase tracking-widest"
              >
                <Link href="/contact">Direct Inquiry</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Minimalist Tech Sidebar */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 pr-12 text-right">
          {[
            { n: "01", label: "Fiber" },
            { n: "02", label: "Copper" },
            { n: "03", label: "Cabinets" },
          ].map(item => (
            <div key={item.n} className="space-y-1 group cursor-default">
              <p className="text-xs font-bold text-red opacity-40 group-hover:opacity-100 transition-opacity">{item.n}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue/20 group-hover:text-blue transition-colors">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats - Tech Grid Minimal */}
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-5xl md:text-6xl font-bold text-blue tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-[9px] font-bold text-red uppercase tracking-[0.4em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors - Glass Cards */}
      <section className="py-32 bg-white relative">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Systems Architecture</p>
              <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter leading-none">
                Core <br />
                <span className="text-blue/20 italic">Intelligence</span>
              </h2>
            </div>
            <Link href="/products" className="group text-sm font-bold text-blue uppercase tracking-widest inline-flex items-center gap-4 py-4 px-8 bg-blue/5 rounded-full hover:bg-red hover:text-white transition-all glow-secondary hover:glow-primary">
              Full Stack Inventory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-2xl transition-all duration-500 space-y-12 relative overflow-hidden"
              >
                <div className="h-px w-12 bg-red" />
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-blue">{feature.title}</h3>
                  <p className="text-blue/50 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
                <feature.icon className="absolute -right-4 -bottom-4 h-24 w-24 text-blue/[0.03] group-hover:text-red/10 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Visual - Tech Split */}
      <section className="py-32 bg-gray-50/50 overflow-hidden border-y border-gray-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <h2 className="text-6xl md:text-8xl font-bold text-blue tracking-tighter leading-[0.9]">
                  Legacy <br /> <span className="text-red italic">01.</span>
                </h2>
                <p className="text-2xl text-blue/40 leading-relaxed font-medium max-w-md">
                  A quarter-century of industrial data. We provide the physical foundations 
                  for the region&apos;s digital future.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full px-12 py-8 bg-blue hover:bg-blue/90 text-white font-bold transition-all uppercase tracking-widest text-[11px] glow-secondary">
                <Link href="/about">Corporate Dossier</Link>
              </Button>
            </div>
            <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/50" />
              <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden grayscale contrast-125">
                <Image
                  src="/image.png"
                  alt="Rukun Al Zuhab Legacy"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
              </div>
              {/* Floating UI Elements */}
              <div className="absolute top-10 right-10 p-8 glass-futuristic rounded-3xl space-y-2">
                <p className="text-[10px] font-bold text-red uppercase tracking-widest">Protocol</p>
                <p className="text-sm font-bold text-blue">ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA - Futuristic */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container-wide text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-7xl md:text-9xl font-bold text-blue tracking-tighter leading-[0.85]">
              Project <br /><span className="text-red">Deployment.</span>
            </h2>
            <p className="text-2xl text-blue/30 max-w-lg mx-auto leading-relaxed font-medium">
              Direct access to our strategic procurement desk for high-volume inquiries.
            </p>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white px-20 py-10 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all glow-primary hover:-translate-y-2">
                <Link href="/contact">Start Initialization</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
