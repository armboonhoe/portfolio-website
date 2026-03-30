import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    category: "AI / SEO Tool",
    title: "AI SEO Content Generator",
    company: "ANGA Bangkok",
    description:
      "AI-powered content generation platform that produces E-E-A-T optimized outlines and full articles using ChatGPT and Gemini APIs. Integrated with the agency's internal workflow to accelerate content production at scale.",
    tags: ["Next.js", "OpenAI API", "Gemini API", "E-E-A-T"],
    url: null,
  },
  {
    category: "MarTech / Automation",
    title: "Budget Alert System",
    company: "ANGA Bangkok",
    description:
      "Automated budget monitoring system integrated with Google Ads and Facebook Ads APIs. Tracks underspend, overspend, and on-track status across both platforms with scheduled reporting via GitHub Actions cron jobs and role-based access control.",
    tags: ["Google Ads API", "Facebook Ads API", "GitHub Actions", "Node.js"],
    url: null,
  },
  {
    category: "CRM / Internal Tool",
    title: "Clinic CRM System",
    company: "CherCode (client project)",
    description:
      "Full-featured CRM built for a healthcare clinic. Includes patient management, appointment booking, coupon and promotion system, and role-based access control. Real-time LINE Notification alerts for new bookings and status updates.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "LINE API"],
    url: null,
  },
  {
    category: "Agency Website",
    title: "CherCode Digital Agency",
    company: "CherCode",
    description:
      "Company website for a digital agency offering Next.js websites, AI chatbots with RAG architecture integrated with LINE OA, and n8n automation workflows. Lighthouse score 90+ across all pages.",
    tags: ["Next.js", "Claude API", "RAG", "n8n", "Make"],
    url: "https://chercode.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Projects
        </p>
        <h2 className="mb-16 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Selected work
        </h2>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid gap-4 border-t border-border py-8 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <div className="pt-1">
                <p className="font-mono text-xs tracking-wide text-muted-foreground">
                  {project.category}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground/60">
                  {project.company}
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-foreground">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
                    >
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
