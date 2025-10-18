import { notFound } from "next/navigation"
import { Star, Wind, Home, Check, X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
    amazonUrl: "https://www.amazon.com/BLUEAIR-Purifiers-HEPASilent-Allergies-Purifier/dp/B0BN2MGV5H",
    description: "HEPASilent technology for ultra-quiet, efficient purification in large spaces up to 3,048 sq ft.",
    pros: [
      "Ultra-quiet operation with low noise levels",
      "Smart app control with real-time monitoring",
      "Washable fabric pre-filter in multiple colors",
      "High CADR for fast air cleaning",
      "Energy-efficient design",
    ],
    cons: [
      "Higher initial cost than smaller units",
      "Filter replacements can be costly",
      "Larger footprint for big spaces",
    ],
    fullReview: `The BLUEAIR Blue Pure 211i Max is a top-tier air purifier designed for large spaces, covering up to 3,048 square feet with a CADR of 410 CFM. Its HEPASilent technology combines electrostatic and mechanical filtration to remove 99.97% of particles as small as 0.1 microns, including dust, pollen, and smoke, while keeping noise levels remarkably low. The smart app allows remote control, scheduling, and real-time air quality monitoring, making it ideal for tech-savvy users. The washable fabric pre-filter, available in stylish colors like Stockholm Fog, adds a customizable aesthetic while reducing maintenance costs. With a RealTrack algorithm to monitor filter life accurately, this purifier is both efficient and user-friendly. While the upfront cost and filter replacements may be higher, its performance in large rooms and quiet operation make it a standout choice for homes or offices.`,
    specs: {
      dimensions: '20.4" H x 13" W x 13" D',
      weight: "13 lbs",
      filterType: "HEPASilent + Activated Carbon",
      noiseLevel: "23-53 dB",
      powerConsumption: "20-60W",
      warranty: "2 years",
    },
    sideImage: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/LEVOIT-Purifier-Allergies-Core-400S/dp/B08R794ZMX",
    description: "Smart air purifier with H13 HEPA filter and app control for medium rooms.",
    pros: [
      "Affordable price with premium features",
      "WiFi-enabled with VeSync app control",
      "H13 True HEPA filter captures 99.97% of particles",
      "Quiet sleep mode at 24 dB",
      "Energy Star certified for efficiency",
    ],
    cons: ["Limited coverage for larger spaces", "Basic cylindrical design", "App connectivity can occasionally lag"],
    fullReview: `The Levoit Core 400S is a standout in the budget-friendly smart air purifier category, offering excellent performance for rooms up to 403 square feet. Its H13 True HEPA filter captures 99.97% of particles as small as 0.3 microns, while the activated carbon layer tackles odors and VOCs. The VeSync app provides remote control, scheduling, and air quality monitoring, with compatibility for Alexa and Google Assistant. At just 24 dB in sleep mode, it's perfect for bedrooms, and the ability to turn off the display ensures undisturbed rest. Energy efficiency is a highlight, with low power consumption and Energy Star certification. While its coverage is limited compared to larger units, and the design is simple, the Core 400S delivers reliable purification and smart features at an unbeatable price, making it ideal for small to medium spaces.`,
    specs: {
      dimensions: '20.5" H x 10.8" W x 10.8" D',
      weight: "11 lbs",
      filterType: "H13 True HEPA + Activated Carbon",
      noiseLevel: "24-52 dB",
      powerConsumption: "33W",
      warranty: "2 years",
    },
    sideImage: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/Purifiers-285ft%C2%B2-Allergen-Warranty-Airmega/dp/B0DRPRJMWD",
    description: "Dual filtration system with GreenHEPA technology for large open spaces.",
    pros: [
      "Covers large spaces up to 1,560 sq ft",
      "Dual Max2 filters with GreenHEPA technology",
      "Real-time air quality indicator",
      "Eco mode for energy savings",
      "5-year warranty",
    ],
    cons: ["Larger footprint takes up space", "Higher initial cost", "Dual filter replacements can be expensive"],
    fullReview: `The Coway Airmega 400 is a powerhouse air purifier designed for large spaces, covering up to 1,560 square feet with a CADR of 340 CFM. Its dual Max2 filter system combines pre-filters, deodorization filters, and True HEPA filters to capture 99.97% of particles, including allergens, smoke, and odors. The smart auto mode adjusts fan speed based on real-time air quality, indicated by a color-changing LED ring, while Eco mode shuts off the fan when air is clean, saving energy. At 22 dB on low settings, it's quiet enough for continuous use, and the modern design blends seamlessly into homes. The 5-year warranty ensures long-term reliability, though the dual-filter system means higher replacement costs. For open-concept homes or large rooms, the Airmega 400 offers unmatched performance and durability.`,
    specs: {
      dimensions: '22.8" H x 14.8" W x 14.8" D',
      weight: "24.7 lbs",
      filterType: "Dual Max2 HEPA + Activated Carbon",
      noiseLevel: "22-52 dB",
      powerConsumption: "64W",
      warranty: "5 years",
    },
    sideImage: "https://images.unsplash.com/photo-1593642532473-47ba0277781c?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/BLUEAIR-Signature-Eliminating-Purifier-Large/dp/B08KTH125D",
    description: "Scandinavian design with washable fabric pre-filter for medium rooms.",
    pros: [
      "High CADR of 350 CFM",
      "Washable fabric pre-filter reduces costs",
      "Whisper-quiet at low settings",
      "Stylish Scandinavian design",
      "Simple one-button control",
    ],
    cons: ["Lacks smart features or app control", "No built-in air quality sensor", "Filter replacement costs add up"],
    fullReview: `The BLUEAIR Signature combines elegant Scandinavian design with effective air purification for medium-sized rooms up to 540 square feet. Its HEPASilent technology delivers a high CADR of 350 CFM, efficiently removing dust, pollen, and smoke while maintaining ultra-quiet operation. The washable fabric pre-filter, available in multiple colors, adds a stylish touch and lowers maintenance costs. The one-button control simplifies operation, though the lack of smart features or an air quality sensor may disappoint tech enthusiasts. Ideal for those prioritizing quiet performance and aesthetics, this purifier excels in bedrooms or offices where simplicity and efficiency are key.`,
    specs: {
      dimensions: '20.4" H x 13" W x 13" D',
      weight: "13 lbs",
      filterType: "HEPASilent + Activated Carbon",
      noiseLevel: "31-56 dB",
      powerConsumption: "30-61W",
      warranty: "2 years",
    },
    sideImage: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1621570074981-c4b7e8016e7e?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/Honeywell-Purifier-Indicator-Allergen-Medium-Large/dp/B09V6JBL7T",
    description: "True HEPA filtration with turbo mode for medium to large rooms.",
    pros: [
      "True HEPA filter captures 99.97% of particles",
      "Turbo mode for rapid cleaning",
      "Affordable filter replacements",
      "Trusted brand reliability",
      "Straightforward controls",
    ],
    cons: ["Louder on turbo mode (up to 70 dB)", "No smart features or app control", "Bulkier design"],
    fullReview: `The Honeywell HPA300 is a dependable air purifier from a trusted brand, designed for medium to large rooms up to 465 square feet. Its True HEPA filter captures 99.97% of particles as small as 0.3 microns, while the activated carbon pre-filter tackles odors. The turbo mode provides rapid air cleaning with a CADR of 300 CFM, ideal for quick allergen or smoke removal. Simple, intuitive controls make it easy to use, though it lacks smart features like app connectivity. While the turbo setting can be loud at 70 dB, lower settings are quieter, suitable for continuous use. Affordable filter replacements and a 5-year warranty add to its value, making the HPA300 a solid choice for reliable, no-frills air purification.`,
    specs: {
      dimensions: '22.38" H x 20.8" W x 10.83" D',
      weight: "17 lbs",
      filterType: "True HEPA + Activated Carbon",
      noiseLevel: "50-70 dB",
      powerConsumption: "120W",
      warranty: "5 years",
    },
    sideImage: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/AIRDOCTOR-AD5500i-Purifier-Concepts-UltraHEPA/dp/B0CPRDC2B2",
    description: "UltraHEPA filtration for extra large spaces with app control.",
    pros: [
      "UltraHEPA filter captures particles down to 0.003 microns",
      "Smart app control with air quality monitoring",
      "6 fan speeds for customization",
      "Whisper Jet fans 30% quieter",
      "Covers large spaces up to 2,086 sq ft",
    ],
    cons: ["High initial cost", "Expensive filter replacements", "Larger unit size"],
    fullReview: `The AIRDOCTOR AD5500i is a high-performance air purifier for extra-large spaces, covering up to 2,086 square feet. Its UltraHEPA filter captures 100% of particles as small as 0.003 microns, far surpassing standard HEPA filters, while dual-action carbon VOC filters tackle odors and gases. The smart app provides real-time air quality data and remote control, and the auto mode adjusts filtration based on the built-in particle sensor. With six fan speeds and Whisper Jet fans that are 30% quieter than competitors, it's versatile for homes, gyms, or offices. Though the initial cost and filter replacements are pricey, its advanced filtration and large coverage make it a top choice for those needing robust air purification.`,
    specs: {
      dimensions: '28.75" H x 16" W x 16" D',
      weight: "33 lbs",
      filterType: "UltraHEPA + Carbon VOC",
      noiseLevel: "30-59 dB",
      powerConsumption: "110W",
      warranty: "1 year",
    },
    sideImage: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/Molekule-Air-Pro-Purifier-Destruction/dp/B0BV8PDZ2K",
    description: "PECO-HEPA Tri-Power filter destroys pollutants at molecular level.",
    pros: [
      "PECO-HEPA Tri-Power filter destroys viruses and bacteria",
      "FDA-cleared for medical use",
      "Sleek aluminum design with app control",
      "Particle sensor for real-time monitoring",
      "Effective for high-traffic areas",
    ],
    cons: [
      "Very expensive initial cost",
      "High filter replacement costs",
      "No CADR rating available",
      "Larger footprint",
    ],
    fullReview: `The Molekule Air Pro redefines air purification with its innovative PECO-HEPA Tri-Power filter, which destroys pollutants like viruses, bacteria, and mold at the molecular level, rather than just trapping them. FDA-cleared for medical use, it's ideal for high-traffic areas up to 1,000 square feet. The particle sensor detects pollutants down to 0.3 microns, and the app provides real-time air quality data and control. Its sleek aluminum design adds a modern aesthetic, but the high price and costly filter replacements may deter some. Despite the lack of a CADR rating, its unique technology and effectiveness in destroying pollutants make it a premium choice for health-conscious users or professional settings.`,
    specs: {
      dimensions: '23" H x 14.25" W x 14.25" D',
      weight: "23 lbs",
      filterType: "PECO-HEPA Tri-Power + Carbon",
      noiseLevel: "39-62 dB",
      powerConsumption: "55W",
      warranty: "2 years",
    },
    sideImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/Rabbit-Air-SPA-1000N-filtration-Mountable/dp/B096NBKM7S",
    description: "6-stage filtration with wall-mount option and customizable panels.",
    pros: [
      "6-stage filtration for comprehensive cleaning",
      "Wall-mountable design saves floor space",
      "Customizable filter options for specific needs",
      "Ultra-quiet operation at 20.8 dB",
      "Stylish panel designs",
    ],
    cons: ["Lower CADR compared to competitors", "Higher price point", "Filter replacements can be costly"],
    fullReview: `The Rabbit Air SPA-1000N offers a unique blend of style and functionality with its 6-stage filtration system and wall-mountable design. Covering up to 815 square feet, it features customizable filters for pet allergies, germs, or toxins, making it versatile for various needs. The ultra-quiet operation, starting at 20.8 dB, is perfect for bedrooms or offices, and the customizable front panels add a decorative touch. While the CADR of 200 CFM is lower than some competitors, the comprehensive filtration and quiet performance make it ideal for those prioritizing aesthetics and flexibility. The 5-year warranty and durable build ensure long-term reliability, though filter costs should be considered.`,
    specs: {
      dimensions: '21.4" H x 19.8" W x 7" D',
      weight: "19 lbs",
      filterType: "6-stage customizable HEPA",
      noiseLevel: "20.8-45.6 dB",
      powerConsumption: "61W",
      warranty: "5 years",
    },
    sideImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=800&fit=crop",
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
    amazonUrl: "https://www.amazon.com/Alen-Purifier-BreatheSmart-Filter-Carbon/dp/B0F99GVM8V",
    description: "Heavy-duty HEPA filtration with lifetime warranty and customizable panels.",
    pros: [
      "Industry-leading lifetime warranty",
      "Smart sensors with auto mode",
      "Customizable panel colors for aesthetics",
      "WhisperMax technology for quiet operation",
      "High CADR of 350 CFM",
    ],
    cons: ["Premium price point", "Costly filter replacements", "Larger unit size"],
    fullReview: `The Alen BreatheSmart 75i is a premium air purifier designed for large spaces up to 1,300 square feet, with a CADR of 350 CFM. Its heavy-duty HEPA filter captures 99.97% of particles, and the WhisperMax technology ensures quiet operation, even at high speeds. Smart sensors adjust filtration automatically, and the customizable panel colors allow it to blend into any decor. The lifetime warranty is a standout feature, offering peace of mind for long-term use. While the initial cost and filter replacements are expensive, the combination of powerful performance, smart features, and aesthetic flexibility makes the BreatheSmart 75i a top choice for large homes or offices seeking reliable air purification.`,
    specs: {
      dimensions: '22" H x 17.75" W x 10" D',
      weight: "21 lbs",
      filterType: "HEPA-Pure (customizable)",
      noiseLevel: "25-49 dB",
      powerConsumption: "105W",
      warranty: "Lifetime",
    },
    sideImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
    topImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop",
  },
]

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Back Button */}
        <Link href="/reviews" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Reviews
        </Link>

        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <img src={review.image || "/placeholder.svg"} alt={review.name} className="w-full h-full object-cover" />
              <Badge className="absolute top-6 right-6 bg-cyan-500 text-white border-0 text-lg px-4 py-2">
                {review.category}
              </Badge>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-2 gap-4">
              
              
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-4">{review.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-inter text-2xl font-bold text-gray-700">{review.rating}</span>
              <span className="font-inter text-gray-500">/ 5.0</span>
            </div>

            {/* Price */}
            

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-4 border-cyan-100">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Home className="w-5 h-5 text-cyan-500" />
                  <span className="font-inter text-sm">Coverage</span>
                </div>
                <p className="font-poppins text-xl font-bold text-gray-900">{review.coverage}</p>
              </Card>
              <Card className="p-4 border-cyan-100">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Wind className="w-5 h-5 text-cyan-500" />
                  <span className="font-inter text-sm">CADR</span>
                </div>
                <p className="font-poppins text-xl font-bold text-gray-900">{review.cadr}</p>
              </Card>
            </div>

            <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">{review.description}</p>

            {/* Buy Button */}
            <Link href={review.amazonUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg px-8 py-6 w-full">
                Buy on Amazon
              </Button>
            </Link>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pros */}
          <Card className="p-8 border-green-100 bg-green-50/50">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900">Pros</h3>
            </div>
            <ul className="space-y-3">
              {review.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Cons */}
          <Card className="p-8 border-red-100 bg-red-50/50">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-gray-900">Cons</h3>
            </div>
            <ul className="space-y-3">
              {review.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-700">{con}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Full Review */}
        <Card className="p-8 md:p-12 mb-16">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-6">Full Review</h2>
          <div className="font-inter text-gray-700 leading-relaxed space-y-4 text-lg">
            {review.fullReview.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Card>

        {/* Technical Specifications */}
        <Card className="p-8 md:p-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(review.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="font-inter font-semibold text-gray-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="font-inter text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
