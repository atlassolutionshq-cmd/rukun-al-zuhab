"use client"

import { Laptop, Settings, Factory, ShieldCheck, Headphones, Truck, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations"

const services = [
  {
    icon: Laptop,
    title: "Network Design & Consulting",
    description: "Expert consultation and custom network architecture design tailored to your business requirements and growth plans.",
    code: "01"
  },
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description: "Professional installation of copper, fibre, and rack systems by certified engineers following international standards.",
    code: "02"
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    description: "Bespoke manufacturing of cables, panels, and rack systems to meet specific project specifications and requirements.",
    code: "03"
  },
  {
    icon: ShieldCheck,
    title: "Testing & Certification",
    description: "Comprehensive testing and certification of installed infrastructure using industry-standard tools and methodologies.",
    code: "04"
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    description: "24/7 technical support and preventive maintenance programs to ensure maximum uptime and network reliability.",
    code: "05"
  },
  {
    icon: Truck,
    title: "Supply & Logistics",
    description: "Efficient supply chain management and logistics for timely delivery of networking products across the region.",
    code: "06"
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-navy min-h-screen pt-32 pb-20">
      {/* Header Section */}
      <section className="container-wide mb-24">
        <div className="max-w-4xl space-y-8">
          <FadeIn>
            <div className="inline-flex items-center gap-3 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
              <span className="text-[10px] font-black text-cyan uppercase tracking-[0.3em]">Our Services</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              End-to-End <span className="text-cyan">Infrastructure</span> Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              From initial consultation to ongoing maintenance, we provide comprehensive services to keep your network running at peak performance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-wide pb-32">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem 
              key={service.title} 
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl hover:border-cyan/30 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-8 right-10 text-5xl font-black text-white/5 select-none transition-colors group-hover:text-cyan/5">
                {service.code}
              </div>
              
              <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-cyan/20 transition-colors">
                <service.icon className="h-7 w-7 text-cyan" />
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Service Item</span>
                <Link href="/contact" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-cyan group-hover:text-cyan transition-all">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="container-wide">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[32px] p-12 md:p-20 text-center space-y-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 blur-[100px] rounded-full" />
          
          <FadeIn className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Need a Customized Service Plan?
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Our engineering team is ready to discuss your specific infrastructure requirements and build a custom support framework for your project.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold h-14 px-10 rounded-lg cyan-glow">
              <Link href="/contact">Talk to an Engineer</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
