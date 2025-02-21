"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#F5F5F3] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='%23E5E5E3' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight">
                A Website That Brings in Business.
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-2xl font-light">
                A well-built website isn’t an expense—it’s an investment.
                I design and develop websites that help businesses attract leads, convert customers, and grow.
              </p>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl font-light"></p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#E8E8E8] text-black px-6 py-3 rounded-lg text-lg md:text-xl hover:gap-4 transition-all duration-300"
              >
                Start your project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-8 bottom-8 flex flex-col items-center space-y-2">
        <span className="text-sm text-gray-500 rotate-90">scroll</span>
        <ArrowDown className="w-4 h-4 text-gray-500 animate-bounce" />
      </div>
    </div>
  )
}

