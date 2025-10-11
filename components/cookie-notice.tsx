"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass rounded-2xl p-6 shadow-2xl relative">
            <button
              onClick={handleAccept}
              className="absolute top-4 right-4 text-secondary hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8">
              <h3 className="font-light text-lg mb-2">🍪 Cookies</h3>
              <p className="text-sm text-secondary mb-4 leading-relaxed">
                This website uses cookies to improve your experience and analyze site usage. By continuing, you consent
                to the use of cookies.
              </p>

              <Button
                onClick={handleAccept}
                className="w-full bg-primary hover:bg-primary/90 text-white glow-hover breathe"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
