"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wind } from "lucide-react"

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [email, setEmail] = useState("")

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Wind className="w-8 h-8 text-primary" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-extralight mb-4">Want to Breathe Cleaner?</h2>

              <p className="text-lg text-secondary mb-8 text-pretty">
                Subscribe for curated picks and tips on choosing a purifier
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass border-primary/20 focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-white glow-hover whitespace-nowrap">
                  Breathe Better 🌬️
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
