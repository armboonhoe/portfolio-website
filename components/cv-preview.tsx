"use client"

import { FileText, Download, Mail, Phone, Github, Linkedin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const cv = {
  name: "Boonyawat Boonhoe",
  title: "Full-Stack Developer / SEO MarTech Engineer",
  contact: {
    phone: "098-924-8984",
    email: "armboonhoe@gmail.com",
    linkedin: "linkedin.com/in/boonyawat-boonhoe",
    github: "github.com/armboonhoe",
  },
  summary:
    "Full-Stack Developer and SEO MarTech Engineer with 5+ years of experience building high-performance web applications using React.js/Next.js and Vue.js/Nuxt 3. Specializes in improving Lighthouse scores from 40 to 95+ and boosting organic traffic through technical SEO. Skilled in integrating AI platforms (LLMs, RAG) and automation workflows (n8n) to deliver scalable, data-driven digital solutions.",
  skills: [
    { category: "Front-end", items: "JavaScript, TypeScript, React/Next.js, Vue/Nuxt 3, Tailwind CSS" },
    { category: "Back-end", items: "Node.js, Supabase, PostgreSQL" },
    { category: "SEO & Analytics", items: "Technical SEO, GA4, BigQuery, Search Console, Core Web Vitals" },
    { category: "AI & Automation", items: "OpenAI API, Claude API, Gemini API, RAG, n8n, Make" },
    { category: "Cloud & DevOps", items: "AWS Amplify, Vercel, Google Cloud, Docker, GitHub Actions" },
  ],
  experience: [
    {
      role: "SEO & MarTech Engineer",
      company: "ANGA Bangkok (SEO Agency)",
      period: "Jul 2025 – Present",
      highlights: [
        "Built an AI-powered SEO Content Generator with E-E-A-T optimization using ChatGPT and Gemini APIs",
        "Developed a Budget Alert System integrated with Google Ads API and Facebook Ads API",
        "Deployed Next.js applications on AWS Amplify achieving 99.9% uptime and Lighthouse 95+",
        "Managed bulk Google Search Console data using BigQuery for large-scale SEO analysis",
      ],
    },
    {
      role: "Founder & Developer",
      company: "CherCode",
      period: "2025 – Present",
      highlights: [
        "Founded a digital agency delivering Next.js websites, AI chatbots, CRM systems, and automation workflows",
        "Built AI chatbots with RAG architecture integrated with LINE OA, reducing response time by 70%",
        "Created a Clinic CRM with Supabase/PostgreSQL featuring patient management and LINE notifications",
      ],
    },
    {
      role: "Front-end Developer",
      company: "Gother (Travel Booking Platform)",
      period: "Feb 2024 – Jun 2025",
      highlights: [
        "Built a travel booking web app with React.js/Next.js featuring real-time flight and hotel search",
        "Implemented SSR for SEO-optimized landing pages, increasing organic traffic by 35%",
        "Integrated GA4 event tracking, improving booking funnel conversion by 25%",
        "Optimized Lighthouse performance score from 45 to 90+",
      ],
    },
    {
      role: "Front-end Developer",
      company: "Freelance",
      period: "May 2020 – Jan 2024",
      highlights: [
        "Developed web applications using Vue.js/Nuxt 3 and React.js/Next.js",
        "Implemented state management with Pinia, skeleton loading UI, and i18n support",
        "Built and customized WordPress websites including theme development",
        "Applied on-page SEO techniques to improve search rankings",
      ],
    },
  ],
  education: {
    school: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    degree: "Bachelor's Degree",
  },
  languages: "Thai (Native), English",
}

export function CvPreviewButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
          <FileText className="h-4 w-4" />
          Preview CV
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto p-6 sm:p-8 lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="sr-only">CV Preview</DialogTitle>
        </DialogHeader>

        {/* Header */}
        <div className="border-b border-border pb-6 lg:pb-8">
          <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">{cv.name}</h2>
          <p className="mt-1 font-mono text-sm text-muted-foreground lg:mt-2 lg:text-base">{cv.title}</p>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground lg:mt-4 lg:gap-6">
            <a href="tel:+66989248984" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Phone className="h-3.5 w-3.5" />
              {cv.contact.phone}
            </a>
            <a href={`mailto:${cv.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="h-3.5 w-3.5" />
              {cv.contact.email}
            </a>
            <a href={`https://${cv.contact.linkedin}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a href={`https://${cv.contact.github}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-6 pt-2 lg:space-y-8 lg:pt-4">
          <section>
            <h3 className="mb-2 font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground lg:mb-3 lg:text-sm">Summary</h3>
            <p className="text-sm leading-relaxed text-foreground/80 lg:text-base lg:leading-7">{cv.summary}</p>
          </section>

          {/* Skills */}
          <section>
            <h3 className="mb-3 font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground lg:mb-4 lg:text-sm">Technical Skills</h3>
            <div className="space-y-2 lg:space-y-3">
              {cv.skills.map((skill) => (
                <div key={skill.category} className="flex gap-2 text-sm lg:text-base">
                  <span className="shrink-0 font-medium text-foreground">{skill.category}:</span>
                  <span className="text-foreground/70">{skill.items}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="mb-3 font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground lg:mb-4 lg:text-sm">Experience</h3>
            <div className="space-y-5 lg:space-y-6">
              {cv.experience.map((exp) => (
                <div key={exp.company}>
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground lg:text-base">{exp.role}</p>
                      <p className="text-sm text-muted-foreground lg:text-base">{exp.company}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground lg:text-sm">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 lg:mt-3 lg:space-y-1.5">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/70 lg:text-base">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40 lg:mt-2 lg:h-1.5 lg:w-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="mb-2 font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground lg:mb-3 lg:text-sm">Education</h3>
            <p className="text-sm font-medium text-foreground lg:text-base">{cv.education.degree}</p>
            <p className="text-sm text-muted-foreground lg:text-base">{cv.education.school}</p>
          </section>

          {/* Languages */}
          <section>
            <h3 className="mb-2 font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground lg:mb-3 lg:text-sm">Languages</h3>
            <p className="text-sm text-foreground/70 lg:text-base">{cv.languages}</p>
          </section>

          {/* Download */}
          <div className="border-t border-border pt-4 lg:pt-6">
            <a
              href="/CV_Boonyawat_Boonhoe.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80 lg:px-6 lg:py-3 lg:text-base"
            >
              <Download className="h-4 w-4 lg:h-5 lg:w-5" />
              Download PDF
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
