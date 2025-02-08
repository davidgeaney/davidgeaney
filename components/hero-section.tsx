"use client"
import * as framerMotion from "framer-motion"
import { useRef, useEffect } from "react"
import Link from "next/link"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { WireframeCube } from "@/components/wireframe-cube"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = framerMotion.useMotionValue(0)
  const mouseY = framerMotion.useMotionValue(0)
  const springX = framerMotion.useSpring(mouseX, { stiffness: 50, damping: 10 })
  const springY = framerMotion.useSpring(mouseY, { stiffness: 50, damping: 10 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))]">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="relative"
              style={{
                transform: `translate(${springX.get() * 10}px, ${springY.get() * 10}px)`,
              }}
            >
              <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* 3D Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WireframeCube />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent -z-10"
        style={{
          backgroundPosition: `${springX.get() * 100}% ${springY.get() * 100}%`,
        }}
      />

      {/* Content */}
      <div className="container relative flex min-h-screen items-center">
        <div className="max-w-4xl space-y-8">
          <framerMotion.motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Your Website,
            <br />
            Reimagined.
          </framerMotion.motion.h1>
          <framerMotion.motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[700px] text-xl text-muted-foreground font-sans"
          >
            Elevating digital experiences through innovative design and development. From concept to execution, we bring
            your vision to life with precision and creativity.
          </framerMotion.motion.p>
          <framerMotion.motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-none bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-none border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get in Touch
            </Link>
          </framerMotion.motion.div>
        </div>
      </div>
    </div>
  )
}

