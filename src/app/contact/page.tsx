"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Regional HQ",
    details: ["King Fahd Road, Olaya", "Riyadh, Saudi Arabia"],
  },
  {
    icon: Phone,
    title: "Direct Line",
    details: ["+966 11 XXX XXXX", "+966 5X XXX XXXX"],
  },
  {
    icon: Mail,
    title: "Communication",
    details: ["info@rukun-alzuhab.com", "sales@rukun-alzuhab.com"],
  },
  {
    icon: Clock,
    title: "Availability",
    details: ["Sun - Thu: 08:00 - 17:00", "Fri - Sat: Closed"],
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
    <div className="bg-white min-h-screen tech-grid">
      {/* Hero - Ultra Minimal */}
      <section className="bg-white pt-32 pb-20 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red">Direct Procurement Channel</p>
            <h1 className="text-6xl md:text-8xl font-bold text-blue tracking-tighter leading-none">
              Project <br />
              <span className="text-blue/20 italic">Inquiry</span>
            </h1>
            <p className="text-xl text-blue/60 max-w-2xl leading-relaxed">
              Connect with our technical sales team for specialized industrial quotes 
              and large-scale procurement frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Info Grid - Minimal Lines */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {contactInfo.map((item) => (
              <div key={item.title} className="space-y-6">
                <div className="h-px w-full bg-gray-100" />
                <div className="space-y-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red">{item.title}</p>
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

      {/* Form Section - Clean Layout */}
      <section className="py-32 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4 space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-blue tracking-tighter leading-tight">
                Submit project <br />specifications.
              </h2>
              <p className="text-lg text-blue/60 leading-relaxed">
                Provide your operational requirements. Our technical specialists typically 
                respond with data within 24 operational hours.
              </p>
              <div className="h-px w-12 bg-red" />
            </div>

            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                  <div className="space-y-4 group">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-blue/40 group-focus-within:text-red transition-colors">
                      AUTHORIZED NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-xl font-bold text-blue placeholder:text-gray-200 focus:border-red focus:outline-none transition-colors"
                      placeholder="Abdullah Al-Fahad"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-blue/40 group-focus-within:text-red transition-colors">
                      CORPORATE EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-xl font-bold text-blue placeholder:text-gray-200 focus:border-red focus:outline-none transition-colors"
                      placeholder="desk@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-blue/40 group-focus-within:text-red transition-colors">
                    PROJECT SCOPE *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-200 py-4 text-xl font-bold text-blue placeholder:text-gray-200 focus:border-red focus:outline-none transition-colors resize-none"
                    placeholder="Provide technical requirements, volumes, and site data..."
                  />
                </div>

                <div className="pt-8">
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full bg-red hover:bg-red/90 text-white font-bold px-16 py-8 text-sm uppercase tracking-widest transition-all glow-primary"
                  >
                    Dispatch Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* HQ Visual */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-8 h-[600px] bg-white rounded-[4rem] overflow-hidden border border-gray-100 flex items-center justify-center relative group">
              <MapPin className="h-24 w-24 text-blue/10 group-hover:text-red transition-colors" />
              <div className="absolute inset-0 bg-blue opacity-0 group-hover:opacity-5 transition-opacity" />
            </div>
            <div className="lg:col-span-4 space-y-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue tracking-tighter leading-tight">
                Headquarters <br />Riyadh.
              </h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red">Location</p>
                  <p className="text-lg font-bold text-blue">King Fahd Road, Olaya District</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red">Desk</p>
                  <p className="text-lg font-bold text-blue">+966 11 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
