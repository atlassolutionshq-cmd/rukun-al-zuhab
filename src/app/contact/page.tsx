"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowUpRight, Terminal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Regional HQ",
    details: ["King Fahd Road, Olaya", "Riyadh, Saudi Arabia"],
    code: "LOC_01"
  },
  {
    icon: Phone,
    title: "Direct Line",
    details: ["+966 11 XXX XXXX", "+966 5X XXX XXXX"],
    code: "TEL_02"
  },
  {
    icon: Mail,
    title: "Communication",
    details: ["info@rukun-alzuhab.com", "sales@rukun-alzuhab.com"],
    code: "EML_03"
  },
  {
    icon: Clock,
    title: "Availability",
    details: ["Sun - Thu: 08:00 - 17:00", "Fri - Sat: Closed"],
    code: "HRS_04"
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Inquiry received. Our desk will contact you within 24 operational hours.")
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Minimalist & Atmospheric */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Direct Procurement"
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
                DIRECT PROCUREMENT • QUOTATION DESK
              </span>
            </div>
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Project <br />
                <span className="text-red italic font-medium">Inquiry</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-normal">
                Connect with our technical sales team for specialized industrial quotes 
                and large-scale procurement frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Interface - Minimal Grid */}
      <section className="py-32 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {contactInfo.map((item) => (
              <div key={item.title} className="group space-y-8 bg-white/50 p-10 rounded-[2rem] border border-gray-100 hover:border-red/20 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <item.icon className="h-6 w-6 text-blue/20 group-hover:text-red transition-colors" />
                  <span className="text-[8px] font-bold text-blue/10 tracking-widest">{item.code}</span>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red/60">{item.title}</p>
                  <div className="space-y-1">
                    {item.details.map((detail) => (
                      <p key={detail} className="text-lg font-bold text-blue tracking-tight">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Terminal - High-Tech Form */}
      <section className="py-40 bg-gray-50/30 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-32 items-start">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-bold text-blue tracking-tighter leading-tight">
                  Dispatch <br />specifications.
                </h2>
                <p className="text-lg text-blue/40 leading-relaxed font-medium">
                  Provide your operational requirements. Our technical specialists typically 
                  respond within 24 operational hours.
                </p>
              </div>
              <div className="h-px w-24 bg-red/20" />
              <div className="flex items-center gap-4 text-blue/20">
                <Terminal className="h-5 w-5" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">SYSTEM_READY</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                  <div className="space-y-4 group">
                    <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue/30 group-focus-within:text-red transition-colors">
                      AUTH_ENTITY_NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-6 text-2xl font-bold text-blue placeholder:text-blue/10 focus:border-red focus:outline-none transition-colors"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue/30 group-focus-within:text-red transition-colors">
                      CORPORATE_ENTRY_EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-6 text-2xl font-bold text-blue placeholder:text-blue/10 focus:border-red focus:outline-none transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue/30 group-focus-within:text-red transition-colors">
                    PROJECT_SCOPE_DETAILS *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-200 py-6 text-2xl font-bold text-blue placeholder:text-blue/10 focus:border-red focus:outline-none transition-colors resize-none"
                    placeholder="Provide technical requirements and volumes..."
                  />
                </div>

                <div className="pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full bg-red hover:bg-red/90 text-white font-bold px-20 py-10 text-[11px] uppercase tracking-[0.3em] transition-all glow-primary shadow-2xl"
                  >
                    Dispatch Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HQ Visual - Technical Map */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-7 h-[650px] bg-blue rounded-[3rem] overflow-hidden relative group border border-gray-100">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/image.png"
                  alt="Riyadh HQ"
                  fill
                  className="object-cover grayscale opacity-20 brightness-50 group-hover:scale-110 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue via-transparent to-transparent" />
                <div className="absolute inset-0 tech-grid opacity-20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-24 w-24 rounded-full bg-red/10 animate-ping absolute -inset-0" />
                  <div className="h-24 w-24 rounded-full bg-red/20 border border-red/40 flex items-center justify-center relative z-10">
                    <MapPin className="h-8 w-8 text-red shadow-[0_0_20px_rgba(var(--brand-red),1)]" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold text-blue tracking-tighter leading-tight">
                  Regional <br />Command.
                </h2>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Headquarters</p>
                    <p className="text-2xl font-bold text-blue leading-tight tracking-tight">King Fahd Road, Olaya District <br />Riyadh, Saudi Arabia</p>
                  </div>
                  <div className="h-px w-12 bg-gray-100" />
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Terminal Desk</p>
                    <p className="text-2xl font-bold text-blue tracking-tight">+966 11 XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
