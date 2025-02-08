"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import * as framerMotion from "framer-motion"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="text-lg font-medium tracking-tight">
          david geaney
        </Link>
        <div className="flex gap-8">
          {["about", "projects", "process", "contact"].map((item) => (
            <Link
              key={item}
              href={`/${item === "process" ? "services" : item}`}
              className={cn(
                "relative text-sm tracking-tight transition-colors hover:text-primary",
                pathname === `/${item === "process" ? "services" : item}` && "text-primary",
              )}
            >
              {pathname === `/${item === "process" ? "services" : item}` && (
                <framerMotion.motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full block h-px w-full bg-primary"
                />
              )}
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

