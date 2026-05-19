import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  Laptop, 
  Settings, 
  Factory, 
  ShieldCheck, 
  Headphones, 
  Truck, 
  ArrowRight,
  Zap,
  Cpu,
  Server
} from "lucide-react"

const services = [
  {
    icon: Laptop,
    title: "Network Design & Consulting",
    desc: "Expert consultation and custom network architecture design tailored to your business requirements and growth plans.",
    features: ["Topology Design", "Performance Audit", "Security Consulting"]
  },
  {
    icon: Settings,
    title: "Installation & Commissioning",
    desc: "Professional installation of copper, fiber, and rack systems by certified engineers following international standards.",
    features: ["On-site Deployment", "System Testing", "Full Certification"]
  },
  {
    icon: Factory,
    title: "Custom Manufacturing",
    desc: "Bespoke manufacturing of cables, panels, and rack systems to meet specific project specifications and requirements.",
    features: ["Custom Dimensions", "Specific Materials", "Rapid Prototyping"]
  },
  {
    icon: ShieldCheck,
    title: "Testing & Certification",
    desc: "Comprehensive testing and certification of installed infrastructure using industry-standard tools and methodologies.",
    features: ["ISO Compliance", "TIA/EIA Standards", "QA Validation"]
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    desc: "24/7 technical support and preventive maintenance programs to ensure maximum uptime and network reliability.",
    features: ["SLA Support", "Remote Monitoring", "Preventive Care"]
  },
  {
    icon: Truck,
    title: "Supply & Logistics",
    desc: "Efficient supply chain management and logistics for timely delivery of networking products across the region.",
    features: ["Regional Reach", "Express Delivery", "Secure Handling"]
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Service Capabilities</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              INTEGRATED <br /> <span className="text-primary italic">SOLUTIONS</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed">
              We provide the expertise required to design, deploy, and maintain 
              the region's most mission-critical network infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Alternating) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={service.title} className="group relative bg-background border border-border p-12 rounded-[48px] hover:border-primary transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/[0.02]">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center rounded-[24px] text-primary mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black tracking-tighter uppercase mb-6 leading-tight">{service.title}</h3>
                <p className="text-muted-foreground font-medium mb-10 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="space-y-4 mb-12">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs font-black uppercase tracking-widest opacity-60">{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-fit p-0 h-auto font-black uppercase tracking-[0.2em] text-[10px] text-primary hover:bg-transparent group/btn">
                  <Link href="/contact" className="flex items-center">
                    Initiate protocol <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Excellence (Dark) */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-glow mb-8">Performance Metrics</h2>
              <h3 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
                BUILT FOR <br /> <span className="text-cyan-glow italic">SCALE</span>
              </h3>
              <p className="text-xl opacity-70 leading-relaxed font-medium mb-16 max-w-xl">
                Our infrastructure services are designed to support massive-scale deployments 
                with zero-compromise on quality or schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <Metric icon={Zap} value="99.9%" label="Reliability Rate" />
                <Metric icon={Cpu} value="24/7" label="Active Support" />
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-[48px] p-12 backdrop-blur-xl relative group overflow-hidden">
              <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-cyan-glow/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700" />
              <div className="space-y-12 relative z-10">
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-cyan-glow/10 rounded-2xl flex items-center justify-center text-cyan-glow shrink-0">
                    <Server className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tighter uppercase mb-4">Enterprise Grade</h4>
                    <p className="opacity-60 font-medium">We deliver infrastructure that handles multi-petabyte data transfers and Tier-4 data center requirements.</p>
                  </div>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex items-start space-x-8">
                  <div className="w-16 h-16 bg-cyan-glow/10 rounded-2xl flex items-center justify-center text-cyan-glow shrink-0">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black tracking-tighter uppercase mb-4">Secure Sourcing</h4>
                    <p className="opacity-60 font-medium">Full traceability on every SKU and official warranty support from global tier-1 manufacturers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-primary rounded-[48px] p-12 md:p-24 text-primary-foreground text-center relative overflow-hidden group shadow-2xl">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 relative z-10 uppercase">
            Start Your <span className="italic">Project</span>
          </h2>
          <Button asChild size="lg" variant="secondary" className="rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm relative z-10 transition-all hover:scale-105">
            <Link href="/contact">Talk to an Engineer</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function Metric({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Icon className="w-6 h-6 text-cyan-glow" />
        <span className="text-4xl font-black tracking-tighter">{value}</span>
      </div>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">{label}</p>
    </div>
  )
}
