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
import { Button } from "@/components/ui/button"

const steps = [
  { number: "01", label: "Задаёте нишу", icon: Search },
  { number: "02", label: "ИИ проверяет", icon: Sparkles },
  { number: "03", label: "Получаете лид", icon: Send },
]

const mapPoints = [
  { left: "18%", top: "24%", active: false },
  { left: "74%", top: "19%", active: false },
  { left: "82%", top: "67%", active: false },
  { left: "24%", top: "74%", active: false },
  { left: "54%", top: "48%", active: true },
]

function SearchMap() {
  return (
    <div className="relative min-h-80 overflow-hidden rounded-[1.75rem] border border-company-line bg-company-map sm:min-h-96 lg:h-full">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--company-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--company-line)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full text-company-line"
        viewBox="0 0 600 430"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M-30 105C92 58 163 158 278 129S458 24 640 90" stroke="currentColor" strokeWidth="2" />
        <path d="M-45 315C112 231 170 370 316 289S500 214 644 274" stroke="currentColor" strokeWidth="2" />
        <path d="M111-24C147 86 66 191 157 277S233 392 208 470" stroke="currentColor" strokeWidth="2" />
        <path d="M451-28C397 80 494 176 407 247S345 368 398 468" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-company-line bg-company-panel/90 px-3 py-2 shadow-sm backdrop-blur-sm sm:left-7 sm:top-7">
        <Radar className="size-4 text-primary" />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-company-soft">
          Поиск активен
        </span>
      </div>

      {mapPoints.map((point, index) => (
        <div
          key={`${point.left}-${point.top}`}
          aria-hidden="true"
          className={`absolute -translate-x-1/2 -translate-y-1/2 ${point.active ? "z-20" : "z-10"}`}
          style={{ left: point.left, top: point.top }}
        >
          {point.active && (
            <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-primary/40" />
          )}
          <span
            className={`flex items-center justify-center rounded-full border shadow-sm ${
              point.active
                ? "size-11 border-primary bg-primary text-primary-foreground"
                : "size-7 border-company-line bg-company-panel text-company-soft"
            }`}
          >
            {point.active ? <Building2 className="size-4" /> : <span className="size-1.5 rounded-full bg-current" />}
          </span>
          {!point.active && <span className="sr-only">Точка компании {index + 1}</span>}
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 z-30 rounded-2xl border border-company-line bg-company-panel/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-auto sm:right-7 sm:w-72">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Building2 className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Студия мебели «Форма»</p>
              <p className="mt-0.5 text-xs text-company-soft">Казань · сайта нет</p>
            </div>
          </div>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-3.5" />
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-company-line pt-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-company-soft">Совпадение</span>
          <span className="font-heading text-sm font-bold text-primary">94%</span>
        </div>
      </div>
    </div>
  )
}

export function CompanySection() {
  return (
    <section id="company" className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
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

              <Button className="group mt-10 h-12 w-full justify-between rounded-full bg-foreground px-5 text-background hover:bg-foreground/90 sm:w-fit">
                Попробовать бесплатно
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </article>

            <SearchMap />

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
