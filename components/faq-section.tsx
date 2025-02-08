"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "Our design process begins with understanding your goals and requirements through in-depth consultation. We then move through research, wireframing, design, and development phases, with regular check-ins and feedback sessions throughout.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 1-2 weeks from start to finish. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! We offer both post-launch support and ongoing maintenance packages. Our MONTHLY plan includes continuous support and updates to ensure your project stays current and performs optimally.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, and Node.js.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Hosting is included in the monthly plan. If you choose the lump sum payment option, hosting is available for an additional €25/month. I don’t provide domain registration directly, but I can recommend reliable providers and assist with setup.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely! Every website I design is fully responsive, ensuring a seamless experience across all devices, from desktops to smartphones.",
  },
]

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <motion.div initial={false} className="border-b">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-6 text-left">
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h3>
        <p className="text-muted-foreground">Everything you need to know about our services and pricing.</p>
      </div>

      <div className="divide-y">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  )
}

