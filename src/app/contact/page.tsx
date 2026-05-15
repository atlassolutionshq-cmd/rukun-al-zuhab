"use client";

import * as React from "react";
import Image from "next/image";
import { Send, MapPin, Phone, Clock, Terminal, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ContactPage() {
  return (
    <div className="bg-navy min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Contact Rukun Al Zuhab"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy z-10" />
        </div>

        <div className="container-wide w-full relative z-20">
          <div className="max-w-4xl space-y-8">
            <FadeIn>
              <div className="inline-flex items-center gap-3 bg-cyan/10 border border-cyan/20 rounded-full px-4 py-1.5">
                <span className="text-[10px] font-black text-cyan uppercase tracking-[0.3em]">Procurement Desk · Riyadh</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Get in <span className="text-cyan italic">Touch</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
                Submit your project requirements or product inquiry directly to our technical procurement desk.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
            
            {/* Form */}
            <FadeIn className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-white tracking-tight">Technical Specification Inquiry</h2>
                <p className="text-white/40 leading-relaxed max-w-xl">
                  Whether you're sourcing for a project, requesting a quote, or need technical specifications, fill in the form below.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ahmad Al-Rashid" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. ahmad@company.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Al-Rashid Contracting Co." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan/50 focus:bg-white/10 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Message / Specifications</label>
                  <textarea 
                    rows={6} 
                    placeholder="Describe your project requirements, product quantities, or specifications..." 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan/50 focus:bg-white/10 outline-none transition-all resize-none"
                  />
                </div>

                <Button type="submit" className="bg-cyan hover:bg-cyan/90 text-navy font-black rounded-lg px-10 h-14 cyan-glow transition-all flex items-center gap-3">
                  Send Inquiry <Send className="h-4 w-4" />
                </Button>
              </form>
            </FadeIn>

            {/* Side Info */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn direction="left" className="bg-white/5 border border-white/10 rounded-3xl p-10 space-y-12 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan/5 blur-3xl rounded-full" />
                
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-cyan" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Headquarters</p>
                      <p className="text-lg font-bold text-white leading-tight">
                        Olaya Riyadh,<br />
                        P.O Box : 335119 - Riyadh 11341
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-cyan" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Direct Line</p>
                      <a href="tel:+966550602197" className="text-xl font-black text-white hover:text-cyan transition-colors">
                        +966 55 060 2197
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-cyan/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-cyan" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Office Hours</p>
                      <p className="text-lg font-bold text-white">Sunday – Thursday</p>
                      <p className="text-white/40 font-bold">08:00 – 18:00 AST</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-cyan/60">
                      Procurement Desk Active
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="left" className="bg-cyan p-10 rounded-3xl space-y-6">
                <h3 className="text-2xl font-black text-navy leading-tight">Request a Product Catalog?</h3>
                <p className="text-navy/60 font-medium">
                  Download our complete showroom available items list in Excel format for offline browsing.
                </p>
                <Button asChild className="bg-navy text-white hover:bg-navy/90 w-full rounded-lg h-14 font-bold">
                  <a href="/Showroom Available Items List.xlsx" download>Download Catalog</a>
                </Button>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
