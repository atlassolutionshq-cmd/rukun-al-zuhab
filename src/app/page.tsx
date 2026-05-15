"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cable, Network, Wifi, Server, HardDrive, Database, Wrench, TestTube2, ShieldCheck, CheckCircle2, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const categories = [
  {
    code: "01",
    title: "Copper System",
    description: "Cat3 through Cat7A UTP, FTP, FFTP, and S/FTP cables. Keystones, face plates, patch panels, patch cords, distribution frames, and telecom wiring blocks.",
    icon: Cable,
  },
  {
    code: "02",
    title: "Fiber Optic System",
    description: "Simplex, distribution, indoor/outdoor, armored, loose tube, FTTH drop cables, and stranded configurations. Paired with adapters, pigtails, and connectors.",
    icon: Network,
  },
  {
    code: "03",
    title: "Copper Networking",
    description: "Ready-to-deploy patch cords (Cat6, Cat6A), keystone jacks, RJ45 connectors, loaded and unloaded patch panels, and fiber patch cords in various lengths.",
    icon: Wifi,
  },
  {
    code: "04",
    title: "Cabinets & Enclosures",
    description: "Wall mount (4U–18U) and floor standing (18U–47U) network cabinets across multiple depth and width configurations. Double-section and open-frame options.",
    icon: Server,
  },
  {
    code: "05",
    title: "Rack System",
    description: "S-Series floor standing and wall mount cabinets, 10\" SOHO enclosures, open racks, FTTH cabinets, outdoor cabinets, cable organizers, and PDUs.",
    icon: HardDrive,
  },
  {
    code: "06",
    title: "Data Center System",
    description: "D-Series heavy-duty server racks, cold aisle and hot aisle containment systems, modular roof panels, and hinge containment doors with biometric locking.",
    icon: Database,
  },
  {
    code: "07",
    title: "Fittings & Accessories",
    description: "Floor boxes, brush grommets, coaxial cables, BNC/RJ11 connectors, adapters, panel lifters, cable managers, spiral wraps, and number books.",
    icon: Wrench,
  },
  {
    code: "08",
    title: "Tools & Testing",
    description: "Crimping tools, cable peelers, voltage testers, digital multimeters, wire trackers, UTP cable testers, pliers, cutters, and professional screwdriver sets.",
    icon: TestTube2,
  },
]

const advantages = [
  {
    title: "Project-Scale Inventory",
    description: "With 285+ active SKUs across 9 product categories, we can supply the full bill of materials for structured cabling, fiber backbone, and data center buildouts.",
  },
  {
    title: "Technical Depth",
    description: "Our team understands the difference between Cat6A UTP and S/FTP, between cold aisle and hot aisle containment. We source the right spec, not just the nearest match.",
  },
  {
    title: "Speed of Supply",
    description: "Based in Riyadh with regional distribution reach, we serve contractors, system integrators, and enterprise IT teams with the turn-around times that projects demand.",
  },
  {
    title: "25 Years of Regional Trust",
    description: "Since 1999, we have been the infrastructure partner for the Kingdom's commercial, industrial, and institutional projects. Our 98% QA success rate reflects our consistency.",
  },
  {
    title: "ISO 9001:2015 Verified",
    description: "Our quality management processes are certified, ensuring every order meets the documentation, traceability, and specification standards required for procurement.",
  },
]

