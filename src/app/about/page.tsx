"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Target, Eye, ArrowRight } from "lucide-react"

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
    description: "To be the most trusted single-source network infrastructure partner in the Middle East, known not only for the depth of our catalog but for the quality of our technical guidance and the reliability of our supply.",
  },
  {
    icon: Award,
    title: "Values",
    description: "Integrity in every quote. Quality in every SKU. Technical precision in every recommendation. These aren't aspirations — they're the operational standard we've held since 1999.",
  },
]

const whoWeServe = [
  {
    title: "MEP Contractors",
    description: "Sourcing structured cabling and fiber backbone for commercial and residential developments rely on our catalog depth and project-scale availability.",
    code: "END-01",
  },
  {
    title: "System Integrators",
    description: "Specifying complete network infrastructure — from cable to cabinet to containment — use us as a single point of supply to simplify procurement and ensure specification consistency.",
    code: "END-02",
  },
  {
    title: "IT Departments & Enterprises",
    description: "Building or expanding data rooms and server environments source our rack and containment systems alongside the copper and fiber connectivity they need.",
    code: "END-03",
  },
  {
    title: "Government & Institutional Projects",
    description: "In healthcare, education, and public infrastructure leverage our ISO 9001:2015 certified processes for the documentation and traceability their procurement standards require.",
    code: "END-04",
  },
  {
    title: "Telecom Operators & ISPs",
    description: "Deploying fiber access networks specify our FTTH drop cables, fiber patch panels, splitters, and FTTH customer premise cabinets.",
    code: "END-05",
  },
]

const whatWeSupply = [
  {
    code: "01",
    title: "Copper Cabling",
    description: "We carry the complete AVAYO copper cable portfolio: Category 3 through Category 7A in UTP, FTP, FFTP, and S/FTP configurations, both indoor PVC-jacketed and outdoor PE/jelly-filled variants. Pair counts from 2 to 400 pairs for voice networks; 4-pair configurations for data.",
  },
  {
    code: "02",
    title: "Copper Connectivity",
    description: "Keystones (Cat5e through Cat6A, unshielded and shielded, tool-less options), face plates, RJ45 modular inserts, patch cords in multiple categories and lengths, patch panels (24-port and 48-port, loaded and unloaded), 110 wiring blocks, distribution boxes and frames, telecom patch cords, and in-line couplers.",
  },
  {
    code: "03",
    title: "Fiber Cabling",
    description: "Simplex, zip cord, indoor distribution (tight-buffered), indoor/outdoor, outdoor armored, loose tube, stranded loose tube, and FTTH drop cables. Available in multimode (OM3, OM4) and single mode (G.652D) glass. Core counts from 4 to 24 fibers.",
  },
  {
    code: "04",
    title: "Fiber Connectivity",
    description: "LC, SC, SC/APC, ST, FC, FC/APC connector types. Simplex and duplex adapters in SM and MM versions. Pigtails, patch cords (LC-LC SM and MM in 1M to 50M lengths), termination panels (6, 12, and 24 port), and PLC splitters for passive optical network deployments.",
  },
  {
    code: "05",
    title: "Cabinets & Enclosures",
    description: "Wall mount cabinets from 4U to 18U (single and double section) and floor standing cabinets from 18U to 47U, in widths of 600mm and 800mm and depths from 350mm to 1000mm. Glass door, perforated door, and solid configurations.",
  },
  {
    code: "06",
    title: "Rack System",
    description: "S-Series supreme cabinets, 10\" SOHO enclosures, open racks, FTTH customer premise cabinets, outdoor weatherproof cabinets, 19\" wall brackets, cable organizers (1U and 2U, horizontal and vertical), fan units, fixed and sliding shelves, blank panels, and rack PDUs.",
  },
  {
    code: "07",
    title: "Data Center Infrastructure",
    description: "D-Series heavy-duty server racks, cold aisle and hot aisle containment systems with modular adjustable roof panels, and end-of-row sliding and hinge doors with keylock or biometric access control.",
  },
  {
    code: "08",
    title: "Fittings & Accessories",
    description: "Floor boxes in plastic and steel (six standard sizes), circular and square brush grommets, RG59 and RG6 coaxial cables, BNC connectors, RJ11 connectors, LC duplex adapters, SC/APC adapters, panel lifters for raised floor applications, 1U and 2U cable managers, KSS spiral wrap (8mm, 12mm, 19mm), number books, FTTH terminal boxes (24 and 48 port), and waterproof outlet boxes.",
  },
]

