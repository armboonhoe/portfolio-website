"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const socialLinks = [
  {
    label: "Phone",
    href: "tel:+66989248984",
    value: "098-924-8984",
    icon: Phone,
  },
  {
    label: "Email",
    href: "mailto:armboonhoe@gmail.com",
    value: "armboonhoe@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/armboonhoe",
    value: "github.com/armboonhoe",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/boonyawat-boonhoe",
    value: "linkedin.com/in/boonyawat-boonhoe",
    icon: Linkedin,
  },
]

type Status = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.")
        setStatus("error")
        return
      }

      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch {
      setErrorMsg("Failed to send. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2">

          {/* Left — CTA + form */}
          <div>
            <p className="mb-3 font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"Let's work together"}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Have a project in mind, want to collaborate, or just want to say hello?
              Drop a message and I will get back to you.
            </p>

            {status === "success" ? (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/40 p-5">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                <div>
                  <p className="font-medium text-foreground">Message sent!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out. I will reply as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-foreground/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-foreground/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-foreground/30"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3">
                    <AlertCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{errorMsg}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right — social links */}
          <div className="flex flex-col justify-start gap-6 md:pt-[4.5rem]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "nofollow noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-border pb-6 transition-colors last:border-b-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <link.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{link.label}</p>
                    <p className="truncate text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
