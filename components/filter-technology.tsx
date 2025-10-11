"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const filterLayers = [
  { name: "Pre-Filter", description: "Captures large particles", color: "#647B9A" },
  { name: "HEPA", description: "Removes 99.97% of particles down to 0.3 microns", color: "#00C4CC" },
  { name: "Carbon Layer", description: "Absorbs odors and gases", color: "#1a2332" },
]

export default function FilterTechnology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Filtration Technology</h2>
          <p className="text-xl text-secondary">How multi-stage air purification works</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Air flow visualization */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Dirty air */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-secondary/20 flex items-center justify-center mb-4 relative overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-secondary/50 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 20 - 10],
                        y: [0, Math.random() * 20 - 10],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </div>
                <p className="text-secondary font-light">Polluted Air</p>
              </motion.div>

              {/* Filter layers */}
              <div className="flex-1 space-y-4">
                {filterLayers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                    className="glass rounded-xl p-6 relative overflow-hidden"
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl font-light mb-1">{layer.name}</h3>
                      <p className="text-sm text-secondary">{layer.description}</p>
                    </div>

                    {/* Animated particles passing through */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-3 h-3 rounded-full"
                      style={{ backgroundColor: layer.color }}
                      animate={{
                        x: [0, 400],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Clean air */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4 glow breathe">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/20"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
                <p className="text-primary font-light">Clean Air</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
