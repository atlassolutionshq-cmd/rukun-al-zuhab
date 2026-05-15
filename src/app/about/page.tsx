"use client"

import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Award, ShieldCheck, CheckCircle2, Phone, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To supply the physical foundations of Saudi Arabia's digital infrastructure with consistency, technical precision, and genuine accountability — project after project, decade after decade.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted single-source network infrastructure partner in the Middle East, known for our catalog depth and technical guidance.",
  },
  {
    icon: Award,
    title: "Values",
    description: "Integrity in every quote. Quality in every SKU. Technical precision in every recommendation. These are the operational standards we've held since 1999.",
  },
]

const whoWeServe = [
  {
    title: "MEP Contractors",
    description: "Sourcing structured cabling and fiber backbone for commercial and residential developments.",
  },
  {
    title: "System Integrators",
    description: "Specifying complete network infrastructure from cable to cabinet for specification consistency.",
  },
  {
    title: "IT Departments",
    description: "Building or expanding data rooms and server environments with our rack and containment systems.",
  },
  {
    title: "Government Projects",
    description: "Leveraging our ISO 9001:2015 certified processes for documentation and traceability.",
  },
  {
    title: "Telecom Operators",
    description: "Deploying fiber access networks with our FTTH drop cables, splitters, and premise cabinets.",
  },
]

const whatWeSupply = [
  {
    title: "Copper Cabling",
    description: "Complete AVAYO portfolio: Cat3 through Cat7A in UTP, FTP, FFTP, and S/FTP configurations.",
  },
  {
    title: "Copper Connectivity",
    description: "Keystones, face plates, modular inserts, patch cords, patch panels, and 110 wiring blocks.",
  },
  {
    title: "Fiber Cabling",
    description: "Simplex, zip cord, indoor distribution, outdoor armored, loose tube, and FTTH drop cables.",
  },
  {
    title: "Fiber Connectivity",
    description: "LC, SC, ST, FC connector types. Adapters, pigtails, patch cords, and termination panels.",
  },
  {
    title: "Cabinets & Enclosures",
    description: "Wall mount (4U-18U) and floor standing (18U-47U) in various width and depth configurations.",
  },
  {
    title: "Rack System",
    description: "S-Series cabinets, SOHO enclosures, open racks, outdoor cabinets, and rack PDUs.",
  },
  {
    title: "Data Center Infrastructure",
    description: "D-Series server racks, cold/hot aisle containment systems, and modular roof panels.",
  },
  {
    title: "Fittings & Accessories",
    description: "Floor boxes, brush grommets, coaxial cables, adapters, panel lifters, and cable managers.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-navy min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative h-[70vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Infrastructure Legacy"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-3 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                <span className="text-[10px] font-black text-cyan uppercase tracking-[0.3em]">Corporate Legacy · Est. 1999</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                25 Years of Infrastructure.<br />
                <span className="text-cyan italic">One Trusted Name.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
                Founded in Riyadh in 1999 with a single purpose: to give Saudi Arabia's sectors direct access to world-class network infrastructure products.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-32 relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="space-y-10">
              <div className="space-y-6">
                <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">The Origin</span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Built on the Belief That Infrastructure Deserves a Specialist.
                </h2>
                <div className="space-y-6 text-white/50 leading-relaxed">
                  <p>
                    When Rukun Al Zuhab was established in 1999, the Kingdom's structured cabling and network infrastructure market was fragmented. We were founded to fix that.
                  </p>
                  <p>
                    Starting with copper cabling and connectivity products, we built relationships with world-leading manufacturers and brought their full product lines to a single, technically competent local source.
                  </p>
                  <p>
                    Today, our 285+ SKU catalog represents the most complete network infrastructure offering available from a single trading partner in the region.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-3xl font-black text-cyan">25+</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Years Active</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                  <div className="text-3xl font-black text-cyan">285+</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Active SKUs</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 grayscale contrast-125">
              <Image
                src="/image.png"
                alt="Infrastructure Specialists"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE SUPPLY ─── */}
      <section className="py-32 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container-wide">
          <FadeIn className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
            <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">Technical Scope</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              The Full Stack of <br /><span className="text-cyan italic">Physical Infrastructure.</span>
            </h2>
            <p className="text-lg text-white/50">
              Our product expertise covers distinct categories, giving customers the ability to source an entire project's bill of materials from one desk.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSupply.map((item) => (
              <StaggerItem
                key={item.title}
                className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:border-cyan/30 transition-all duration-300"
              >
                <div className="h-px w-8 bg-cyan mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── MISSION / VISION / VALUES ─── */}
      <section className="py-32 relative">
        <div className="container-wide">
          <StaggerContainer className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <StaggerItem key={v.title} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl space-y-8 group hover:-translate-y-2 transition-all">
                <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <v.icon className="h-7 w-7 text-cyan" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tight">{v.title}</h3>
                  <p className="text-white/50 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHO WE SERVE ─── */}
      <section className="py-32 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            <FadeIn direction="right" className="space-y-8">
              <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">End Users</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Who Sources Through<br />
                <span className="text-cyan italic">Rukun Al Zuhab.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                From specialized contractors to government procurement offices, we supply the infrastructure that powers the region.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-white/70">
                  <ShieldCheck className="h-5 w-5 text-cyan" />
                  <span className="font-bold">ISO 9001:2015 Verified</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 className="h-5 w-5 text-cyan" />
                  <span className="font-bold">25 Years of Regional Trust</span>
                </div>
              </div>
            </FadeIn>
            <StaggerContainer className="space-y-4">
              {whoWeServe.map((item) => (
                <StaggerItem key={item.title} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32">
        <div className="container-wide text-center space-y-12">
          <FadeIn className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Build the <span className="text-cyan">infrastructure</span> of tomorrow.
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto">
              Our technical procurement desk is staffed and ready for your project requirements.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold h-16 px-12 rounded-lg cyan-glow">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Procurement Desk <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-16 px-12 rounded-lg font-bold">
              <Link href="/products">Browse Full Catalog</Link>
            </Button>
          </FadeIn>

          <FadeIn delay={0.3} className="pt-8">
            <a href="tel:+966550602197" className="inline-flex items-center gap-4 text-white/80 hover:text-cyan transition-colors group">
              <Phone className="h-6 w-6 text-cyan" />
              <span className="font-black text-2xl tracking-tighter">+966 55 060 2197</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
