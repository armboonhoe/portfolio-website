"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { CvPreviewButton } from "@/components/cv-preview"

const roles = [
  "Full-Stack Developer",
  "SEO MarTech Engineer",
  "AI Engineer",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-svh items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-sm tracking-widest uppercase text-muted-foreground">
            Welcome to my portfolio
          </p>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
            Building digital
            <br />
            experiences with
            <br />
            <span className="relative">
              <span className="text-foreground">precision</span>
              <span className="absolute -bottom-1 left-0 h-px w-full bg-foreground/20" />
            </span>
          </h1>

          <div className="mt-8 h-8 overflow-hidden">
            <p
              key={currentRole}
              className="animate-in fade-in slide-in-from-bottom-4 font-mono text-lg text-muted-foreground duration-500"
            >
              {roles[currentRole]}
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Full-Stack Developer and SEO MarTech Engineer with 5+ years of experience
            building high-performance web applications. Skilled in integrating AI platforms
            and automation workflows to deliver scalable, data-driven digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              View work
            </a>
            <CvPreviewButton />
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="https://github.com/armboonhoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/boonyawat-boonhoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:armboonhoe@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
