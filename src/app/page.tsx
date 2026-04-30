"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cable, Network, Wifi, Server, HardDrive, Database, Wrench, TestTube2, ShieldCheck, CheckCircle2 } from "lucide-react"

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
    featured: true,
  },
  {
    code: "02",
    title: "Technical Depth",
    description: "Our team understands the difference between Cat6A UTP and S/FTP, between cold aisle and hot aisle containment, between simplex and loose tube fiber. We source the right spec, not just the nearest match.",
    featured: false,
  },
  {
    code: "03",
    title: "Speed of Supply",
    description: "Based in Riyadh with regional distribution reach, we serve contractors, system integrators, and enterprise IT teams with the turn-around times that project schedules demand.",
    featured: false,
  },
  {
    code: "04",
    title: "25 Years of Regional Trust",
    description: "Since 1999, we have been the behind-the-scenes infrastructure partner for the Kingdom's commercial, industrial, and institutional projects. Our 98% QA success rate reflects the consistency of our supply.",
    featured: false,
  },
  {
    code: "05",
    title: "ISO 9001:2015 Verified",
    description: "Our quality management processes are certified, ensuring every order meets the documentation, traceability, and specification standards required for government and enterprise procurement.",
    featured: false,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* ─── HERO ─── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Network Infrastructure — Rukun Al Zuhab"
            fill
            className="object-cover grayscale brightness-[0.18] contrast-[1.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/97 via-blue/75 to-blue/20 z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-10">
            <h1 className="sr-only">Rukun Al Zuhab Trading Co — Network Infrastructure Supplier Saudi Arabia</h1>

            <FadeIn direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-8 bg-red/60" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-red/90 uppercase">
                  ESTABLISHED 1999 · RIYADH, SAUDI ARABIA
                </span>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.35}>
                <h2 className="text-5xl md:text-7xl font-bold text-white heading-tight">
                  The Infrastructure Behind<br />
                  <span className="text-red italic font-semibold">Saudi Arabia&apos;s</span><br />
                  Connected Future.
                </h2>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-normal">
                  Rukun Al Zuhab Trading Co supplies the copper cables, fiber systems, rack enclosures, and
                  data center infrastructure that power the Kingdom&apos;s most demanding networks.
                  From Cat3 to Cat8, single-mode fiber to cold-aisle containment — we carry it all.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.65}>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-red hover:bg-red/90 text-white font-bold px-10 h-14 rounded-xl transition-all text-[11px] uppercase tracking-widest shadow-xl hover:-translate-y-0.5"
                >
                  <Link href="/products">Browse Full Catalog</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="text-white border border-white/30 hover:bg-white/10 hover:border-white/50 px-10 h-14 rounded-xl transition-all text-[11px] uppercase tracking-widest"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </FadeIn>

            {/* ISO Trust Badge */}
            <FadeIn delay={0.9}>
              <div className="inline-flex items-center gap-3 bg-white/8 backdrop-blur-md border border-white/15 rounded-full px-5 py-2.5">
                <ShieldCheck className="h-4 w-4 text-red shrink-0" />
                <span className="text-[11px] font-bold text-white/80 tracking-wider uppercase">ISO 9001:2015 Certified Quality Management</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats — right side overlay */}
        <FadeIn delay={1} direction="left" className="absolute bottom-12 right-16 z-20 hidden xl:grid grid-cols-2 gap-x-16 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 text-right">
              <div className="text-3xl font-bold text-white tracking-tighter tabular-nums">{stat.value}</div>
              <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em]">{stat.label}</div>
            </div>
          ))}
        </FadeIn>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-blue border-b border-blue/80 py-10">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="flex flex-col items-center gap-1.5 py-4 px-8">
                <div className="text-4xl font-bold text-white tracking-tighter tabular-nums">{stat.value}</div>
                <div className="text-[9px] font-bold text-red uppercase tracking-[0.4em]">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── SYSTEMS ARCHITECTURE ─── */}
      <section className="py-32 bg-white">
        <div className="container-wide">
          <FadeIn className="mb-20 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">PRODUCT INTELLIGENCE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-blue heading-tight">
              Everything the Network Needs.<br />
              <span className="text-blue/25">One Source.</span>
            </h2>
            <p className="text-lg text-blue/55 leading-relaxed">
              From the cable in the wall to the cabinet housing your servers, we stock the complete chain of
              structured cabling and network infrastructure products — ready for project-scale procurement.
            </p>
          </FadeIn>

          {/* 2-col on md, 4-col on lg for better readability */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <StaggerItem
                key={cat.code}
                className="group bg-white border border-gray-100 hover:border-red/25 hover:shadow-xl rounded-2xl p-8 transition-all duration-350 flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Code number watermark */}
                <span className="absolute top-6 right-7 text-[11px] font-black text-blue/8 tracking-wider group-hover:text-red/12 transition-colors select-none">
                  {cat.code}
                </span>
                <div className="h-px w-8 bg-red/50 group-hover:w-14 transition-all duration-500" />
                <cat.icon className="h-6 w-6 text-blue/20 group-hover:text-red transition-colors duration-400 shrink-0" />
                <div className="space-y-2 flex-1">
                  <h3 className="text-[15px] font-bold text-blue leading-snug">{cat.title}</h3>
                  <p className="text-blue/50 text-sm leading-relaxed">{cat.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="mt-12 flex justify-start">
            <Link
              href="/products"
              className="group text-[11px] font-bold text-blue uppercase tracking-widest inline-flex items-center gap-4 h-12 px-8 bg-gray-50 hover:bg-red hover:text-white rounded-xl transition-all duration-300 border border-gray-100 hover:border-red"
            >
              Browse Full Catalog
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHY RUKUN AL ZUHAB ─── */}
      <section className="py-32 bg-gray-50/60 border-y border-gray-100">
        <div className="container-wide">
          <FadeIn className="mb-20 space-y-6">
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">THE OPERATIONAL ADVANTAGE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-blue heading-tight">
              Why Projects Run <span className="text-red italic">Through Us.</span>
            </h2>
          </FadeIn>

          {/* Featured first item full-width, then 2x2 grid */}
          <div className="space-y-5">
            {/* Featured card */}
            <FadeIn>
              <div className="group bg-white border border-gray-100 hover:border-red/25 hover:shadow-xl rounded-2xl p-10 transition-all duration-350 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
                <span className="absolute top-8 right-10 text-[40px] font-black text-blue/[0.04] select-none leading-none">01</span>
                <div className="space-y-4">
                  <div className="h-px w-10 bg-red group-hover:w-full transition-all duration-700" />
                  <h3 className="text-2xl font-bold text-blue tracking-tight">{advantages[0].title}</h3>
                  <p className="text-blue/55 leading-relaxed">{advantages[0].description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["285+ SKUs", "9 Categories", "Single Source", "Full BOM"].map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-[11px] font-bold text-blue/60 uppercase tracking-wider border border-gray-100">
                      <CheckCircle2 className="h-3 w-3 text-red shrink-0" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* 2×2 grid for remaining 4 */}
            <StaggerContainer className="grid md:grid-cols-2 gap-5">
              {advantages.slice(1).map((item) => (
                <StaggerItem
                  key={item.code}
                  className="group bg-white border border-gray-100 hover:border-red/25 hover:shadow-xl rounded-2xl p-10 transition-all duration-350 space-y-4 relative overflow-hidden"
                >
                  <span className="absolute top-8 right-10 text-[28px] font-black text-blue/[0.04] select-none leading-none">{item.code}</span>
                  <div className="h-px w-10 bg-red/50 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-xl font-bold text-blue tracking-tight">{item.title}</h3>
                  <p className="text-blue/55 text-sm leading-relaxed">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── LEGACY ─── */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <FadeIn direction="right" className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-red" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">THE LEGACY PROTOCOL</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-blue heading-tight">
                  25 Years.<br />
                  <span className="text-red italic">One Standard.</span>
                </h2>
                {/* Credential sidebar */}
                <div className="flex gap-5">
                  <div className="w-1 rounded-full bg-red shrink-0 self-stretch" />
                  <p className="text-lg text-blue/55 leading-relaxed">
                    Since our founding in 1999, Rukun Al Zuhab has supplied the physical infrastructure beneath
                    Saudi Arabia&apos;s most important networks. We&apos;ve stocked the copper that carries the voice,
                    the fiber that carries the data, and the cabinets that house the equipment — across hospitals,
                    data centers, commercial towers, government facilities, and industrial plants.
                  </p>
                </div>
                <p className="text-base text-blue/35 leading-relaxed">
                  The Kingdom is building faster than ever. We&apos;re here to make sure it&apos;s built right.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2.5 bg-blue/5 border border-blue/10 rounded-xl px-5 py-3">
                  <ShieldCheck className="h-4 w-4 text-red shrink-0" />
                  <span className="text-[11px] font-bold text-blue/70 uppercase tracking-wider">ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2.5 bg-blue/5 border border-blue/10 rounded-xl px-5 py-3">
                  <CheckCircle2 className="h-4 w-4 text-red shrink-0" />
                  <span className="text-[11px] font-bold text-blue/70 uppercase tracking-wider">98% QA Success</span>
                </div>
                <div className="inline-flex items-center gap-2.5 bg-blue/5 border border-blue/10 rounded-xl px-5 py-3">
                  <CheckCircle2 className="h-4 w-4 text-red shrink-0" />
                  <span className="text-[11px] font-bold text-blue/70 uppercase tracking-wider">Est. 1999</span>
                </div>
              </div>

              <Button asChild size="lg" className="rounded-xl h-14 px-10 bg-blue hover:bg-blue/90 text-white font-bold transition-all uppercase tracking-widest text-[11px]">
                <Link href="/about">Read Our Story</Link>
              </Button>
            </FadeIn>

            <FadeIn direction="left" className="lg:col-span-7 relative h-[550px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-gray-100 grayscale contrast-125">
                <Image
                  src="/image.png"
                  alt="Rukun Al Zuhab — 25 years of network infrastructure"
                  fill
                  className="object-cover opacity-55 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue/30 to-transparent" />
              </div>
              <FadeIn delay={0.4} className="absolute top-8 right-8 p-7 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                  <p className="text-[9px] font-bold text-red uppercase tracking-widest">Certified Active</p>
                </div>
                <p className="text-base font-bold text-blue leading-tight tracking-tight">ISO 9001:2015<br />Quality Management</p>
              </FadeIn>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 relative overflow-hidden bg-blue border-t border-blue/50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Systems procurement"
            fill
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-blue/92" />
        </div>

        <div className="container-wide text-center relative z-10 space-y-10">
          <FadeIn className="max-w-3xl mx-auto space-y-8">
            <p className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">SYSTEMS PROCUREMENT</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white heading-tight">
              Ready to <span className="text-red italic">Source?</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re quoting a structured cabling project, specifying a data center fit-out,
              or stocking a warehouse, our technical procurement desk is ready.
            </p>
          </FadeIn>

          <FadeIn delay={0.25} className="flex flex-col sm:flex-row justify-center gap-5 pt-2">
            <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all shadow-xl hover:-translate-y-0.5">
              <Link href="/contact">Initialize Inquiry</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-white/25 text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 hover:border-white/40 transition-all">
              <a href="/Showroom Available Items List.xlsx" download>Download Product Catalog</a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
