import {
  ArrowUpRight,
  Building2,
  Check,
  MapPin,
  Radar,
  Search,
  Send,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  { number: "01", label: "Задаёте нишу", icon: Search },
  { number: "02", label: "ИИ проверяет", icon: Sparkles },
  { number: "03", label: "Получаете лид", icon: Send },
]

const pipelineSources = [
  { label: "Каталоги", value: "4 820", icon: Search },
  { label: "Справочники", value: "3 160", icon: Building2 },
  { label: "Соцсети", value: "2 740", icon: Send },
]

function LeadPipeline() {
  return (
    <div className="relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.75rem] border border-company-line bg-company-panel p-5 sm:p-7 lg:h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-company-soft">
            Поток данных
          </p>
          <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            От сигнала до готового лида
          </h3>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Sparkles className="size-5" />
        </span>
      </div>

      <div className="mt-7 grid gap-2 sm:grid-cols-3">
        {pipelineSources.map((source) => (
          <div key={source.label} className="flex items-center gap-3 rounded-2xl border border-company-line bg-company-shell p-3 sm:block">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-company-soft-surface text-primary">
              <source.icon className="size-4" />
            </span>
            <div className="min-w-0 sm:mt-4">
              <p className="truncate text-xs text-company-soft">{source.label}</p>
              <p className="mt-0.5 font-heading text-lg font-bold text-foreground">{source.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-company-line" />
        <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
          <Sparkles className="size-4" />
        </span>
        <span className="h-px flex-1 bg-company-line" />
      </div>

      <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-company-ink p-5 text-company-ink-foreground sm:p-6">
        <div aria-hidden="true" className="absolute right-5 top-5 font-mono text-[4.5rem] font-bold leading-none text-primary/10 sm:text-[6rem]">
          94
        </div>
        <div className="relative flex items-center justify-between gap-4">
          <span className="rounded-full border border-company-ink-foreground/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-company-ink-foreground/60">
            ИИ-проверка завершена
          </span>
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-4" />
          </span>
        </div>

        <div className="relative mt-8 flex items-end justify-between gap-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-company-ink-foreground/10 text-primary">
              <Building2 className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate font-heading text-base font-bold sm:text-lg">Студия мебели «Форма»</p>
              <p className="mt-1 text-xs text-company-ink-foreground/55">Нет сайта · есть контакты · Казань</p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <p className="font-heading text-3xl font-bold text-primary">94%</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-company-ink-foreground/45">совпадение</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CompanySection() {
  return (
    <section
      id="company"
      className="relative scroll-mt-28 bg-background px-4 py-20 before:pointer-events-none before:absolute before:inset-x-0 before:-top-24 before:h-24 before:bg-gradient-to-b before:from-transparent before:to-background sm:px-6 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Компания
              </span>
            </div>
            <h2 className="text-balance font-heading text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Превращаем офлайн-бизнес
              <span className="text-primary"> в новых клиентов</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base lg:pb-1">
            easywork.find помогает агентствам и фрилансерам первыми находить компании,
            которым нужен сайт, продвижение или автоматизация.
          </p>
        </header>

        <div className="overflow-hidden rounded-[2rem] border border-company-line bg-company-shell p-2 shadow-[0_24px_80px_-48px_var(--company-shadow)] sm:rounded-[2.5rem] sm:p-3">
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-[0.88fr_1.12fr] lg:grid-rows-[minmax(380px,1fr)_auto]">
            <article className="relative flex min-h-[410px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-company-panel p-6 sm:p-8 lg:min-h-0 lg:p-10">
              <div aria-hidden="true" className="absolute -right-14 -top-14 size-48 rounded-full border border-company-line" />
              <div aria-hidden="true" className="absolute -right-7 -top-7 size-28 rounded-full border border-primary/30" />

              <div className="relative">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-company-line bg-company-soft-surface text-primary">
                  <MapPin className="size-5" />
                </span>
                <p className="mt-10 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-company-soft">
                  Наша миссия
                </p>
                <h3 className="mt-4 text-balance font-heading text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl">
                  Хорошие проекты начинаются с точного совпадения
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-company-soft sm:text-base">
                  Мы убираем холодный поиск и ручную проверку. Сервис сам находит
                  подходящий бизнес, анализирует потребность и готовит повод для диалога.
                </p>
              </div>

              <Button
                nativeButton={false}
                render={<Link href="/register" />}
                className="group mt-10 h-12 w-full justify-between rounded-full bg-foreground px-5 text-background hover:bg-foreground/90 sm:w-fit"
              >
                Попробовать бесплатно
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </article>

            <LeadPipeline />

            <div className="grid gap-2 md:col-span-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <article className="rounded-[1.75rem] bg-company-panel p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-company-soft">
                    От запроса до контакта
                  </p>
                  <span className="rounded-full bg-primary/15 px-2.5 py-1 font-mono text-[10px] font-semibold text-primary">
                    3 минуты
                  </span>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-2">
                  {steps.map((step, index) => (
                    <div key={step.number} className="relative">
                      <div className="mb-3 flex items-center">
                        <span className="flex size-9 items-center justify-center rounded-xl bg-company-soft-surface text-primary">
                          <step.icon className="size-4" />
                        </span>
                        {index < steps.length - 1 && <span className="h-px flex-1 bg-company-line" />}
                      </div>
                      <span className="font-mono text-[9px] text-company-soft">{step.number}</span>
                      <p className="mt-1 text-xs font-semibold leading-snug text-foreground sm:text-sm">{step.label}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="flex min-h-48 flex-col justify-between rounded-[1.75rem] bg-primary p-6 text-primary-foreground sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] opacity-75">База</span>
                  <Radar className="size-5" />
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">12 000+</p>
                  <p className="mt-2 max-w-40 text-sm leading-snug opacity-80">компаний уже готовы к первому контакту</p>
                </div>
              </article>

              <article className="flex min-h-48 flex-col justify-between rounded-[1.75rem] bg-company-ink p-6 text-company-ink-foreground sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] opacity-60">География</span>
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight">Вся Россия</p>
                  <p className="mt-2 text-sm leading-snug opacity-60">Данные обновляются ежедневно</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
