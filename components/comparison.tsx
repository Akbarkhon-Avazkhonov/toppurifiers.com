"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const products = [
  {
    name: "Levoit Core 300",
    price: "$99",
    coverage: "430 sq ft",
    noise: "24 dB",
    hepa: true,
    smart: false,
    rating: 4.8,
  },
  {
    name: "Coway AP-1512HH",
    price: "$229",
    coverage: "361 sq ft",
    noise: "24.4 dB",
    hepa: true,
    smart: false,
    rating: 4.7,
  },
  {
    name: "Blueair Blue Pure 211+",
    price: "$299",
    coverage: "540 sq ft",
    noise: "31 dB",
    hepa: true,
    smart: false,
    rating: 4.6,
  },
  {
    name: "Dyson Pure Cool",
    price: "$549",
    coverage: "465 sq ft",
    noise: "64 dB",
    hepa: true,
    smart: true,
    rating: 4.5,
  },
]

const features = [
  { key: "price", label: "Price" },
  { key: "coverage", label: "Coverage" },
  { key: "noise", label: "Noise" },
  { key: "hepa", label: "HEPA Filter" },
  { key: "smart", label: "Smart Control" },
  { key: "rating", label: "Rating" },
]

export function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Model Comparison</h2>
          <p className="text-xl text-secondary">Choose the best purifier for your needs</p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-6 min-w-[800px]"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-light text-lg">Model</th>
                  {products.map((product, i) => (
                    <th key={product.name} className="py-4 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="font-light text-lg"
                      >
                        {product.name}
                      </motion.div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <motion.tr
                    key={feature.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + featureIndex * 0.1 }}
                    className="border-b border-gray-100 hover:bg-primary/5 transition-colors"
                  >
                    <td className="py-4 px-4 text-secondary">{feature.label}</td>
                    {products.map((product) => {
                      const value = product[feature.key as keyof typeof product]
                      const isBest =
                        (feature.key === "rating" && value === Math.max(...products.map((p) => p.rating))) ||
                        (feature.key === "noise" && value === "24 dB") ||
                        (feature.key === "coverage" && value === "540 sq ft")

                      return (
                        <td key={product.name} className="py-4 px-4 text-center">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Check className="w-5 h-5 text-primary mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-secondary/30 mx-auto" />
                            )
                          ) : (
                            <span className={isBest ? "text-primary font-medium" : ""}>{value}</span>
                          )}
                        </td>
                      )
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Comparison
