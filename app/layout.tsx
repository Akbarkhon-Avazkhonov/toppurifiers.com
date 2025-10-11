import type React from "react"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const poppins = Poppins({
  weight: ["200", "300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "TopPurifiers - Clean Air. Clean Life.",
  description: "Top air purifiers of 2025 — tests, reviews, comparisons.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