export default function HomePage() {
  return (
    <div className="bg-navy overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Data Center Infrastructure"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10" />
          {/* Animated lines or tech grid could go here */}
          <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center bg-no-repeat opacity-5 scale-150" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-5xl space-y-12">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-[11px] font-bold text-cyan uppercase tracking-widest">Networking Solutions Provider</span>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.2}>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
                  Leading <span className="text-cyan">IT</span><br />
                  <span className="text-cyan">Infrastructure</span><br />
                  Provider in the Middle East
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
                  Rukun AL Zuhab Trading Co. operates the largest copper system, fibre system, and rack system manufacturing unit in Saudi Arabia.
                </p>
                <p className="text-lg text-white/50 max-w-2xl mt-4">
                  Delivering world-class networking solutions with cutting-edge technology, certified quality, and unmatched expertise.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan hover:bg-cyan/90 text-navy font-bold px-10 h-14 rounded-lg transition-all group cyan-glow"
                >
                  <Link href="/products" className="flex items-center gap-2">
                    Explore Solutions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-10 h-14 rounded-lg font-bold"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Badges from Screenshot */}
            <FadeIn delay={0.5} className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: ShieldCheck, label: "ISO Certified" },
                { icon: Network, label: "Middle East Leader" },
                { icon: Database, label: "End-to-End Solutions" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                  <badge.icon className="h-5 w-5 text-cyan" />
                  <span className="text-sm font-bold text-white/80">{badge.label}</span>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SYSTEMS ARCHITECTURE ─── */}
      <section className="py-32 relative">
        <div className="container-wide">
          <FadeIn className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
            <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">Product Intelligence</span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Everything the Network Needs.<br />
              <span className="text-white/20">One Source.</span>
            </h2>
            <p className="text-lg text-white/50">
              From the cable in the wall to the cabinet housing your servers, we stock the complete chain of structured cabling and network infrastructure products.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <StaggerItem
                key={cat.code}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan/30 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute top-6 right-7 text-xs font-black text-white/5 select-none">
                  {cat.code}
                </span>
                <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                  <cat.icon className="h-6 w-6 text-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{cat.description}</p>
                <Link href={`/products/${cat.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-cyan text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHY RUKUN AL ZUHAB ─── */}
      <section id="why-us" className="py-32 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right" className="space-y-8">
              <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">The Operational Advantage</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Why Projects Run<br />
                <span className="text-cyan italic">Through Us.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Since 1999, we have been the behind-the-scenes infrastructure partner for the Kingdom's commercial, industrial, and institutional projects.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white">25+</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Years of Trust</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-black text-white">285+</div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Active SKUs</div>
                </div>
              </div>
              <Button asChild className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold rounded-lg px-8 h-12">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </FadeIn>

            <StaggerContainer className="space-y-4">
              {advantages.map((item, idx) => (
                <StaggerItem key={item.title} className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-cyan/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-3">
                    <span className="text-cyan font-black text-xs">0{idx + 1}</span>
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ─── LEGACY ─── */}
      <section className="py-32 relative">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <FadeIn className="space-y-6">
              <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">The Legacy Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                25 Years. One Standard.
              </h2>
              <div className="w-20 h-1 bg-cyan mx-auto rounded-full" />
              <p className="text-xl text-white/60 leading-relaxed">
                Since our founding in 1999, Rukun Al Zuhab has supplied the physical infrastructure beneath Saudi Arabia's most important networks. We've stocked the copper that carries the voice, the fiber that carries the data, and the cabinets that house the equipment.
              </p>
              <p className="text-white/40 italic">
                The Kingdom is building faster than ever. We're here to make sure it's built right.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Button asChild size="lg" className="bg-cyan text-navy font-bold rounded-lg px-10 h-14 cyan-glow">
                <Link href="/about">Read Our Full Story</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-gradient-to-br from-cyan to-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 backdrop-blur-3xl z-0" />
        <div className="container-wide relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-12 md:p-20 text-center space-y-10 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full" />
            
            <FadeIn className="space-y-6">
              <span className="text-[11px] font-black text-cyan uppercase tracking-[0.4em]">Systems Procurement</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to Source?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Whether you're quoting a structured cabling project, specifying a data center fit-out, or stocking a warehouse, our technical procurement desk is ready.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold h-14 px-10 rounded-lg cyan-glow">
                <Link href="/contact">Initialize Inquiry</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-10 rounded-lg font-bold">
                <a href="/Showroom Available Items List.xlsx" download>Download Catalog</a>
              </Button>
            </FadeIn>
            
            <FadeIn delay={0.3} className="pt-8">
              <a href="tel:+966550602197" className="inline-flex items-center gap-3 text-white/80 hover:text-cyan transition-colors group">
                <Phone className="h-5 w-5 text-cyan" />
                <span className="font-bold text-lg">+966 55 060 2197</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
