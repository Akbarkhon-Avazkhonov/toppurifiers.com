import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const sections = [
    {
      title: "Company",
      links: ["About Us", "Contact", "Blog", "Careers"],
    },
    {
      title: "Help",
      links: ["FAQ", "Shipping", "Returns", "Warranty"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Cookies"],
    },
  ]

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-accent/10 to-background border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extralight text-primary mb-4">TopPurifiers</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Your trusted guide to the world of clean air. Independent reviews and expert advice.
            </p>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-light text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-secondary hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <social.icon className="w-5 h-5 text-secondary hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-secondary mb-2">© 2025 TopPurifiers. All rights reserved.</p>
            <p className="text-xs text-secondary/70">
              Amazon Associate Program Participant. 🛒 As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
