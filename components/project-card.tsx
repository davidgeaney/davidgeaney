"use client"
import Image from "next/image"
import Link from "next/link"
import * as framerMotion from "framer-motion"

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
  year: string
}

export default function ProjectCard({ title, subtitle, description, image, link, year }: ProjectCardProps) {
  return (
    <Link href={link} className="block w-full">
      <framerMotion.motion.div
        className="group relative w-full overflow-hidden bg-black"
        style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 hidden md:flex bg-gradient-to-t from-black/70 to-transparent p-6 flex-col justify-end">
          <div className="max-w-3xl">
            <div className="mb-2 text-white/80 font-sans text-sm uppercase tracking-wider">{subtitle}</div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm sm:text-base text-white/90 font-sans mb-4 max-w-xl line-clamp-2 sm:line-clamp-3">
              {description}
            </p>
            <div className="text-white/70 font-sans text-sm">{year}</div>
          </div>
        </div>
      </framerMotion.motion.div>
    </Link>
  )
}

