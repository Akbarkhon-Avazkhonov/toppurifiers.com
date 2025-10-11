"use client"

import { motion } from "framer-motion"
import { Star, Wind, Home } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const reviews = [
  {
    id: 1,
    slug: "blueair-211i-max",
    name: "BLUEAIR Blue Pure 211i Max",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71H6ILixSVL._AC_SX679_.jpg",
    category: "Premium Large Room",
    price: "$244.99",
    coverage: "3,048 sq ft",
    cadr: "410 CFM",
    description: "HEPASilent technology for ultra-quiet, efficient purification in large spaces up to 3,048 sq ft.",
    pros: ["Ultra-quiet operation", "Smart app control", "Washable pre-filter"],
  },
  {
    id: 2,
    slug: "levoit-core-400s",
    name: "LEVOIT Core 400S",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71zj41yHChL._AC_SX679_.jpg",
    category: "Best Value",
    price: "$219.99",
    coverage: "403 sq ft",
    cadr: "260 CFM",
    description: "Smart air purifier with H13 HEPA filter and app control for medium rooms.",
    pros: ["WiFi connectivity", "Sleep mode", "Auto sensor"],
  },
  {
    id: 3,
    slug: "coway-airmega-400",
    name: "Coway Airmega 400",
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/61AU3kYNctL._AC_SX679_.jpg",
    category: "Large Rooms",
    price: "$649.00",
    coverage: "1,560 sq ft",
    cadr: "340 CFM",
    description: "Dual filtration system with GreenHEPA technology for large open spaces.",
    pros: ["Dual filters", "Air quality indicator", "5-year warranty"],
  },
  {
    id: 4,
    slug: "blueair-signature",
    name: "BLUEAIR Signature",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/81HOeaFRImL._AC_SX679_.jpg",
    category: "Quiet Operation",
    price: "$299.99",
    coverage: "540 sq ft",
    cadr: "350 CFM",
    description: "Scandinavian design with washable fabric pre-filter for medium rooms.",
    pros: ["Low maintenance", "Colorful options", "Whisper quiet"],
  },
  {
    id: 5,
    slug: "honeywell-hpa300",
    name: "Honeywell HPA300",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/719f3E5v8KL._AC_SX679_.jpg",
    category: "Reliable",
    price: "$249.99",
    coverage: "465 sq ft",
    cadr: "300 CFM",
    description: "True HEPA filtration with turbo mode for medium to large rooms.",
    pros: ["Turbo cleaning", "Easy filter replacement", "Trusted brand"],
  },
  {
    id: 6,
    slug: "airdoctor-ad5500i",
    name: "AIRDOCTOR AD5500i",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/61WTF2P8yFL._AC_SX679_.jpg",
    category: "Smart Choice",
    price: "$629.40",
    coverage: "2,086 sq ft",
    cadr: "High (UltraHEPA)",
    description: "UltraHEPA filtration for extra large spaces with app control.",
    pros: ["UltraHEPA technology", "Auto mode", "Particle sensor"],
  },
  {
    id: 7,
    slug: "molekule-air-pro",
    name: "Molekule Air Pro",
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/51VqIvd0OnL._AC_SX679_.jpg",
    category: "Innovation",
    price: "$1,014.98",
    coverage: "1,000 sq ft",
    cadr: "N/A (PECO-HEPA)",
    description: "PECO-HEPA Tri-Power filter destroys pollutants at molecular level.",
    pros: ["PECO technology", "App monitoring", "Sleek design"],
  },
  {
    id: 8,
    slug: "rabbit-air-spa-1000n",
    name: "Rabbit Air SPA-1000N",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71aRmhMFsnL._AC_SX679_.jpg",
    category: "Customizable",
    price: "$549.95",
    coverage: "815 sq ft",
    cadr: "200 CFM",
    description: "6-stage filtration with wall-mount option and customizable panels.",
    pros: ["Wall mountable", "Custom filters", "Ultra quiet"],
  },
  {
    id: 9,
    slug: "alen-breathesmart-75i",
    name: "Alen BreatheSmart 75i",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/71KGglJCbQL._AC_SX679_.jpg",
    category: "Premium Large",
    price: "$769.00",
    coverage: "1,300 sq ft",
    cadr: "350 CFM",
    description: "Heavy-duty HEPA filtration with lifetime warranty and customizable panels.",
    pros: ["Lifetime warranty", "Smart sensors", "Color options"],
  },
]

export function ReviewCards() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Reviews</h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            In-depth reviews of the best air purifiers on the market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/reviews/${review.slug}`} className="block h-full">
                <Card className="group overflow-hidden border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-cyan-500 text-white border-0">{review.category}</Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-inter text-sm font-semibold text-gray-700">{review.rating}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {review.name}
                    </h3>

                    {/* Price */}
                    

                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Home className="w-4 h-4" />
                        <span>{review.coverage}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Wind className="w-4 h-4" />
                        <span>{review.cadr}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-inter text-sm text-gray-600 mb-4 leading-relaxed">{review.description}</p>

                    {/* Pros */}
                    <div className="mb-6 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {review.pros.map((pro, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-cyan-200 text-cyan-700">
                            {pro}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">Read Full Review</Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewCards
