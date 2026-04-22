import { Truck, FileCheck, RefreshCcw, Shield, Clock, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Truck,
    title: "Procurement & Sourcing",
    description: "Leveraging a global network of manufacturers to source high-performance industrial components at optimized price points.",
  },
  {
    icon: FileCheck,
    title: "Quality Assurance",
    description: "Every shipment undergoes rigorous multi-point inspections to ensure compliance with Saudi regulatory requirements.",
  },
  {
    icon: Truck,
    title: "Regional Logistics",
    description: "Strategic warehousing and a dedicated distribution fleet ensure rapid delivery across all regions of Saudi Arabia.",
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "Engineering-led consultation from product selection through to installation and operational maintenance.",
  },
  {
    icon: RefreshCcw,
    title: "After-Sales Lifecycle",
    description: "Comprehensive support framework including warranty management, rapid replacements, and technical care.",
  },
  {
    icon: Clock,
    title: "Critical Supply",
    description: "Expedited procurement protocols for urgent industrial requirements with 24/7 emergency response availability.",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen tech-grid">
      {/* Hero - Ultra Minimal */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Operational Excellence</p>
            <h1 className="text-6xl md:text-8xl font-bold text-blue tracking-tighter leading-none">
              Strategic <br />
              <span className="text-blue/20 italic">Frameworks</span>
            </h1>
            <p className="text-xl text-blue/60 max-w-2xl leading-relaxed">
              We engineer the supply chains that power Saudi Arabia&apos;s most critical 
              infrastructure and manufacturing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Typographic Focus */}
      <section className="py-32 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
            {services.map((service) => (
              <div key={service.title} className="group space-y-8">
                <div className="h-px w-full bg-gray-100 group-hover:bg-red shadow-[0_0_8px_rgba(var(--brand-red),0.2)] transition-all duration-500" />
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold tracking-tight text-blue">{service.title}</h3>
                    <service.icon className="h-5 w-5 text-blue/20 group-hover:text-red transition-colors" />
                  </div>
                  <p className="text-blue/60 leading-relaxed text-sm max-w-sm">
                    {service.description}
                  </p>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-blue hover:text-red transition-colors inline-flex items-center gap-2">
                    Detailed Scope <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified CTA */}
      <section className="py-40 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter">
            Need a <span className="text-red italic">bespoke</span> model?
          </h2>
          <p className="text-lg text-blue/40 max-w-xl mx-auto leading-relaxed">
            Our consulting team works directly with your project leads to develop 
            tailored procurement and logistics frameworks.
          </p>
          <a
            href="mailto:info@rukun-alzuhab.com"
            className="inline-flex h-16 items-center justify-center rounded-full bg-red px-12 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-red/90 glow-primary"
          >
            Consult Our Team
          </a>
        </div>
      </section>
    </div>
  )
}
