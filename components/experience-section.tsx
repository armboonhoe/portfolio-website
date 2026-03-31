import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "Full-Stack Developer",
    company: "ANGA Bangkok (SEO Agency)",
    url: "https://anga.co.th/",
    description:
      "Built an AI-powered SEO Content Generator with E-E-A-T optimization using ChatGPT and Gemini APIs. Developed a Budget Alert System integrated with Google Ads and Facebook Ads APIs with GitHub Actions cron jobs. Deployed Next.js apps on AWS Amplify with 99.9% uptime and Lighthouse 95+ scores. Managed bulk Search Console data using BigQuery for large-scale SEO analysis.",
    tags: ["Next.js", "AWS Amplify", "OpenAI", "Gemini", "BigQuery", "GitHub Actions"],
  },
  {
    period: "2025 — Present",
    role: "Founder & Developer",
    company: "CherCode",
    url: "https://chercode.com/",
    description:
      "Founded a digital agency delivering Next.js websites, AI chatbots, CRM systems, and automation workflows for SMEs. Built AI chatbots with RAG architecture integrated with LINE OA, reducing client response time by 70%. Created a clinic CRM with Supabase/PostgreSQL featuring patient management, appointment booking, coupon system, and LINE Notification.",
    tags: ["Next.js", "Supabase", "OpenAI", "Claude API", "n8n", "LINE API"],
  },
  {
    period: "Feb 2024 — Jun 2025",
    role: "Front-end Developer",
    company: "Gother (Travel Booking Platform)",
    url: "https://www.gother.com/th-th",
    description:
      "Built a travel booking web app with React.js/Next.js featuring real-time flight and hotel search with dynamic pricing. Implemented SSR for SEO-optimized pages, increasing organic traffic by 35%. Integrated GA4 and conversion tracking, improving booking funnel by 25%. Optimized Lighthouse from 45 to 90+.",
    tags: ["React", "Next.js", "Zustand", "GA4", "i18n", "SSR"],
  },
  {
    period: "May 2020 — Jan 2024",
    role: "Front-end Developer",
    company: "Freelance",
    url: "#",
    description:
      "Developed and maintained web applications using Vue.js/Nuxt 3 and React.js/Next.js. Implemented state management with Pinia, skeleton loading, and multi-language support. Built and customized WordPress websites including theme development and maintenance. Applied SEO techniques to improve website ranking and visibility.",
    tags: ["Vue.js", "Nuxt 3", "React", "Next.js", "WordPress", "SEO"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Experience
        </p>
        <h2 className="mb-16 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Where I have worked
        </h2>

        <div className="flex flex-col gap-0">
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.url}
              {...(exp.url !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group grid gap-4 border-t border-border py-8 transition-colors first:border-t-0 hover:bg-muted/30 md:grid-cols-[200px_1fr] md:gap-8 md:rounded-xl md:px-6"
            >
              <p className="font-mono text-xs tracking-wide text-muted-foreground pt-1">
                {exp.period}
              </p>
              <div>
                <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold text-foreground">
                  <span>{exp.role}</span>
                  <span className="text-muted-foreground">{"·"}</span>
                  <span className="text-muted-foreground">{exp.company}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
