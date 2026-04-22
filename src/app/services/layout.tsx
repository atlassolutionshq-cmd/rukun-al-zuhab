import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive trading services including procurement, logistics, quality assurance, and after-sales support.",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
