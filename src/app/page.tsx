"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cable, Network, Wifi, Server, HardDrive, Database, Wrench, TestTube2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const categories = [
  {
    code: "01",
    title: "Copper System",
    description: "Cat3 through Cat7A UTP, FTP, FFTP, and S/FTP cables. Keystones, face plates, patch panels, patch cords, distribution frames, and telecom wiring blocks. Complete end-to-end copper cabling for voice and data networks.",
    icon: Cable,
  },
  {
    code: "02",
    title: "Fiber Optic System",
    description: "Simplex, distribution, indoor/outdoor, armored, loose tube, FTTH drop cables, and stranded configurations. Paired with adapters, pigtails, connectors, patch cords, termination panels, and PLC splitters.",
    icon: Network,
  },
  {
    code: "03",
    title: "Copper Networking",
    description: "Ready-to-deploy patch cords (Cat6, Cat6A), keystone jacks, RJ45 connectors, loaded and unloaded patch panels, cable rolls, and fiber patch cords (LC-LC, SM, MM) in lengths from 1M to 50M.",
    icon: Wifi,
  },
  {
    code: "04",
    title: "Cabinets & Enclosures",
    description: "Wall mount (4U–18U) and floor standing (18U–47U) network cabinets across multiple depth and width configurations. Double-section, glass door, perforated door, and open-frame options available.",
    icon: Server,
  },
  {
    code: "05",
    title: "Rack System",
    description: "S-Series floor standing and wall mount cabinets, 10\" SOHO enclosures, open racks, FTTH cabinets, outdoor cabinets, cable organizers, fan units, fixed and sliding shelves, blank panels, and PDUs.",
    icon: HardDrive,
  },
  {
    code: "06",
    title: "Data Center System",
    description: "D-Series heavy-duty server racks, cold aisle and hot aisle containment systems, modular roof panels (adjustable 914–1200mm), sliding and hinge containment doors with key or biometric locking.",
    icon: Database,
  },
  {
    code: "07",
    title: "Fittings & Accessories",
    description: "Floor boxes (plastic and steel, multiple sizes), brush grommets (circular and square), RG59/RG6 coaxial cables, BNC and RJ11 connectors, LC adapters, SC adapters, panel lifters, cable managers, KSS spiral wraps, and number books.",
    icon: Wrench,
  },
  {
    code: "08",
    title: "Tools & Testing",
    description: "Crimping tools, dual modular crimping tools, cable peelers, voltage testers, digital multimeters, wire trackers (NF-801, TM-09), UTP cable testers, pliers, cutters, cable cutters, screwdriver sets, wrench sets, and blade cutters.",
    icon: TestTube2,
  },
]

const stats = [
  { value: "25+", label: "Years Active" },
  { value: "285+", label: "Active SKUs" },
  { value: "9", label: "Product Categories" },
  { value: "98%", label: "QA Success Rate" },
]

