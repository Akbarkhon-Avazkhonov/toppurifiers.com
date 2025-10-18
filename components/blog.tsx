"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "How to Choose an Air Purifier",
    excerpt: "Complete guide to selecting the perfect purifier for your home",
    image: "/air-purifier-guide-choosing.jpg",
    category: "Guides",
  },
  {
    title: "HEPA vs Carbon: What's the Difference?",
    excerpt: "Understanding filtration technologies and their effectiveness",
    image: "/hepa-filter-technology-closeup.jpg",
    category: "Technology",
  },
  {
    title: "How to Eliminate Home Odors",
    excerpt: "Practical tips for improving indoor air quality",
    image: "/fresh-clean-home-interior.jpg",
    category: "Tips",
  },
]

export default function Blog() {
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
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Tips & Blog</h2>
          <p className="text-xl text-secondary">Helpful articles about clean air</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-0 overflow-hidden h-full group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-sm backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-light mb-2 text-balance">{article.title}</h3>
                    <p className="text-secondary mb-4 text-pretty">{article.excerpt}</p>

                    
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
