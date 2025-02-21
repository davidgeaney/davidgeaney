"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do I need to have content ready before we start?",
    answer:
      "It’s helpful but not required. I can design around placeholder text, and if needed, I can assist with content.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the project size and complexity. A simple website can take around 1-2 weeks, while more complex projects can take longer.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes! Whether your site just needs a modern refresh or a complete rebuild, I can help improve both its design and functionality.",
  },
  {
    question: "What do I need to provide before we start?",
    answer: "Ideally, any branding materials (logo, colors, etc.), content (text, images), and an idea of what you want your site to achieve. If you don’t have these, I can help guide the process.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Hosting is included in the monthly plan. If you choose the lump sum payment option, hosting is available for an additional €25/month. I don’t provide domain registration directly, but I can recommend reliable providers and assist with setup.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website I build is fully responsive, meaning it looks and works great on all devices.",
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

