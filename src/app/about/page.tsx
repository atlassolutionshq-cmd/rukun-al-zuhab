import Image from "next/image"
import { CheckCircle, Award, Users, Target, Eye, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const leadership = [
  {
    name: "Ahmed Al-Rashid",
    role: "Chief Executive Officer",
    bio: "Over 30 years of experience in international trade and business development.",
  },
  {
    name: "Mohammed Al-Zuhab",
    role: "Chief Operating Officer",
    bio: "Expert in supply chain management and operations with MBA from Harvard.",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Chief Financial Officer",
    bio: "Former Big 4 consultant specializing in corporate finance and strategy.",
  },
]

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To provide high-performance industrial solutions that exceed customer expectations while maintaining the highest standards of integrity.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading industrial trading partner in the Middle East, recognized for excellence, innovation, and operational precision.",
  },
  {
    icon: Award,
    title: "Values",
    description: "Integrity, Quality, and Technical Excellence guide every decision we make and every partnership we build.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Minimalist Legacy */}
      <section className="relative h-[70vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Corporate Legacy"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/50 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default">
              <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                CORPORATE LEGACY • EST. 1999
              </span>
            </div>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Engineering <br />
                <span className="text-red italic font-medium">Confidence</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                Founded in 1999, Rukun Al Zuhab Trading Co has evolved into one of Saudi Arabia&apos;s 
                most respected industrial partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Technical Grid */}
      <section className="py-40 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-6 space-y-16">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-blue tracking-tighter leading-tight">
                  Bridging global excellence with local industrial needs.
                </h2>
                <div className="space-y-6 text-lg text-blue/60 leading-relaxed font-medium">
                  <p>
                    Our DNA is built on the intersection of global manufacturing excellence and 
                    local industrial requirements. We bridge the gap, ensuring that the 
                    Kingdom&apos;s most ambitious projects are built on a foundation of quality.
                  </p>
                  <p>
                    With a portfolio spanning building materials to complex electrical systems, 
                    we provide the structural and operational components that drive growth.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-16 pt-16 border-t border-gray-100">
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-blue tracking-tighter">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red">Years Active</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold text-blue tracking-tighter">98%</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red">Retention</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative h-[700px] rounded-[3rem] overflow-hidden grayscale brightness-75 contrast-125 border border-gray-100">
                <Image
                  src="/image.png"
                  alt="Industrial Excellence"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue/10 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Glassmorphic Interface */}
      <section className="py-40 bg-blue relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="glass-futuristic p-12 rounded-[2.5rem] space-y-10 group hover:-translate-y-2 transition-all duration-500">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Technical Dossier */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-32 space-y-6">
            <div className="inline-flex items-center gap-4 px-1 py-1">
              <div className="h-px w-8 bg-red" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red uppercase">
                THE STRATEGISTS
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter">Executive Board</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            {leadership.map((leader) => (
              <div key={leader.name} className="group space-y-10">
                <div className="aspect-[3/4] bg-gray-50 rounded-[2.5rem] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 border border-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                    <Users className="h-64 w-64" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-blue tracking-tight">{leader.name}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red">{leader.role}</p>
                  </div>
                  <div className="h-px w-8 bg-gray-100 group-hover:w-full transition-all duration-500" />
                  <p className="text-sm text-blue/50 leading-relaxed font-medium">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter">
            Build the <span className="text-red italic">infrastructure</span> of tomorrow.
          </h2>
          <div className="flex justify-center pt-8">
            <button className="group text-[11px] font-bold text-blue uppercase tracking-widest inline-flex items-center gap-6 py-6 px-12 bg-gray-50 rounded-full hover:bg-red hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl">
              Connect with our desk <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
