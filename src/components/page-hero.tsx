"use client"

import React from "react"
import Image from "next/image"
import { MaskedReveal, FadeIn } from "@/components/animations"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  metadata?: { label: string; value: string }[]
}

export function PageHero({ title, subtitle, description, image, metadata }: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 overflow-hidden border-b border-border-dim">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/90 to-navy z-10" />
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center bg-no-repeat opacity-5 scale-150 mix-blend-overlay" />
      </div>

      <div className="container-wide w-full relative z-20">
        <div className="max-w-5xl space-y-12">
          {/* Subtitle / Breadcrumb HUD */}
          {subtitle && (
            <FadeIn>
              <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 relative group">
                <div className="hud-corner-tl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="hud-corner-br opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-mono text-[9px] text-cyan uppercase tracking-[0.4em]">{subtitle}</span>
              </div>
            </FadeIn>
          )}

          {/* Main Heading with Masked Reveal */}
          <div className="space-y-8">
            <MaskedReveal>
              <h1 className="heading-hero text-white">
                {title.split(" ").map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? "text-cyan" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </MaskedReveal>

            {description && (
              <FadeIn delay={0.2}>
                <p className="text-premium text-white/50 max-w-3xl">
                  {description}
                </p>
              </FadeIn>
            )}
          </div>

          {/* Metadata HUD */}
          {metadata && (
            <FadeIn delay={0.3} className="flex flex-wrap gap-12 pt-10 border-t border-white/5">
              {metadata.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <p className="label-tech">{item.label}</p>
                  <p className="text-sm sm:text-base font-black text-white uppercase tracking-[0.15em]">{item.value}</p>
                </div>
              ))}
            </FadeIn>
          )}
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 opacity-20 pointer-events-none">
        <div className="text-[10px] font-mono text-cyan tracking-widest uppercase">System_Active // RZ-PROTOCOL</div>
        <div className="h-px w-48 bg-gradient-to-l from-cyan to-transparent" />
      </div>
    </section>
  )
}
