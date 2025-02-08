import HeroSection from "@/components/hero-section"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import PricingSection from "@/components/pricing-section"

const projects = [
  {
    id: 1,
    title: "CLASSCOVER",
    subtitle: "Substitute teacher booking app",
    description:
      "Connect schools with qualified substitute teachers instantly. Streamline scheduling, reduce administrative work, and ensure classrooms are never left without instruction.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/classcoverimg-PlVB6MRt8XM9kHFHd6H2pOn3kKCrAs.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: 2,
    title: "APERTURE",
    subtitle: "Photography Portfolio",
    description:
      "Capturing life through the lens. A sophisticated photography portfolio showcasing timeless images that tell unique stories through portrait, event, and fine art photography.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aperture-flameimg-i8kNcyLHTR9Ws3mjMQitBOcFmV70xI.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: 3,
    title: "PROPLUMB",
    subtitle: "Plumbing Company",
    description:
      "Expert plumbing solutions for your home. Professional services that keep your systems running smoothly, available 24/7 for all your emergency needs.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proplumbimg.PNG-UOc0gB7PZVbm2rNYkirY2hfJowNUqA.png",
    link: "/projects",
    year: "2024",
  },
  {
    id: 4,
    title: "STRAND ROAD",
    subtitle: "Bar & Kitchen",
    description:
      "Experience the fusion of Donegal's finest ingredients and innovative culinary techniques, set against the backdrop of Falcarragh's stunning coastline.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/strandimg1.PNG-KWCZTuMenEjsI1QQltBtt7URaLnMGB.png",
    link: "/projects",
    year: "2024",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <section id="projects" className="py-12 w-full">
        <div className="container space-y-12 md:space-y-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <PricingSection />

      <section id="contact" className="border-t">
        <div className="container py-24">
          <h2 className="font-display text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-16">
            LET&apos;S WORK TOGETHER
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Details</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:davidgeaney888@gmail.com" className="hover:underline">
                      davidgeaney888@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:+1234567890" className="hover:underline">
                      +353 (083) 379 3342
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Donegal, Ireland
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/davidgeaneyyy/" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61556575216646" className="text-muted-foreground hover:text-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

