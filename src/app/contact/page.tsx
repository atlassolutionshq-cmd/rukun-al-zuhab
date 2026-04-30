"use client";

import * as React from "react";
import Image from "next/image";
import { Send, MapPin, Phone, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image.png"
            alt="Contact Rukun Al Zuhab"
            fill
            className="object-cover grayscale brightness-[0.18] contrast-[1.3]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue/97 via-blue/75 to-blue/20 z-10" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20">
          <div className="max-w-3xl space-y-8">
            <FadeIn direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-4">
                <div className="h-px w-8 bg-red/60" />
                <span className="text-[10px] font-bold tracking-[0.4em] text-red/90 uppercase">
                  PROCUREMENT DESK · RIYADH
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-bold text-white heading-tight">
                Get in <span className="text-red italic font-semibold">Touch</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="text-lg text-white/70 max-w-xl leading-relaxed">
                Submit your project requirements or product inquiry directly to our
                technical procurement desk. We respond within one business day.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-20">

            {/* Form */}
            <FadeIn className="lg:col-span-7 space-y-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-4">
                  <div className="h-px w-8 bg-red" />
                  <span className="text-[10px] font-bold tracking-[0.5em] text-red uppercase">Send a Message</span>
                </div>
                <h2 className="text-3xl font-bold text-blue tracking-tight">
                  Technical Specification Inquiry
                </h2>
                <p className="text-blue/50 leading-relaxed">
                  Whether you&apos;re sourcing for a project, requesting a quote, or need a product specification, fill in the form below.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="block text-[12px] font-bold text-blue/60 uppercase tracking-wider">
                      Full Name <span className="text-red">*</span>
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="e.g. Ahmad Al-Rashid"
                      required
                      className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl text-sm font-medium text-blue placeholder:text-blue/30 focus:border-red/40 focus:bg-white outline-none transition-all min-h-[48px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[12px] font-bold text-blue/60 uppercase tracking-wider">
                      Email Address <span className="text-red">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. ahmad@company.com"
                      required
                      className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl text-sm font-medium text-blue placeholder:text-blue/30 focus:border-red/40 focus:bg-white outline-none transition-all min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-[12px] font-bold text-blue/60 uppercase tracking-wider">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="e.g. Al-Rashid Contracting Co."
                    className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl text-sm font-medium text-blue placeholder:text-blue/30 focus:border-red/40 focus:bg-white outline-none transition-all min-h-[48px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-[12px] font-bold text-blue/60 uppercase tracking-wider">
                    Inquiry Subject <span className="text-red">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Cat6A cabling quote for hospital project"
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl text-sm font-medium text-blue placeholder:text-blue/30 focus:border-red/40 focus:bg-white outline-none transition-all min-h-[48px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[12px] font-bold text-blue/60 uppercase tracking-wider">
                    Message / Specifications <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your project requirements, product quantities, specifications, or any other relevant details..."
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl text-sm font-medium text-blue placeholder:text-blue/30 focus:border-red/40 focus:bg-white outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-red hover:bg-red/90 text-white h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-3 group cursor-pointer"
                >
                  Send Inquiry
                  <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </form>
            </FadeIn>

            {/* Info panel */}
            <div className="lg:col-span-5">
              <FadeIn direction="left" className="p-10 bg-blue rounded-2xl text-white space-y-12 relative overflow-hidden h-full">
                <Terminal className="absolute -right-8 -top-8 h-44 w-44 text-white/3" />

                <div className="space-y-6 relative z-10">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Headquarters</p>
                  <div className="flex gap-5 items-start">
                    <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-lg font-bold tracking-tight">Riyadh, Saudi Arabia</p>
                      <p className="text-sm text-white/55 leading-relaxed">
                        Olaya, Riyadh<br />
                        P.O. Box 335119 — Riyadh 11341
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Direct Line</p>
                  <div className="flex gap-5 items-center">
                    <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="h-5 w-5 text-red" />
                    </div>
                    <a href="tel:+966550602197" className="text-lg font-bold tracking-tight hover:text-red transition-colors cursor-pointer">
                      +966 55 060 2197
                    </a>
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">Office Hours</p>
                  <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/70">Sunday – Thursday</p>
                    <p className="text-base font-bold text-white">08:00 – 18:00 AST</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                      Procurement Desk Active
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
