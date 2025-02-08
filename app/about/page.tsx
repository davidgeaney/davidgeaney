"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your goals and vision through in-depth consultation.",
  },
  {
    title: "Design",
    description: "Crafting intuitive interfaces and seamless user experiences.",
  },
  {
    title: "Development",
    description: "Building responsive, fast, and scalable websites using modern technologies.",
  },
  {
    title: "Delivery",
    description: "Launching your project and ensuring it meets all requirements.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Websites That Work
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            I design and build clean, modern websites that focus on usability and aesthetics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">My Approach</h2>
            <p className="text-muted-foreground mb-4">
              My journey into web design and development started with a passion for creating and problem-solving. I
              taught myself to code during lockdown and quickly realized how powerful great design can be.
            </p>
            <p className="text-muted-foreground">
              I believe in simplicity, usability, and creating digital experiences that make a real impact. Whether it's
              a personal project or a business website, my goal is to bring ideas to life with clean design and
              thoughtful development.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">My Process</h2>
            <ul className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-3 shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <section className="border-t">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Have an interesting project? I'm always open to discussing new opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-lg font-medium hover:underline underline-offset-4"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

