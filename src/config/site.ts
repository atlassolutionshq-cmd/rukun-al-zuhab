export const siteConfig = {
  name: "Rukun Al Zuhab Trading Co.",
  description: "Leading premium corporate trading company specializing in industrial networking infrastructure, copper systems, fiber systems, and rack solutions.",
  url: "https://rukun-al-zuhab.com",
  ogImage: "https://rukun-al-zuhab.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/rukunalzuhab",
    facebook: "https://facebook.com/rukunalzuhab",
    linkedin: "https://linkedin.com/company/rukunalzuhab",
  },
  contact: {
    email: "info@rukunalzuhab.com",
    phone: "+966 55 060 2197",
    address: "Olaya Riyadh, P.O Box : 335119 - Riyadh 11341, Saudi Arabia",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
