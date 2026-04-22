import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Building2, Hammer, ShieldCheck, Zap, Cpu, Network, Database, Settings, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Cpu,
    title: "Fiber Optics",
    description: "High-performance data transmission systems for regional infrastructure.",
    id: "SYS_FIB_01"
  },
  {
    icon: Network,
    title: "Copper Networking",
    description: "Certified structured cabling solutions for mission-critical operations.",
    id: "SYS_COP_02"
  },
  {
    icon: Database,
    title: "Industrial Cabinets",
    description: "Strategic enclosure frameworks for advanced power and data distribution.",
    id: "SYS_CAB_03"
  },
  {
    icon: Settings,
    title: "Technical Fittings",
    description: "Precision-engineered components for industrial-grade installations.",
    id: "SYS_FIT_04"
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
    <div className="bg-white">
      {/* Hero Section - Minimalist & Sophisticated */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Industrial Background"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/40 to-transparent z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <h1 className="sr-only">Rukun Al Zuhab Trading Co - Leading Industrial Solutions in Saudi Arabia</h1>
            <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
              <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                ESTABLISHED 1999 • RIYADH HEADQUARTERS
              </span>
            </div>
            
            <div className="space-y-8">
              <div className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Engineering the <br />
                <span className="text-red italic font-medium">foundations</span> of <br />
                Kingdom industry.
              </div>
              
              <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                Strategic procurement and distribution of high-performance 
                industrial components for a digital-first era.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-red hover:bg-red/90 text-white font-bold px-10 h-14 rounded-full transition-all text-[11px] uppercase tracking-widest shadow-2xl hover:-translate-y-0.5 glow-primary"
              >
                <Link href="/products">Explore Inventory</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white hover:text-red hover:bg-transparent px-0 h-14 transition-all text-[11px] uppercase tracking-widest flex items-center gap-4 group"
              >
                <Link href="/contact" className="inline-flex items-center gap-4">
                  Request Specifications
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 right-16 z-20 hidden lg:grid grid-cols-2 gap-x-20 gap-y-10">
          {stats.slice(0, 4).map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl font-bold text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Line - Technical Precision */}
      <section className="bg-white py-32 border-b border-gray-50 tech-grid">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-5xl font-bold text-blue tracking-tighter leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-red uppercase tracking-[0.4em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Intelligence - Technical Protocol Cards */}
      <section className="py-32 bg-white relative">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-8 bg-red" />
                <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">
                  SYSTEMS ARCHITECTURE
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter leading-none">
                Industrial <br />
                <span className="text-blue/20 italic">Intelligence</span>
              </h2>
            </div>
            <Link href="/products" className="group text-[11px] font-bold text-blue uppercase tracking-widest inline-flex items-center gap-6 h-14 px-10 bg-gray-50 rounded-full hover:bg-red hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl">
              Full Protocol Inventory <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-2xl transition-all duration-500 space-y-12 relative overflow-hidden h-[450px] flex flex-col justify-between"
              >
                <div className="absolute top-12 right-12 text-[8px] font-bold text-blue/10 tracking-[0.3em] uppercase group-hover:text-red/20 transition-colors">
                  {feature.id}
                </div>
                
                <div className="space-y-10 relative z-10">
                  <div className="h-px w-12 bg-red group-hover:w-full transition-all duration-700" />
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold tracking-tight text-blue">{feature.title}</h3>
                    <p className="text-blue/50 leading-relaxed text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <feature.icon className="h-8 w-8 text-blue/10 group-hover:text-red transition-all duration-700 self-end" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Visual - Technical Split */}
      <section className="py-32 bg-gray-50/30 overflow-hidden border-y border-gray-100">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-red" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">
                    THE LEGACY PROTOCOL
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter leading-[1.1]">
                  Standard <br /> <span className="text-red italic">01.</span>
                </h2>
                <p className="text-lg md:text-xl text-blue/40 leading-relaxed font-medium max-w-md">
                  A quarter-century of industrial data. We provide the physical foundations 
                  for the region&apos;s digital future.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full h-14 px-10 bg-blue hover:bg-blue/90 text-white font-bold transition-all uppercase tracking-widest text-[11px] glow-secondary">
                <Link href="/about">Corporate Dossier</Link>
              </Button>
            </div>
            
            <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/50" />
              <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden grayscale contrast-125 border border-gray-100">
                <Image
                  src="/image.png"
                  alt="Rukun Al Zuhab Legacy"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
              </div>
              {/* Floating UI Elements */}
              <div className="absolute top-12 right-12 p-10 glass-futuristic rounded-[2.5rem] border-white/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                  <p className="text-[10px] font-bold text-red uppercase tracking-widest">Protocol Verified</p>
                </div>
                <p className="text-lg font-bold text-blue leading-tight tracking-tight">ISO 9001:2015 <br />Certified Desk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA - Atmospheric */}
      <section className="py-32 relative overflow-hidden bg-blue">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Deployment Terminal"
            fill
            className="object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-blue/90 backdrop-blur-sm" />
          <div className="absolute inset-0 tech-grid opacity-10" />
        </div>
        
        <div className="container-wide text-center relative z-10 space-y-12">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              Project <br /><span className="text-red">Deployment.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
              Direct access to our strategic procurement desk for high-volume inquiries.
            </p>
          </div>
          
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
              <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all glow-primary shadow-2xl hover:-translate-y-1">
                <Link href="/contact">Initialize Terminal</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white/10 transition-all">
                <Link href="/contact">Request Protocol</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  )
}
