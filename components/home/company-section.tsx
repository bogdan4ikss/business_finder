"use client"

import { useRef } from "react"
import {
  MapPin,
  Sparkles,
  Globe,
  Users,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "12 000+", label: "Компаний без сайта", sub: "найдено в России" },
  { value: "94%", label: "Точность ИИ-анализа", sub: "релевантных откликов" },
  { value: "3 мин", label: "До первого контакта", sub: "от запуска поиска" },
]

const features = [
  {
    icon: Search,
    title: "Умный поиск",
    desc: "Сканируем 2ГИС, Яндекс Карты и открытые реестры — находим бизнесы, которых нет в интернете.",
  },
  {
    icon: Sparkles,
    title: "ИИ-отклик",
    desc: "Генерируем персональный текст под каждую компанию: отрасль, размер, город.",
  },
  {
    icon: TrendingUp,
    title: "Аналитика рынка",
    desc: "Показываем, сколько потенциальных клиентов в выбранной нише и регионе.",
  },
  {
    icon: Zap,
    title: "Быстрый старт",
    desc: "Не нужно настраивать ничего — первые лиды через 3 минуты после регистрации.",
  },
]

export function CompanySection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-border/60" />

      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            О компании
          </span>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">

          {/* Card 1 — Mission (tall, spans 2 rows on lg) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/70 bg-card p-8 sm:row-span-2 lg:row-span-2">
            {/* Background glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-700 group-hover:bg-primary/18" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                <Globe className="size-5 text-primary" />
              </div>

              <div>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Миссия
                </p>
                <h2 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
                  Находим клиентов,
                  <br />
                  <span className="text-primary">которых</span>
                  <br />
                  ещё нет в сети
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                easywork.find — первый российский B2B-сервис, который автоматически
                находит офлайн-бизнесы и помогает веб-студиям, агентствам и
                фрилансерам первыми предложить им своё решение.
              </p>
            </div>

            <div className="relative z-10 mt-8">
              <Button
                variant="outline"
                className="group/btn w-full justify-between rounded-2xl border-border/60 bg-background/50 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  <Users className="size-4 text-primary" />
                  Присоединиться к Beta
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Cards 2–4 — Stats */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7"
            >
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/6 blur-2xl transition-all duration-500 group-hover:bg-primary/12" />
              <p className="relative z-10 font-heading text-[2.6rem] font-bold leading-none tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="relative z-10 mt-2 text-sm font-semibold text-foreground/80">
                {stat.label}
              </p>
              <p className="relative z-10 mt-1 text-xs text-muted-foreground">
                {stat.sub}
              </p>
              <div className="relative z-10 mt-4 h-px w-12 bg-primary/50" />
            </div>
          ))}

          {/* Card 5 — Feature grid (full width on lg) */}
          <div className="rounded-3xl border border-border/70 bg-card p-7 sm:col-span-2 lg:col-span-2">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Как это работает
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <f.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {f.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6 — Geo accent */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/70 bg-primary/5 p-7 sm:col-span-2 lg:col-span-1 lg:row-start-auto">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-primary)/0.12,transparent_70%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-xl font-bold leading-snug text-foreground">
                  Любой город
                  <br />
                  России
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Москва, Санкт-Петербург, регионы — база обновляется ежедневно.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Обновляется в реальном времени
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