const story = [
  "When Rukun Al Zuhab was established in 1999, the Kingdom's structured cabling and network infrastructure market was fragmented. Contractors sourced from dozens of suppliers. Quality was inconsistent. Specifications were poorly matched. We were founded to fix that.",
  "Starting with copper cabling and connectivity products, we built relationships with the world's leading manufacturers — AVAYO, Corning, Legrand, KSS — and brought their full product lines to a single, technically competent local source.",
  "Today, our 285+ SKU catalog represents the most complete network infrastructure offering available from a single trading partner in the region. We supply contractors, system integrators, IT departments, government procurement offices, and MEP consultancies across Saudi Arabia and the broader Gulf.",
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Rukun Al Zuhab — 25 Years of Infrastructure"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/70 to-blue/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-blue/90 via-blue/30 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <FadeIn direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
                <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                  CORPORATE LEGACY · EST. 1999
                </span>
              </div>
            </FadeIn>
            <div className="space-y-8">
              <FadeIn delay={0.4}>
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                  25 Years of Infrastructure. <br />
                  <span className="text-red italic font-medium">One Trusted Name.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.6}>
                <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                  Rukun Al Zuhab Trading Co was founded in Riyadh in 1999 with a single purpose: to give 
                  Saudi Arabia&apos;s construction, telecoms, and IT sectors direct access to world-class network 
                  infrastructure products. A quarter-century later, that purpose hasn&apos;t changed — only the scale has.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-40 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <FadeIn className="lg:col-span-6 space-y-16">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-red" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">THE ORIGIN</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-blue tracking-tighter leading-tight">
                  Built on the Belief That Infrastructure Deserves a Specialist.
                </h2>
                <div className="space-y-6 text-lg text-blue/60 leading-relaxed font-medium">
                  {story.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-16 pt-16 border-t border-gray-100">
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-blue tracking-tighter">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red">Years Active</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-blue tracking-tighter">98%</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red">QA Success Rate</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="lg:col-span-6">
              <div className="relative h-[700px] rounded-[3rem] overflow-hidden grayscale brightness-75 contrast-125 border border-gray-100">
                <Image
                  src="/image.png"
                  alt="Rukun Al Zuhab — Network Infrastructure"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue/10 mix-blend-overlay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section className="py-40 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn className="mb-24 space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">TECHNICAL SCOPE</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter leading-tight">
              The Full Stack of <br /><span className="text-red italic">Physical Infrastructure.</span>
            </h2>
            <p className="text-lg text-blue/50 leading-relaxed font-medium">
              Our product expertise covers nine distinct categories, giving customers the ability to source an entire project&apos;s bill of materials from one desk.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeSupply.map((item) => (
              <StaggerItem
                key={item.code}
                className="group bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-red/30 hover:shadow-xl transition-all duration-500 space-y-6 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-10 right-10 text-[8px] font-bold text-blue/10 tracking-[0.3em] group-hover:text-red/20 transition-colors">
                  {item.code}
                </div>
                <div className="h-px w-10 bg-red group-hover:w-full transition-all duration-700" />
                <div className="space-y-3">
                  <h3 className="text-lg font-bold tracking-tight text-blue leading-tight">{item.title}</h3>
                  <p className="text-blue/50 leading-relaxed text-sm font-medium">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-40 bg-blue relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <FadeIn className="mb-24 space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red/80 uppercase">MANDATE</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">Mission. Vision. Values.</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <StaggerItem key={value.title} className="glass-futuristic p-12 rounded-[2.5rem] space-y-10 group hover:-translate-y-2 transition-all duration-500">
                <div className="h-px w-12 bg-red group-hover:w-full transition-all duration-700" />
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-bold tracking-tight text-white">{value.title}</h3>
                    <value.icon className="h-6 w-6 text-red/40 group-hover:text-red transition-colors" />
                  </div>
                  <p className="text-white/50 leading-relaxed text-sm font-medium">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn className="mb-24 space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">END USERS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter">
              Who Sources Through <br /><span className="text-red italic">Rukun Al Zuhab.</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoWeServe.map((item) => (
              <StaggerItem key={item.title} className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-2xl transition-all duration-500 space-y-8 relative overflow-hidden">
                <div className="absolute top-12 right-12 text-[8px] font-bold text-blue/10 tracking-[0.3em] uppercase group-hover:text-red/20 transition-colors">
                  {item.code}
                </div>
                <div className="h-px w-12 bg-red group-hover:w-full transition-all duration-700" />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-blue">{item.title}</h3>
                  <p className="text-blue/50 leading-relaxed text-sm font-medium">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 border-t border-gray-100">
        <FadeIn className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-12">
          <h3 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter">
            Build the <span className="text-red italic">infrastructure</span> of tomorrow.
          </h3>
          <p className="text-lg text-blue/40 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re in pre-tender specification, active procurement, or managing an emergency supply gap, our technical desk is staffed and ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
            <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all glow-primary shadow-2xl">
              <Link href="/contact">Contact Our Procurement Desk</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-blue/20 text-blue h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-blue hover:text-white transition-all">
              <Link href="/products">Browse the Full Catalog</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
