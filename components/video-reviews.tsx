"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

const videos = [
  {
    title: "Levoit Core 300 - Full Review",
    thumbnail: "/levoit-core-300-review-video-thumbnail.jpg",
    duration: "12:34",
  },
  {
    title: "Top 5 Purifiers of 2025 Comparison",
    thumbnail: "/air-purifiers-comparison-video.jpg",
    duration: "18:45",
  },
  {
    title: "How to Properly Install a Purifier",
    thumbnail: "/air-purifier-installation-guide.jpg",
    duration: "8:20",
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

                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-black/70 text-white text-sm backdrop-blur-sm">
                    {video.duration}
                  </div>
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
