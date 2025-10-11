import { FeaturedReview } from "@/components/featured-review"
import { Comparison } from "@/components/comparison"
import { Testimonials } from "@/components/testimonials"
import { ReviewCards } from "@/components/review-cards"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F9FC] to-white">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold text-gray-900 mb-6">Air Purifier Reviews</h1>
          <p className="font-inter text-lg text-gray-600 leading-relaxed">
            Expert reviews and comprehensive comparisons to help you find the perfect air purifier for your needs.
          </p>
        </div>
      </section>

      <ReviewCards />

      {/* Featured Review Section */}
      <FeaturedReview />

      {/* Comparison Section */}
      <Comparison />

      {/* Testimonials Section */}
      <Testimonials />
    </main>
  )
}
