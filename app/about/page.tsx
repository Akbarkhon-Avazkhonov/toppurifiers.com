export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F9FC] to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-gray-900 mb-6">About TopPurifiers</h1>
            <p className="font-inter text-xl text-gray-600 leading-relaxed">
              Your trusted source for honest, in-depth air purifier reviews and comparisons
            </p>
          </div>

          {/* Mission Section */}
          <div className="glass-card p-8 md:p-12 mb-8 rounded-3xl">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-6">Our Mission</h2>
            <p className="font-inter text-lg text-gray-700 leading-relaxed mb-4">
              At TopPurifiers, we believe everyone deserves to breathe clean, healthy air. Our mission is to help you
              make informed decisions about air purification by providing comprehensive, unbiased reviews and expert
              guidance.
            </p>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              We test and evaluate air purifiers based on real-world performance, not just manufacturer claims. Our team
              of experts analyzes filtration efficiency, noise levels, energy consumption, and overall value to give you
              the complete picture.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="glass-card p-8 md:p-12 mb-8 rounded-3xl">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-6">What We Do</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Independent Testing</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">
                    We purchase and test air purifiers ourselves to ensure completely unbiased reviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Data-Driven Analysis</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">
                    Our reviews are backed by scientific testing and real-world performance data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">
                    We provide educational content to help you understand air quality and purification technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">Community Support</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">
                    We listen to our readers and continuously update our content based on your feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h2 className="font-poppins font-semibold text-3xl text-gray-900 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Transparency</h3>
                <p className="font-inter text-sm text-gray-600">
                  We disclose our testing methods and any affiliate relationships
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Objectivity</h3>
                <p className="font-inter text-sm text-gray-600">
                  Our reviews are based on facts and data, not marketing hype
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Integrity</h3>
                <p className="font-inter text-sm text-gray-600">We prioritize your health and trust above all else</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
