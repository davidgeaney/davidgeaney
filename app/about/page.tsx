"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          />
        </motion.div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">About David</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">17 Year Old UI/UX Developer From Donegal</p>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10 rounded-3xl transform rotate-3" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageofme.jpg-U6RH76aSCeiwKZDHbPUSl7TSyEVhOd.jpeg"
                alt="David Geaney"
                width={600}
                height={600}
                className="rounded-2xl shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Web Design Focused on Results</h2>
              <p className="text-lg text-muted-foreground">
                My journey into web design began during lockdown when I started teaching myself how to code. Eventually,
                as I got better at designing and building websites, I figured I might as well reach out to local
                businesses and offer my help.
              </p>
              <p className="text-lg text-muted-foreground">
                As I began reaching out to local businesses, I quickly noticed how many of them had outdated or poorly
                designed websites—or, even worse, no website at all. I realised that a bad website can do more harm than
                good, and in today’s world, not having one is like being invisible.
              </p>
              <p className="text-lg text-muted-foreground">
                I want to make sure your website not only looks good but also serves its purpose—whether it’s attracting
                new clients, showcasing your work, or making it easy for people to contact you. My goal is to help you
                make an impact online.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            My Approach
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Straightforward Design",
                description: "I keep things simple—no bs, just practical design that works for you and your audience.",
              },
              {
                title: "Functional Design",
                description:
                  "I believe a website should be simple and easy to use, without sacrificing style. My goal is to make every interaction smooth for your visitors.",
              },
              {
                title: "Built To Last",
                description:
                  "I focus on creating websites that are solid, easy to maintain, and built with long-term success in mind—so you don’t have to worry about your site breaking down over time.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                className="group relative p-8 rounded-xl bg-background/50 hover:bg-background transition-all duration-500 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Work With Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Direct Communication",
                description:
                  "No middlemen, no fluff—you talk to me, and we get things done without unnecessary delays.",
              },
              {
                title: "Straightforward, Effective Design",
                description:
                  "No overcomplicated fluff. I focus on clean, functional websites that look great and actually serve a purpose—whether that’s bringing in clients or showcasing your work.",
              },
              {
                title: "Designed to Work for You",
                description: "A website isn’t just about looking good; it should actually help your business grow.",
              },
              {
                title: "Fair Pricing, No Nonsense",
                description:
                  "I keep pricing simple and transparent. No hidden costs, no unnecessary add-ons—just quality work at a fair price.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-xl bg-background hover:bg-muted/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              If you’re a small business wanting to get online or a bigger company needing a fresh look, I’m here to
              help turn your ideas into reality.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

