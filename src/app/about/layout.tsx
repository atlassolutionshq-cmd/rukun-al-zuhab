import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rukun Al Zuhab Trading Co - a leading trading company in Saudi Arabia with over 25 years of experience.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
