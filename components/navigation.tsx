"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Process" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 lg:p-10 transition-colors duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}>
        <Link href="/" className={cn(
          "text-xl md:text-2xl lg:text-3xl font-medium tracking-tight z-50 transition-colors duration-300",
          scrolled ? "text-black" : "text-black"
        )}>
          David Geaney
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative z-50 w-12 h-12 flex flex-col justify-center items-center rounded-full group hover:scale-110 transition-transform duration-200",
            scrolled ? "bg-black" : "bg-black"
          )}
          aria-label="Toggle Menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 transition-all duration-300 ease-out",
              scrolled ? "bg-white" : "bg-white",
              isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1",
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 transition-all duration-300 ease-out",
              scrolled ? "bg-white" : "bg-white",
              isOpen ? "-rotate-45" : "translate-y-1",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40"
          >
            <div className="h-full flex flex-col justify-center items-center">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-4xl font-light hover:font-normal transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

