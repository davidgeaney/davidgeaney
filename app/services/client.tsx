// app/services/client.tsx
'use client'

import { ArrowRight, Palette, Layers, Smartphone, Fingerprint, Code2, Layout, Construction } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ProcessRoadmap from "@/components/process-roadmap"

const LucideIcon = ({ name, ...props }: { name: string; [key: string]: any }) => {
  const icons: { [key: string]: any } = {
    Palette,
    Layers,
    Smartphone,
    Fingerprint,
    Code2,
    Layout,
    Construction,
  }
  const Icon = icons[name]
  return Icon ? <Icon {...props} /> : null
}

interface ServicesClientProps {
  services: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
    }>;
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
  }>;
}

export default function ServicesClient({ services, process }: ServicesClientProps) {
  return (
    <div className="min-h-screen">
      <section className="container py-24">
        <div className="flex justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="text-sm text-muted-foreground mb-4">Websites Built for Growth</div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8">
              From planning to execution, every step is focused on business results.
            </h1>
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
              <h2 className="text-2xl font-medium mb-8">{service.category}</h2>
              <div className="grid gap-6">
                {service.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className="group flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-muted"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-background group-hover:border-primary">
                      <LucideIcon name={item.icon} className="h-6 w-6 group-hover:text-primary" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">{item.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
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

