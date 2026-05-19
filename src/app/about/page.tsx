import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Target, Eye, ShieldCheck, Award, Zap, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-no-repeat bg-center opacity-5 scale-125" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              OUR <span className="text-cyan-glow italic">LEGACY</span> <br /> OF EXCELLENCE
            </h1>
            <p className="text-xl md:text-2xl font-bold opacity-80 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Since 1999, Rukun Al Zuhab has been the infrastructure partner 
              for the Kingdom's commercial, industrial, and institutional projects.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section (Light) */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative rounded-[48px] overflow-hidden group shadow-2xl">
              <Image 
                src="/image.png" 
                alt="Our Story" 
                width={800} 
                height={600} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            <div className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">The Origin</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                ESTABLISHED <br /> IN <span className="text-primary italic">1999</span>
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg font-medium leading-relaxed">
                <p>
                  When Rukun Al Zuhab was established, the Kingdom's structured cabling and network infrastructure market was fragmented. We were founded to fix that.
                </p>
                <p>
                  Starting with copper cabling and connectivity products, we built relationships with world-leading manufacturers and brought their full product lines to a single, technically competent local source.
                </p>
                <p>
                  Today, our 285+ SKU catalog represents the most complete network infrastructure offering available from a single trading partner in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision (Dark) */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-xl group hover:border-cyan-glow/50 transition-all duration-500">
              <div className="w-16 h-16 bg-cyan-glow/10 rounded-2xl flex items-center justify-center text-cyan-glow mb-10 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-3xl font-black tracking-tighter uppercase mb-6">Our Mission</h4>
              <p className="text-xl opacity-70 leading-relaxed font-medium">
                To supply the physical foundations of Saudi Arabia's digital infrastructure with consistency, technical precision, and genuine accountability — project after project, decade after decade.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-xl group hover:border-cyan-glow/50 transition-all duration-500">
              <div className="w-16 h-16 bg-cyan-glow/10 rounded-2xl flex items-center justify-center text-cyan-glow mb-10 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h4 className="text-3xl font-black tracking-tighter uppercase mb-6">Our Vision</h4>
              <p className="text-xl opacity-70 leading-relaxed font-medium">
                To be the most trusted single-source network infrastructure partner in the Middle East, known for our catalog depth and technical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values (Light) */}
      <section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Core Identity</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">
            OPERATIONAL <br /> <span className="text-primary italic">STANDARDS</span>
          </h3>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={ShieldCheck} 
            title="Integrity" 
            desc="Integrity in every quote. We provide honest technical guidance and fair procurement pricing." 
          />
          <ValueCard 
            icon={Award} 
            title="Quality" 
            desc="Quality in every SKU. We only stock products that meet international technical standards." 
          />
          <ValueCard 
            icon={Zap} 
            title="Precision" 
            desc="Technical precision in every recommendation. We understand the specs we sell." 
          />
        </div>
      </section>

      {/* Timeline / Achievements */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              MILESTONES <br /> OF <span className="text-primary italic">PROGRESS</span>
            </h2>
            <div className="space-y-8">
              <TimelineItem year="1999" title="The Beginning" desc="Founded in Riyadh to specialize in copper cabling systems." />
              <TimelineItem year="2005" title="Fiber Expansion" desc="Introduced full fiber optic system portfolio to our catalog." />
              <TimelineItem year="2012" title="Rack Manufacturing" desc="Established local manufacturing unit for server racks and enclosures." />
              <TimelineItem year="2020" title="Data Center Systems" desc="Launched advanced containment solutions for Tier 4 data centers." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <AchievementBox value="25" label="Years Active" />
            <AchievementBox value="285" label="Active SKUs" />
            <AchievementBox value="98%" label="QA Success" />
            <AchievementBox value="1M+" label="Meters Cabled" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-navy rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-cyan-glow/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 relative z-10 uppercase">
            Experience <span className="text-cyan-glow">Technical</span> Depth
          </h2>
          <Button asChild size="lg" className="rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm bg-white text-navy hover:bg-cyan-glow hover:text-navy relative z-10">
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="bg-background border border-border p-12 rounded-[40px] shadow-xl shadow-black/5 hover:border-primary transition-colors group">
      <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-2xl text-primary mb-8 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8" />
      </div>
      <h4 className="text-2xl font-black uppercase tracking-tight mb-4">{title}</h4>
      <p className="text-muted-foreground font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <div className="flex space-x-8 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border-4 border-secondary bg-background flex items-center justify-center font-black text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 shrink-0">
          {year}
        </div>
        <div className="w-1 h-full bg-secondary mt-2" />
      </div>
      <div className="pb-12">
        <h4 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-muted-foreground font-medium">{desc}</p>
      </div>
    </div>
  )
}

function AchievementBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-secondary/30 p-8 rounded-[32px] text-center border border-border hover:border-primary/50 transition-colors">
      <p className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-2">{value}</p>
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
    </div>
  )
}
