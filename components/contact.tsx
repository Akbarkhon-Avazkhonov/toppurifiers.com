"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactMethods = [
    { icon: Mail, label: "Email", value: "info@toppurifiers.com" },
    { icon: Phone, label: "Phone", value: "+1 605-335-7267" },
    { icon: MessageCircle, label: "Telegram", value: "@toppurifiers" },
  ]

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Contact Us</h2>
          <p className="text-xl text-secondary">Have questions? We're always happy to help</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light mb-6">Our Contacts</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">{method.label}</p>
                      <p className="font-light">{method.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="glass rounded-2xl p-8 space-y-6">
              <div>
                <Input placeholder="Your name" className="glass border-primary/20 focus:border-primary" />
              </div>

              <div>
                <Input type="email" placeholder="Email" className="glass border-primary/20 focus:border-primary" />
              </div>

              <div>
                <Textarea
                  placeholder="Your message"
                  rows={5}
                  className="glass border-primary/20 focus:border-primary resize-none"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white glow-hover">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
