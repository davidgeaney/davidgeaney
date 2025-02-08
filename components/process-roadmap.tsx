"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessRoadmapProps {
  steps: ProcessStep[]
}

export default function ProcessRoadmap({ steps }: ProcessRoadmapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className="relative">
      {/* Progress Line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-border">
        <motion.div
          className="absolute top-0 w-full bg-primary"
          style={{
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        />
      </div>

      {/* Steps */}
      <div className="space-y-32">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-32"
          >
            <motion.div
              className="absolute left-0 flex h-24 w-24 items-center justify-center rounded-full bg-background border-2"
              whileInView={{ borderColor: "#000" }}
              initial={{ borderColor: "#e5e7eb" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl font-bold">{step.step}</span>
            </motion.div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground max-w-xl">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

