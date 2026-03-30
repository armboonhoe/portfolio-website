"use client"

import { Code2, BarChart3, BrainCircuit } from "lucide-react"

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications using React/Next.js, Vue/Nuxt 3, Node.js, and Supabase. From pixel-perfect interfaces to robust APIs deployed on AWS Amplify and Vercel.",
  },
  {
    icon: BarChart3,
    title: "SEO & MarTech",
    description:
      "Technical SEO optimization, Core Web Vitals tuning, GA4 analytics, BigQuery data pipelines, and automation tools (n8n, Make) that drive measurable business growth.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "LLM integrations (OpenAI, Claude, Gemini), RAG-powered chatbots, and AI-driven development workflows that transform ideas into intelligent, production-ready solutions.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left column */}
          <div>
            <p className="mb-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
              About
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Crafting at the intersection of code, data & intelligence
            </h2>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed text-muted-foreground">
              I am a Full-Stack Developer and SEO MarTech Engineer with 5+ years of
              experience building high-performance web applications using React.js/Next.js
              and Vue.js/Nuxt 3. I specialize in improving Lighthouse scores from 40 to 95+
              and boosting organic traffic through technical SEO.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Skilled in integrating AI platforms (LLMs, RAG) and automation workflows
              (n8n) to deliver scalable, data-driven digital solutions for businesses
              across travel, e-commerce, and service industries. I focus on delivering
              measurable outcomes with clean architecture and performance optimization.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-foreground/10 hover:shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                <item.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
