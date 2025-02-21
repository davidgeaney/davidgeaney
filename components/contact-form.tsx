"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Here you would typically handle the form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="NAME"
            required
            className="w-full px-6 py-4 bg-white border text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="EMAIL"
            required
            className="w-full px-6 py-4 bg-white border text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="MESSAGE"
          required
          rows={5}
          className="w-full px-6 py-4 bg-white border text-sm rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-black resize-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "relative group rounded-full bg-black text-white w-[120px] h-[120px] flex items-center justify-center transition-transform hover:scale-105",
            isSubmitting && "opacity-50 cursor-not-allowed",
          )}
        >
          <div className="absolute inset-0 rounded-full bg-black transition-transform group-hover:scale-95" />
          <span className="relative text-xs uppercase tracking-wider font-medium">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </button>
      </div>
    </form>
  )
}