const advantages = [
  {
    code: "01",
    title: "Project-Scale Inventory",
    description: "With 285+ active SKUs across 9 product categories, we can supply the full bill of materials for structured cabling, fiber backbone, and data center buildouts without multiple vendors.",
  },
  {
    code: "02",
    title: "Technical Depth",
    description: "Our team understands the difference between Cat6A UTP and S/FTP, between cold aisle and hot aisle containment, between simplex and loose tube fiber. We source the right spec, not just the nearest match.",
  },
  {
    code: "03",
    title: "Speed of Supply",
    description: "Based in Riyadh with regional distribution reach, we serve contractors, system integrators, and enterprise IT teams with the turn-around times that project schedules demand.",
  },
  {
    code: "04",
    title: "25 Years of Regional Trust",
    description: "Since 1999, we have been the behind-the-scenes infrastructure partner for the Kingdom's commercial, industrial, and institutional projects. Our 98% QA success rate reflects the consistency of our supply.",
  },
  {
    code: "05",
    title: "ISO 9001:2015 Verified",
    description: "Our quality management processes are certified, ensuring every order meets the documentation, traceability, and specification standards required for government and enterprise procurement.",
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Network Infrastructure — Rukun Al Zuhab"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/95 via-blue/70 to-blue/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-blue/90 via-blue/30 to-transparent z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <h1 className="sr-only">Rukun Al Zuhab Trading Co — Network Infrastructure Supplier Saudi Arabia</h1>
            <FadeIn direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
                <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                  ESTABLISHED 1999 · RIYADH, SAUDI ARABIA
                </span>
              </div>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.4}>
                <div className="text-5xl md:text-7xl font-bold text-white heading-tight">
                  The Infrastructure Behind<br />
                  <span className="text-red italic font-medium">Saudi Arabia&apos;s</span><br />
                  Connected Future.
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                  Rukun Al Zuhab Trading Co supplies the copper cables, fiber systems, rack enclosures, and 
                  data center infrastructure that power the Kingdom&apos;s most demanding networks. From Cat3 to Cat8, 
                  single-mode fiber to cold-aisle containment — we carry it all.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.8}>
              <div className="flex flex-wrap gap-6 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-red hover:bg-red/90 text-white font-bold px-10 h-14 rounded-full transition-all text-[11px] uppercase tracking-widest shadow-2xl hover:-translate-y-0.5 glow-primary"
                >
                  <Link href="/products">Browse Full Catalog</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-white border border-white/20 hover:bg-white/10 px-10 h-14 rounded-full transition-all text-[11px] uppercase tracking-widest"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={1} direction="left" className="absolute bottom-16 right-16 z-20 hidden lg:grid grid-cols-2 gap-x-20 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-3xl font-bold text-white tracking-tighter">{stat.value}</div>
              <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white py-24 border-b border-gray-50 tech-grid">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="space-y-2">
                <div className="text-5xl font-bold text-blue tracking-tighter leading-none">{stat.value}</div>
                <div className="text-[10px] font-bold text-red uppercase tracking-[0.4em]">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SYSTEMS ARCHITECTURE ─── */}
      <section className="py-32 bg-white relative">
        <div className="container-wide">
          <FadeIn className="mb-24 space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">
                PRODUCT INTELLIGENCE
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-blue heading-tight">
              Everything the Network<br />
              <span className="text-blue/20 italic">Needs. One Source.</span>
            </h2>
            <p className="text-lg text-blue/50 leading-relaxed font-medium">
              From the cable in the wall to the cabinet housing your servers, we stock the complete chain of 
              structured cabling and network infrastructure products — ready for project-scale procurement.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((cat) => (
              <StaggerItem
                key={cat.code}
                className="group bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-red/30 hover:shadow-2xl transition-all duration-500 space-y-8 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-10 right-10 text-[8px] font-bold text-blue/10 tracking-[0.3em] uppercase group-hover:text-red/20 transition-colors">
                  {cat.code}
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="h-px w-10 bg-red group-hover:w-full transition-all duration-700" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-blue leading-tight">{cat.title}</h3>
                    <p className="text-blue/50 leading-relaxed text-sm font-medium">{cat.description}</p>
                  </div>
                </div>
                <cat.icon className="h-7 w-7 text-blue/10 group-hover:text-red transition-all duration-700 mt-auto self-end" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-16 flex justify-center">
            <Link
              href="/products"
              className="group text-[11px] font-bold text-blue uppercase tracking-widest inline-flex items-center gap-6 h-14 px-10 bg-gray-50 rounded-full hover:bg-red hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              Browse Full Catalog <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHY RUKUN AL ZUHAB ─── */}
      <section className="py-32 bg-gray-50/50 border-y border-gray-100">
        <div className="container-wide">
          <FadeIn className="mb-24 space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">
                THE OPERATIONAL ADVANTAGE
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-blue heading-tight">
              Why Projects<br />
              <span className="text-red italic">Run Through Us.</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <StaggerItem
                key={item.code}
                className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-xl transition-all duration-500 space-y-6 relative"
              >
                <div className="absolute top-12 right-12 text-[8px] font-bold text-blue/10 tracking-[0.3em] uppercase group-hover:text-red/20 transition-colors">
                  {item.code}
                </div>
                <div className="h-px w-12 bg-red group-hover:w-full transition-all duration-700" />
                <h3 className="text-2xl font-bold tracking-tight text-blue">{item.title}</h3>
                <p className="text-blue/50 leading-relaxed text-sm font-medium">{item.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── LEGACY ─── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-24 lg:gap-32 items-center">
            <FadeIn direction="right" className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-red" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">
                    THE LEGACY PROTOCOL
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-blue heading-tight">
                  25 Years.<br />
                  <span className="text-red italic">One Standard.</span>
                </h2>
                <p className="text-lg md:text-xl text-blue/40 leading-relaxed font-medium max-w-md">
                  Since our founding in 1999, Rukun Al Zuhab has supplied the physical infrastructure beneath 
                  Saudi Arabia&apos;s most important networks. We&apos;ve stocked the copper that carries the voice, 
                  the fiber that carries the data, and the cabinets that house the equipment — across hospitals, 
                  data centers, commercial towers, government facilities, and industrial plants.
                </p>
                <p className="text-base text-blue/30 leading-relaxed font-medium max-w-md">
                  The Kingdom is building faster than ever. We&apos;re here to make sure it&apos;s built right.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full h-14 px-10 bg-blue hover:bg-blue/90 text-white font-bold transition-all uppercase tracking-widest text-[11px] glow-secondary">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/50" />
              <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden grayscale contrast-125 border border-gray-100">
                <Image
                  src="/image.png"
                  alt="Rukun Al Zuhab — 25 years of network infrastructure"
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
              </div>
              <FadeIn delay={0.5} className="absolute top-12 right-12 p-10 glass-futuristic rounded-[2.5rem] border-white/20 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                  <p className="text-[10px] font-bold text-red uppercase tracking-widest">Protocol Verified</p>
                </div>
                <p className="text-lg font-bold text-blue leading-tight tracking-tight">ISO 9001:2015 <br />Certified Desk</p>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 relative overflow-hidden bg-blue">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Systems procurement"
            fill
            className="object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-blue/90 backdrop-blur-sm" />
          <div className="absolute inset-0 tech-grid opacity-10" />
        </div>

        <div className="container-wide text-center relative z-10 space-y-12">
          <FadeIn className="max-w-4xl mx-auto space-y-10">
            <p className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">SYSTEMS PROCUREMENT</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
              Ready to <br /><span className="text-red">Source?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/30 max-w-2xl mx-auto leading-relaxed font-medium">
              Whether you&apos;re quoting a structured cabling project, specifying a data center fit-out, 
              or stocking a warehouse, our technical procurement desk is ready.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
            <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all glow-primary shadow-2xl hover:-translate-y-1">
              <Link href="/contact">Initialize Inquiry</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-white/10 transition-all">
              <a href="/Showroom Available Items List.xlsx" download>Download Product Catalog</a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
