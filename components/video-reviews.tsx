"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const videos = [
  {
    title: "Levoit Core 300 - Full Review",
    thumbnail: "/levoit-core-300-review-video-thumbnail.jpg",
  },
  {
    title: "Top 5 Purifiers of 2025 Comparison",
    thumbnail: "/air-purifiers-comparison-video.jpg",
  },
  {
    title: "How to Properly Install a Purifier",
    thumbnail: "/air-purifier-installation-guide.jpg",
  },
]

export default function VideoReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative py-24 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-4">Video Reviews</h2>
          <p className="text-xl text-secondary">Watch our detailed reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-light text-lg text-balance">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
