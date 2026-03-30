const skillCategories = [
  {
    category: "Front-end",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Nuxt 3", "Tailwind CSS"],
  },
  {
    category: "Back-end",
    skills: ["Node.js", "Supabase", "PostgreSQL"],
  },
  {
    category: "SEO & Analytics",
    skills: ["Technical SEO", "Google Analytics 4", "Google BigQuery", "Search Console"],
  },
  {
    category: "AI & Automation",
    skills: ["OpenAI API", "Claude API", "Gemini API", "RAG", "n8n", "Make", "AI-driven Development"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS Amplify", "Vercel", "Google Cloud", "Docker", "GitHub Actions"],
  },
  {
    category: "Others",
    skills: ["WordPress", "Git", "JIRA", "ClickUp"],
  },
]

export function SkillsSection() {
  return (
    <section className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Skills
        </p>
        <h2 className="mb-16 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technologies & tools
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="mb-4 font-mono text-xs font-medium tracking-widest uppercase text-foreground">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
