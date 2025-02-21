import type { Metadata } from "next"
import ProjectsPage from "./projects-page"

export const metadata: Metadata = {
  title: "Projects | David Geaney",
  description: "Selected projects and case studies showcasing my web design and development work.",
}

export default function Page() {
  return <ProjectsPage />
}

