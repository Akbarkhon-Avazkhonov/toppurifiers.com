"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertCircle, Citrus as Virus, Wind, Building2 } from "lucide-react"

const reasons = [
  {
    icon: AlertCircle,
    title: "Allergens",
    description: "Pollen, dust, pet dander",
  },
  {
    icon: Virus,
    title: "Bacteria",
    description: "Germs and viruses in the air",
  },
  {
    icon: Wind,
    title: "Odors",
    description: "Tobacco smoke, cooking smells",
  },
  {
    icon: Building2,
    title: "Smog",
    description: "Urban air pollution",
  },
]

export default function WhyCleanAir() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Why Clean Air Matters</h2>
          <p className="text-xl text-secondary">What modern purifiers protect against</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* Particle effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <reason.icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-2xl font-light mb-2">{reason.title}</h3>
                <p className="text-secondary">{reason.description}</p>
              </div>

              {/* Animated particles that disappear */}
              <motion.div
                className="absolute top-0 left-0 w-2 h-2 bg-primary/30 rounded-full"
                animate={{
                  x: [0, 100, 200],
                  y: [0, -50, -100],
                  opacity: [1, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
