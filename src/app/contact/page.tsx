import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { Mail, MapPin, Phone, Send, Clock, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-glow mb-8 text-center md:text-left">Inquiry Channel</h2>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-center md:text-left uppercase">
              Connect With <br /> <span className="text-cyan-glow italic text-gradient-to-r from-cyan-glow to-white">The Source</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold opacity-80 leading-relaxed text-center md:text-left">
              Direct technical procurement desk for enterprise networking 
              and industrial infrastructure requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Form */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-black tracking-tighter uppercase">Initialize Inquiry Protocol</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Please provide the required technical specifications or bill of materials. 
                  Our technical desk will analyze your requirement and respond within 24 hours.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ahmad Al-Rashid" 
                      className="w-full h-16 bg-secondary/50 border border-border rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. procurement@company.com" 
                      className="w-full h-16 bg-secondary/50 border border-border rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Al-Rashid Contracting Co." 
                    className="w-full h-16 bg-secondary/50 border border-border rounded-2xl px-6 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary">Message / BOM Details</label>
                  <textarea 
                    rows={6} 
                    placeholder="Describe your project requirements, quantities, or technical specs..." 
                    className="w-full bg-secondary/50 border border-border rounded-[32px] px-6 py-6 font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <Button className="w-full md:w-fit rounded-full h-16 px-12 font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20 flex items-center justify-center">
                  Transmit Message <Send className="ml-3 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-navy p-12 rounded-[48px] text-white space-y-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-glow/5 rounded-full -mr-32 -mt-32 blur-[80px]" />
                
                <div className="space-y-4 relative z-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-glow">HQ Operations</h4>
                  <p className="text-2xl font-black tracking-tighter uppercase leading-tight">Riyadh Strategic <br /> Hub Center</p>
                </div>

                <div className="space-y-8 relative z-10">
                  <InfoItem icon={MapPin} label="Physical Address" value={siteConfig.contact.address} />
                  <InfoItem icon={Phone} label="Direct Procurement" value={siteConfig.contact.phone} />
                  <InfoItem icon={Mail} label="Transmission" value={siteConfig.contact.email} />
                  <InfoItem icon={Clock} label="Operational Hours" value="Sun - Thu: 08:00 - 18:00" />
                </div>

                <div className="pt-8 border-t border-white/10 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Status: Systems Active // Desk Online</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-[48px] overflow-hidden border border-border group">
                <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                  <Globe className="w-12 h-12 text-primary opacity-20 animate-spin-slow" />
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6978433965943!2d46.67139151500!3d24.71355168412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0323381a1793%3A0x6b5a3e2f!2sOlaya%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1652876543210!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000 opacity-50 group-hover:opacity-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

function InfoItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-cyan-glow shrink-0 border border-white/10">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{label}</p>
        <p className="text-md font-bold leading-relaxed">{value}</p>
      </div>
    </div>
  )
}
