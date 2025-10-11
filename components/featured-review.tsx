"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Star, Wind, Volume2, Zap } from "lucide-react"
import Link from "next/link"

export function FeaturedReview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    { icon: Wind, label: "HEPA H13", value: "99.97%" },
    { icon: Volume2, label: "Noise Level", value: "24 dB" },
    { icon: Zap, label: "Coverage", value: "up to 430 sq ft" },
  ]

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Review of the Week</h2>
          <p className="text-xl text-secondary">Our pick for the best air purifier</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Product image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                  <img
                    src="/levoit-core-300-air-purifier-white-modern.jpg"
                    alt="Levoit Core 300"
                    className="w-full h-full object-contain p-8"
                  />

                  {/* Floating particles around product */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-primary/30 rounded-full blur-sm"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Product details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-2">Levoit Core 300</h3>
                  <p className="text-secondary text-lg">Compact and powerful air purifier</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-secondary">4.8 on Amazon</span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-background/50"
                    >
                      <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-lg font-light">{feature.value}</div>
                      <div className="text-xs text-secondary">{feature.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href="/reviews" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white glow-hover">Read Review</Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedReview
