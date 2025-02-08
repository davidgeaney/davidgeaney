"use client"

import { useState } from "react"
import { CalendarDays } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [showCalendly, setShowCalendly] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission if needed
  }

  if (showCalendly) {
    return (
      <div className="text-center space-y-4">
        <h3 className="text-xl font-medium">Schedule a Meeting</h3>
        <p className="text-muted-foreground">
          Let&apos;s discuss your project in detail. Choose a time that works for you.
        </p>
        {/* Replace with your Calendly embed code */}
        <div
          className="calendly-inline-widget"
          data-url="YOUR_CALENDLY_URL"
          style={{ minWidth: "320px", height: "600px" }}
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" required />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <Input id="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea id="message" required />
      </div>
      <Button
        type="button"
        onClick={() => setShowCalendly(true)}
        className="w-full flex items-center justify-center gap-2"
      >
        <CalendarDays className="h-4 w-4" />
        Book a Call
      </Button>
    </form>
  )
}

