"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "CLASSCOVER",
    subtitle: "Substitute teacher booking app",
    description:
      "A comprehensive platform revolutionizing how schools connect with substitute teachers. Built with modern web technologies, ClassCover streamlines the entire process from booking to completion, featuring an intuitive dashboard for both schools and teachers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classcoverportfolioimg.jpg-LDceKwpUfLFH8xRmNtFJRcEY9aFeSh.jpeg",
    timeframe: "6 months",
    year: "2024",
    role: "Designer & Developer",
    deliverables: ["Web Application", "UI/UX Design", "Dashboard Interface", "Booking System"],
    website: "https://classcover.ie",
  },
  {
    id: 2,
    title: "APERTURE",
    subtitle: "Photography Portfolio",
    description:
      "A sophisticated photography portfolio website showcasing professional work through a minimalist design. The project focused on creating an immersive viewing experience while maintaining optimal performance for high-resolution images.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aperture-flameportfolioimg.jpg-10NSxaDRUNlqghZosKudiZGM632frc.jpeg",
    timeframe: "2 weeks",
    year: "2024",
    role: "Designer & Developer",
    deliverables: ["Website Design", "Gallery System", "Image Optimization", "Content Strategy"],
    website: "https://aperture-flame.vercel.app",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-24">
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-16">Selected Projects</h1>

        <div className="space-y-32">
          {projects.map((project) => (
            <div key={project.id} className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-lg text-muted-foreground font-sans uppercase tracking-wider">
                    {project.subtitle}
                  </div>
                  <h2 className="font-display text-4xl font-bold">{project.title}</h2>
                </div>

                <p className="text-lg text-muted-foreground font-sans">{project.description}</p>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t">
                  <div>
                    <div className="text-sm font-medium mb-2">Timeframe</div>
                    <div className="text-muted-foreground">{project.timeframe}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Year</div>
                    <div className="text-muted-foreground">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Role</div>
                    <div className="text-muted-foreground">{project.role}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-2">Deliverables</div>
                    <div className="text-muted-foreground">{project.deliverables.join(", ")}</div>
                  </div>
                </div>

                <Button asChild className="mt-4">
                  <Link href={project.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="rounded-lg w-full h-auto transition duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id === projects[0].id}
                  quality={90}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="border-t">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your next project? I&apos;m currently available for new opportunities and would love to
              hear about your ideas.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-lg font-medium hover:underline underline-offset-4"
            >
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

