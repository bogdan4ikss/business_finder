import { ArrowRight, Check, Crown, Gauge, Layers3, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Бесплатно",
    description: "Чтобы познакомиться с сервисом и проверить первую нишу.",
    price: "0",
    period: "навсегда",
    icon: Sparkles,
    cta: "Начать бесплатно",
    featured: false,
    limits: ["10 поисковых запросов в месяц", "До 2 ниш", "1 город", "Базовые данные компаний"],
  },
  {
    name: "Lite",
    description: "Для фрилансеров и небольших команд с регулярным поиском.",
    price: "990",
    period: "в месяц",
    icon: Gauge,
    cta: "Выбрать Lite",
    featured: true,
    limits: ["300 поисковых запросов в месяц", "До 15 ниш", "До 10 городов", "ИИ-проверка и тексты откликов", "Экспорт найденных лидов"],
  },
  {
    name: "Pro",
    description: "Для агентств, которым нужен стабильный поток новых лидов.",
    price: "2 490",
    period: "в месяц",
    icon: Crown,
    cta: "Выбрать Pro",
    featured: false,
    limits: ["Безлимитные поисковые запросы", "Без ограничений по нишам", "Все города России", "Расширенная ИИ-аналитика", "Приоритетная поддержка"],
  },
]

export function PricingSection() {
  return (
    <section id="price" className="scroll-mt-28 bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-border pb-10 sm:pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Тарифы
              </span>
            </div>
            <h2 className="text-balance font-heading text-4xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Начните бесплатно.
              <span className="text-primary"> Растите без ограничений.</span>
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base lg:pb-1">
            Платите только тогда, когда бесплатных возможностей уже не хватает. Отменить подписку можно в любой момент.
          </p>
        </header>

        <div className="grid border-x border-b border-border md:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-[34rem] flex-col p-6 sm:p-8 md:p-6 lg:p-8 ${
                  index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                } ${plan.featured ? "bg-primary text-primary-foreground" : "bg-background text-foreground"}`}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary-foreground px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                    Выбирают чаще
                  </span>
                )}

                <span
                  className={`flex size-11 items-center justify-center rounded-2xl border ${
                    plan.featured
                      ? "border-primary-foreground/20 bg-primary-foreground/10"
                      : "border-border bg-muted text-primary"
                  }`}
                >
                  <Icon className="size-5" />
                </span>

                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-bold tracking-tight">{plan.name}</h3>
                  <p className={`mt-3 min-h-12 text-sm leading-relaxed ${plan.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end gap-2 border-b border-current/15 pb-8">
                  <span className="font-heading text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-5xl lg:text-6xl">
                    {plan.price}
                  </span>
                  <div className="pb-1">
                    <p className="font-heading text-lg font-bold">₽</p>
                    <p className={`text-xs ${plan.featured ? "text-primary-foreground/65" : "text-muted-foreground"}`}>
                      {plan.period}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex-1">
                  <p className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    Что входит
                  </p>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {plan.limits.map((limit) => (
                      <li key={limit} className="flex items-start gap-3 text-sm leading-snug">
                        <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${plan.featured ? "bg-primary-foreground text-primary" : "bg-primary/15 text-primary"}`}>
                          <Check className="size-3" strokeWidth={3} />
                        </span>
                        <span className={plan.featured ? "text-primary-foreground/85" : "text-foreground/80"}>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  variant={plan.featured ? "secondary" : "outline"}
                  className={`group mt-8 h-12 w-full justify-between rounded-full px-5 ${
                    plan.featured
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "border-foreground/20 hover:border-primary hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </article>
            )
          })}
        </div>

        <div className="flex flex-col gap-4 border-x border-b border-border bg-muted/40 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Layers3 className="size-4" />
            </span>
            <p className="text-sm text-muted-foreground">
              Нужны дополнительные лимиты для команды?
              <span className="font-semibold text-foreground"> Подберём индивидуальный тариф.</span>
            </p>
          </div>
          <Button variant="ghost" className="group w-fit shrink-0 px-0 text-foreground hover:bg-transparent hover:text-primary">
            Обсудить условия
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
