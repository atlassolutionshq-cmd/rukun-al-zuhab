"use client"

import * as React from "react"
import Image from "next/image"
import { Send, MapPin, Phone, Mail, Terminal, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Identical to Home/Products */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Contact Rukun Al Zuhab"
            fill
            className="object-cover grayscale brightness-[0.2] contrast-[1.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/60 to-transparent z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 px-1 py-1 group cursor-default animate-reveal">
              <div className="h-px w-8 bg-red/50 group-hover:w-12 transition-all duration-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-red/80 uppercase">
                COMMUNICATIONS TERMINAL • GLOBAL INQUIRY
              </span>
            </div>
            <div className="space-y-8 animate-reveal stagger-1">
              <h1 className="text-5xl md:text-7xl font-bold text-white heading-tight">
                Initialize <br />
                <span className="text-red italic font-medium">Contact</span>
              </h1>
              <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-normal">
                Direct channel to our strategic procurement desk. Submit your technical 
                specifications for rapid deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Matrix */}
      <section className="py-32 tech-grid">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Form Section */}
            <div className="lg:col-span-7 space-y-12 animate-reveal stagger-2">
              <div className="space-y-4">
                <p className="label-wide text-blue">PROTOCOL_SEND_DATA</p>
                <h2 className="text-4xl font-bold text-blue tracking-tight">Technical Specification Inquiry</h2>
              </div>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue/40 uppercase tracking-widest pl-2">USER_IDENTITY</label>
                    <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium focus:border-red/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue/40 uppercase tracking-widest pl-2">USER_SIGNAL</label>
                    <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium focus:border-red/20 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-blue/40 uppercase tracking-widest pl-2">SUBJECT_HEADER</label>
                  <input type="text" placeholder="Inquiry Subject" className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium focus:border-red/20 outline-none transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-blue/40 uppercase tracking-widest pl-2">DATA_PACKAGE</label>
                  <textarea rows={6} placeholder="Detailed Specifications / Message..." className="w-full bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl text-sm font-medium focus:border-red/20 outline-none transition-all resize-none"></textarea>
                </div>
                
                <Button className="w-full md:w-auto bg-red hover:bg-red/90 text-white h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all glow-primary shadow-2xl flex items-center gap-4 group">
                  Transmit Data
                  <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="lg:col-span-5 space-y-12 animate-reveal stagger-3">
              <div className="p-12 bg-blue rounded-[3rem] text-white space-y-16 relative overflow-hidden">
                <Terminal className="absolute -right-8 -top-8 h-48 w-48 text-white/[0.03]" />
                
                <div className="space-y-8 relative z-10">
                  <p className="label-wide text-white/40">HEADQUARTERS_LOCATION</p>
                  <div className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-bold tracking-tight">Riyadh, Saudi Arabia</p>
                      <p className="text-sm text-white/50 leading-relaxed font-medium">King Fahd Road, Olaya District<br />Building 742, 4th Floor</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 relative z-10">
                  <p className="label-wide text-white/40">COMMUNICATIONS_DESK</p>
                  <div className="space-y-6">
                    <div className="flex gap-6 items-center">
                      <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Phone className="h-5 w-5 text-red" />
                      </div>
                      <p className="text-lg font-bold tracking-tight">+966 11 000 0000</p>
                    </div>
                    <div className="flex gap-6 items-center">
                      <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Mail className="h-5 w-5 text-red" />
                      </div>
                      <p className="text-lg font-bold tracking-tight">desk@rukun-alzuhab.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">System Operational: 08:00 - 18:00 AST</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-[3rem] bg-gray-100 border border-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 group">
                <Image 
                  src="/image.png" 
                  alt="Location Map"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-6 py-3 bg-white shadow-2xl rounded-full text-[10px] font-bold text-blue uppercase tracking-widest border border-gray-100">
                    Interact_Map_Protocol
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
