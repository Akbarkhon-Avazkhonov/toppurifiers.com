"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Moon, Briefcase, Smartphone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    icon: Home,
    title: "Compact",
    description: "For small spaces",
    image: "/compact-air-purifier.jpg",
  },
  {
    icon: Moon,
    title: "For Bedroom",
    description: "Quiet models for sleep",
    image: "/bedroom-air-purifier-night.jpg",
  },
  {
    icon: Briefcase,
    title: "For Office",
    description: "High-performance systems",
    image: "/office-air-purifier-modern.jpg",
  },
  {
    icon: Smartphone,
    title: "Smart Purifiers",
    description: "With app control",
    image: "/smart-air-purifier-app-control.jpg",
  },
]

export default function ProductCategories() {
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
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Product Categories</h2>
          <p className="text-xl text-secondary">Find the perfect purifier for your space</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="glass border-0 overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <category.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-light mb-2">{category.title}</h3>
                    <p className="text-secondary">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
