"use client"

import { useState } from "react"
import { ArrowRight, Mail, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Обратная связь
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Напишите нам —{" "}
            <span className="text-primary">ответим быстро</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Есть вопрос, предложение или хотите обсудить условия для команды?
            Заполните форму или напишите напрямую.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">
          {/* Form */}
          <div className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center gap-4 text-center">
                <span className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Mail className="size-7" />
                </span>
                <div>
                  <p className="font-heading text-xl font-bold text-foreground">
                    Сообщение отправлено
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Мы свяжемся с вами в течение рабочего дня.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2"
                  onClick={() => {
                    setSent(false)
                    setFormState({ name: "", email: "", subject: "", message: "" })
                  }}
                >
                  Отправить ещё
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cf-name"
                      className="text-xs font-medium text-muted-foreground"
                    >
                      Имя
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ваше имя"
                      value={formState.name}
                      onChange={handleChange}
                      className="h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/60 transition-shadow"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cf-email"
                      className="text-xs font-medium text-muted-foreground"
                    >
                      Электронная почта
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/60 transition-shadow"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-subject"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Тема
                  </label>
                  <select
                    id="cf-subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="h-11 rounded-xl border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/60 transition-shadow"
                  >
                    <option value="" disabled>
                      Выберите тему
                    </option>
                    <option value="feedback">Общая обратная связь</option>
                    <option value="bug">Сообщить о проблеме</option>
                    <option value="team">Тарифы для команды</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cf-message"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Расскажите подробнее..."
                    value={formState.message}
                    onChange={handleChange}
                    className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring/60 transition-shadow leading-relaxed"
                  />
                </div>

                <Button type="submit" className="mt-1 h-11 rounded-xl text-sm font-semibold">
                  Отправить сообщение
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Contact info cards */}
            <div className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-sm sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <MessageSquare className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Поддержка</p>
                  <p className="text-xs text-muted-foreground">Ответим в течение дня</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/40 px-4 py-3">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                      support@easywork.find
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-muted/40 px-4 py-3">
                  <MessageSquare className="size-4 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Telegram
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                      @easyfinder_support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise offer card */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-company-ink p-6 text-company-ink-foreground shadow-sm sm:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 font-heading text-[7rem] font-bold leading-none text-primary/8 select-none"
              >
                Pro
              </div>
              <span className="relative inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                <Users className="size-3" />
                Для команд
              </span>
              <p className="relative mt-5 font-heading text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                Нужны дополнительные лимиты для команды?
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-company-ink-foreground/65">
                Подберём индивидуальный тариф с расширенными лимитами запросов,
                несколькими рабочими местами и приоритетной поддержкой.
              </p>
              <Button
                variant="outline"
                className="relative mt-6 h-10 rounded-xl border-company-ink-foreground/20 bg-company-ink-foreground/8 text-sm font-semibold text-company-ink-foreground hover:bg-company-ink-foreground/15 hover:text-company-ink-foreground"
              >
                Обсудить условия
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
