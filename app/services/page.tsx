"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ProcessRoadmap from "@/components/process-roadmap"

const services = [
  {
    category: "Design",
    items: ["Web Design", "UI/UX Design", "Mobile App Design", "Brand Identity"],
  },
  {
    category: "Development",
    items: [
      "Web Development",
      "Frontend Development",
      "Built From Scratch",
    ],
  },
]

const process = [
  {
    step: 1,
    title: "Discovery",
    description: "Understanding your goals, audience, and unique challenges through in-depth consultation.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Developing a comprehensive plan that aligns with your objectives and timeline.",
  },
  {
    step: 3,
    title: "Design",
    description: "Creating intuitive, visually compelling solutions that engage and delight users.",
  },
  {
    step: 4,
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies.",
  },
  {
    step: 5,
    title: "Launch",
    description: "Thorough testing and refined deployment to ensure a smooth release.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="container py-24">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="text-sm text-muted-foreground mb-4">Explore the meaning embedded in focus</div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
              From concept to execution, our services are designed to set you apart.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 right-0"
          >
            <Link href="/contact" className="group inline-flex items-center gap-2 text-sm hover:text-primary">
              Start your project with me today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-24 mb-32">
          <ProcessRoadmap steps={process} />
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-medium mb-6">{service.category}</h2>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground">Let's discuss how we can help bring your vision to life.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-none bg-foreground px-8 py-3 text-lg font-medium text-background transition-colors hover:bg-foreground/90"
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

