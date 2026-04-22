import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product Catalog & Industrial Inventory",
  description: "Explore our extensive inventory of high-performance industrial components including fiber optics, copper networking, cabinets, and technical fittings in Saudi Arabia.",
  keywords: [
    "fiber optics Saudi Arabia",
    "copper networking solutions",
    "industrial cabinets",
    "technical fittings",
    "Rukun Al Zuhab products",
    "industrial sourcing Riyadh",
  ],
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
