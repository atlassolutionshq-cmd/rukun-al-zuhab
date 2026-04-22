import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our comprehensive catalog of quality trading products.",
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
