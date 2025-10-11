import Hero from "@/components/hero"
import WhyCleanAir from "@/components/why-clean-air"
import FilterTechnology from "@/components/filter-technology"
import ProductCategories from "@/components/product-categories"
import FeaturedReview from "@/components/featured-review"
import Comparison from "@/components/comparison"
import Testimonials from "@/components/testimonials"
import Blog from "@/components/blog"
import VideoReviews from "@/components/video-reviews"
import Newsletter from "@/components/newsletter"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CookieNotice from "@/components/cookie-notice"
import AirParticles from "@/components/air-particles"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AirParticles />
      <Hero />
      <WhyCleanAir />
      <FilterTechnology />
      <ProductCategories />
      <FeaturedReview />
      <Comparison />
      <Testimonials />
      <Blog />
      <VideoReviews />
      <Newsletter />
      <Contact />
      <Footer />
      <CookieNotice />
    </main>
  )
}
