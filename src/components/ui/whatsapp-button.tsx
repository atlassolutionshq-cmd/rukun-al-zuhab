"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function WhatsAppButton() {
  const phone = siteConfig.contact.phone.replace(/\s+/g, '')
  const message = "Hello, I am interested in your services."
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[99] bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
      <MessageCircle className="w-6 h-6 relative z-10" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap text-sm">
        WhatsApp Us
      </span>
    </motion.a>
  )
}
