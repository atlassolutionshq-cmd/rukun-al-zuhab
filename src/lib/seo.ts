import { Metadata } from "next"
import { siteConfig } from "@/config/site"

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Rukun Al Zuhab",
      "Trading Company",
      "Saudi Arabia",
      "Riyadh",
      "Industrial Equipment",
      "Networking Infrastructure",
      "Copper System",
      "Fiber System",
      "Rack System",
      "Data Center",
      "Electrical Supplies",
    ],
    authors: [
      {
        name: "Rukun Al Zuhab",
        url: "https://rukun-al-zuhab.com",
      },
    ],
    creator: "Rukun Al Zuhab",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Rukun Al Zuhab",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@rukunalzuhab",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
