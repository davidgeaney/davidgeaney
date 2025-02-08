"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FaqSection from "@/components/faq-section"

const plans = [
  {
    name: "LUMP SUM",
    price: "€2,500",
    description: "Perfect for one-time projects with a defined scope.",
    features: [
      "Design And Development",
      "€25/mo Hosting",
      "€100 fee Per Page after 5",
      "+€50/mo Unlimited Edits Add-on",
      "+€250 To Add A Blog",
      "24/7 Support",
      "Lifetime Updates",
    ],
  },
  {
    name: "MONTHLY",
    price: "€150",
    period: "/mo",
    popular: true,
    description: "Ideal for ongoing projects requiring continuous updates.",
    features: [
      "Design And Development",
      "Includes Hosting",
      "€100 fee Per Page After 5",
      "+€250 To Add A Blog",
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="border-t">
      <div className="container py-24">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Pricing
          </Badge>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple & transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe great design should be accessible to all businesses, no matter the size.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-background border p-8"
            >
              {plan.popular && <Badge className="absolute -top-2 -right-2">Popular</Badge>}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="text-sm uppercase mb-4">Features</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => {
                    const isDisabled =
                      plan.name === "LUMP SUM" && (feature === "24/7 Support" || feature === "Lifetime Updates")
                    return (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        {isDisabled ? (
                          <X className="h-4 w-4 mt-1 shrink-0 text-destructive" />
                        ) : (
                          <Check className="h-4 w-4 mt-1 shrink-0" />
                        )}
                        <span className={isDisabled ? "text-muted-foreground" : ""}>{feature}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <Button className="w-full">Get started</Button>
            </motion.div>
          ))}
        </div>

        <FaqSection />
      </div>
    </section>
  )
}

