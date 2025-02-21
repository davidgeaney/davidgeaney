// app/services/page.tsx
import ServicesClient from './client'

export const metadata = {
  title: 'Services | David Geaney',
  description: 'Web design and development services focused on business results.',
}

const services = [
  {
    category: "Design",
    items: [
      { name: "Web Design", icon: "Palette" },
      { name: "Mobile App Design", icon: "Smartphone" },
      { name: "Brand Identity", icon: "Fingerprint" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Web Development", icon: "Code2" },
      { name: "Frontend Development", icon: "Layout" },
      { name: "Built From Scratch", icon: "Construction" },
    ],
  },
]

const process = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by understanding what makes your business unique—your goals, audience, and challenges. This helps shape a website that truly fits your needs.",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "With a clear direction in mind, we outline a plan that balances functionality, design, and performance, ensuring everything aligns with your objectives.",
  },
  {
    step: 3,
    title: "Design",
    description:
      "This is where ideas take shape. I create a clean, intuitive layout that not only looks great but also enhances user experience.",
  },
  {
    step: 4,
    title: "Development",
    description:
      "Every website I build is crafted from scratch—no bloated templates, just clean, efficient code designed for speed, scalability, and seamless performance.",
  },
  {
    step: 5,
    title: "Launch",
    description:
      "Before going live, I test every detail to make sure everything runs perfectly—so you can launch with confidence.",
  },
]

export default function ServicesPage() {
  return <ServicesClient services={services} process={process} />
}

