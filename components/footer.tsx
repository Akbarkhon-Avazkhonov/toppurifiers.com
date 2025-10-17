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
        

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socials.map((social, index) => (
              null
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
