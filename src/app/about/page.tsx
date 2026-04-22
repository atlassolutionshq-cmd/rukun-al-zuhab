import Image from "next/image"
import { CheckCircle, Award, Users, Target, Eye } from "lucide-react"

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
    <div className="bg-white min-h-screen tech-grid">
      {/* Hero - Minimalist Legacy */}
      <section className="bg-white pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Corporate Legacy</p>
            <h1 className="text-6xl md:text-8xl font-bold text-blue tracking-tighter leading-none">
              A Legacy of <br />
              <span className="text-blue/20 italic">Precision</span>
            </h1>
            <p className="text-xl text-blue/60 max-w-2xl leading-relaxed">
              Founded in 1999, Rukun Al Zuhab Trading Co has evolved into one of Saudi Arabia&apos;s 
              most respected industrial partners.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold text-blue tracking-tighter leading-tight">
                Engineering trust <br />since 1999.
              </h2>
              <div className="space-y-6 text-lg text-blue/60 leading-relaxed">
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
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-gray-100">
                <div>
                  <p className="text-4xl font-bold text-blue">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red mt-2">Years Active</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue">98%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red mt-2">Retention</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-[600px] rounded-[4rem] overflow-hidden grayscale contrast-125">
                <Image
                  src="/image.png"
                  alt="Corporate Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Typographic Grid */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-24">
            {values.map((value) => (
              <div key={value.title} className="space-y-8">
                <div className="h-px w-full bg-gray-200" />
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold tracking-tight text-blue">{value.title}</h3>
                  <p className="text-blue/60 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Minimal Portraits */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="mb-24 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red">The Strategists</p>
            <h2 className="text-4xl md:text-6xl font-bold text-blue tracking-tighter">Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16 md:gap-24">
            {leadership.map((leader) => (
              <div key={leader.name} className="space-y-8">
                <div className="aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden relative grayscale">
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <Users className="h-32 w-32" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-blue">{leader.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red">{leader.role}</p>
                  <p className="text-sm text-blue/60 pt-4 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
