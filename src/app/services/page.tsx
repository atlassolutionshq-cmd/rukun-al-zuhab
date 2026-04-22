import { Truck, FileCheck, RefreshCcw, Shield, Clock, ArrowUpRight, ArrowRight, Cog } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Truck,
    title: "Procurement & Sourcing",
    description: "Leveraging a global network of manufacturers to source high-performance industrial components at optimized price points.",
    code: "SVC-PROC-01"
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description: "Every shipment undergoes rigorous multi-point inspections to ensure compliance with Saudi regulatory requirements.",
    code: "SVC-QUAL-02"
  },
  {
    icon: Truck,
    title: "Regional Logistics",
    description: "Strategic warehousing and a dedicated distribution fleet ensure rapid delivery across all regions of Saudi Arabia.",
    code: "SVC-LOGI-03"
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "Engineering-led consultation from product selection through to installation and operational maintenance.",
    code: "SVC-TECH-04"
  },
  {
    icon: RefreshCcw,
    title: "After-Sales Lifecycle",
    description: "Comprehensive support framework including warranty management, rapid replacements, and technical care.",
    code: "SVC-AFTR-05"
  },
  {
    icon: Clock,
    title: "Critical Supply",
    description: "Expedited procurement protocols for urgent industrial requirements with 24/7 emergency response availability.",
    code: "SVC-CRIT-06"
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Atmospheric & Technical */}
      <section className="relative h-[65vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Operational Excellence"
            fill
            className="object-cover grayscale brightness-[0.25] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/40 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
              <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                OPERATIONAL EXCELLENCE • PROTOCOLS
              </span>
            </div>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Industrial <br />
                <span className="text-red italic font-medium">Frameworks</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                We engineer the supply chains that power Saudi Arabia&apos;s most critical 
                infrastructure and manufacturing projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - High-Tech Protocol Cards */}
      <section className="py-40 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-red/30 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[450px] relative overflow-hidden"
              >
                {/* Background ID */}
                <div className="absolute top-12 right-12 text-[8px] font-bold text-blue/10 tracking-[0.3em] uppercase group-hover:text-red/20 transition-colors">
                  {service.code}
                </div>
                
                <div className="space-y-10 relative z-10">
                  <div className="h-px w-12 bg-red group-hover:w-full transition-all duration-700" />
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold tracking-tight text-blue">{service.title}</h3>
                      <service.icon className="h-5 w-5 text-blue/20 group-hover:text-red transition-colors" />
                    </div>
                    <p className="text-blue/50 leading-relaxed text-sm font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-blue/30 uppercase tracking-widest">Active Protocol</span>
                  <button className="h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-red group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Solutions - Immersive CTA */}
      <section className="py-40 relative overflow-hidden bg-blue">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Bespoke Industrial Solutions"
            fill
            className="object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-blue/80 backdrop-blur-sm" />
          <div className="absolute inset-0 tech-grid opacity-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Need a <span className="text-red italic">bespoke</span> model?
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
              Our consulting team works directly with your project leads to develop 
              tailored procurement and logistics frameworks.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
            <Button asChild size="lg" className="bg-red hover:bg-red/90 text-white font-bold h-16 px-12 rounded-full transition-all uppercase tracking-[0.2em] text-[11px] shadow-2xl glow-primary">
              <Link href="/contact">Initialize Consultation</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10 font-bold h-16 px-12 rounded-full transition-all uppercase tracking-[0.2em] text-[11px]">
              <Link href="/contact">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
