import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  ListChecks,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { MapBackground } from "@/components/MapBackground"

const steps = ["01", "02", "03"]

export function Hero() {
  return (
    <section className="relative isolate -mt-24 min-h-[calc(100svh+3rem)] overflow-hidden bg-background px-4 pt-32 pb-16 md:px-6 md:pt-36 md:pb-20 lg:px-10 lg:pt-40 lg:pb-24">
      {/* Фоновый градиент + карта (адаптируются под тему через opacity) */}
      <div className="absolute inset-0 -z-10">
        <MapBackground />
        <div className="absolute -top-24 -right-24 h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Левая колонка - контент */}
          <div className="relative pt-8">
            {/* Бейдж */}
            <div className="inline-flex animate-in duration-700 slide-in-from-top-5 fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur-sm">
                <Sparkles className="size-3.5" />
                Поиск клиентов с ИИ
                <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                  Beta
                </span>
              </span>
            </div>

            <h1 className="mt-6 font-heading text-4xl leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-[3.5rem]">
              Находите <br className="hidden sm:block" /> Бизнесы Без{" "}
              <br className="hidden sm:block" /> Сайта
              <br />
              <span className="relative mt-2 inline-block">
                <span className="relative z-10 text-primary">Первыми</span>
                <span className="absolute right-0 -bottom-0 left-0 h-3 rounded-full bg-primary/20 blur-sm" />
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground/90">
              easywork.find находит компании без сайта в вашем городе и с
              помощью ИИ готовит персональный текст отклика — остаётся только
              отправить.
            </p>

            {/* Кнопки */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="group h-12 rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
              >
                Попробовать бесплатно
                <Zap className="ml-2 size-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="ml-1 size-12 rounded-full border-2 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-md"
                aria-label="Узнать больше"
              >
                <ArrowUpRight className="size-5" />
              </Button>
            </div>
          </div>

          {/* Правая колонка - UI Дэшборд */}
          {/* Добавили z-10, чтобы блок перекрывал соседние элементы при вылете карточек */}
          <div className="relative z-10 mx-auto w-full max-w-xl rounded-[39px] lg:pt-10">
            {/* Основной контейнер карты */}
            {/* Заменили жесткие цвета на theme-aware, убрали белые кольца */}
            <div className="relative aspect-[4/3] rounded-[40px] border border-border/80 bg-gradient-to-br from-background/90 to-muted/80 shadow-2xl ring-1 ring-border/50 backdrop-blur-xl">
              {/* Карта и сетка */}
              <div className="relative h-full w-full pt-14">
                <div className="absolute inset-0">
                  <svg className="h-full w-full" viewBox="0 0 600 400">
                    <defs>
                      <pattern
                        id="dot-grid"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle
                          cx="2"
                          cy="2"
                          r="0.5"
                          fill="currentColor"
                          fillOpacity="0.06"
                        />
                      </pattern>
                      <linearGradient
                        id="road-grad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.15"
                        />
                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="0.03"
                        />
                      </linearGradient>
                    </defs>
                    {/* Цвета линий и точек теперь наследуются от темы */}
                    <rect width="100%" height="100%" fill="url(#dot-grid)" />

                    <g
                      fill="none"
                      stroke="url(#road-grad)"
                      strokeWidth="6"
                      strokeLinecap="round"
                    >
                      <path d="M -20 100 C 100 150, 180 80, 300 120 S 500 60, 620 140" />
                      <path d="M 50 350 C 150 280, 250 320, 350 250 S 550 350, 600 300" />
                      <path d="M 250 -10 C 260 80, 230 200, 300 300 S 380 380, 400 420" />
                      <path d="M 450 0 C 440 100, 480 180, 440 250 S 410 350, 430 420" />
                      <path d="M -10 230 C 80 220, 140 280, 200 260 S 280 200, 350 240" />
                    </g>

                    <circle
                      cx="350"
                      cy="180"
                      r="30"
                      fill="#22c55e"
                      fillOpacity="0.05"
                    />
                    <circle
                      cx="120"
                      cy="300"
                      r="45"
                      fill="#22c55e"
                      fillOpacity="0.04"
                    />
                  </svg>
                </div>

                {/* Зона с пульсирующей точкой (Центр) */}
                <div className="absolute top-[42%] left-[46%] z-10 flex flex-col items-center">
                  <span className="absolute size-16 animate-ping rounded-full bg-primary/20" />
                  <div className="relative flex size-8 items-center justify-center rounded-full bg-primary shadow-lg ring-4 shadow-primary/40 ring-background">
                    <Building2 className="size-4 text-primary-foreground" />
                  </div>
                  {/* Якорь под точкой (теперь адаптивный к теме) */}
                  <div className="mt-2 rounded-full bg-background/80 px-2.5 py-1 ring-1 ring-border/50 backdrop-blur-sm">
                    <span className="text-[10px] font-medium text-lime-500 dark:text-primary">
                      Мебель
                    </span>
                  </div>
                </div>

                {/* Ближайшие конкуренты / компании (Светлая тема) */}
                <div className="absolute top-[35%] left-[20%] flex flex-col items-center opacity-70 transition-opacity hover:opacity-100">
                  <div className="flex size-6 items-center justify-center rounded-full bg-muted ring-1 ring-border">
                    <div className="size-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  <span className="mt-1 text-[8px] text-muted-foreground">
                    Стройматериалы
                  </span>
                </div>
                <div className="absolute top-[60%] right-[30%] flex flex-col items-center opacity-70 transition-opacity hover:opacity-100">
                  <div className="flex size-6 items-center justify-center rounded-full bg-muted ring-1 ring-border">
                    <div className="size-2 rounded-full bg-muted-foreground/30" />
                  </div>
                  <span className="mt-1 text-[8px] text-muted-foreground">
                    Автосервис
                  </span>
                </div>
              </div>
            </div>

            {/* 
               ВЫНЕСЕННЫЕ ЭЛЕМЕНТЫ 
               Добавлено overflow-hidden и адаптивные цвета для светлой темы
            */}

            {/* Виджет статистики (Слева сверху) */}
            <div className="absolute -top-4 -left-4 z-20 max-w-[140px] overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-4 shadow-xl backdrop-blur-xl sm:-top-6 sm:-left-6">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <ListChecks className="size-3" /> Найдено
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  527
                </span>
                <span className="text-[10px] font-medium text-muted-foreground">
                  компаний
                </span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-[10px] text-lime-500 dark:text-primary">
                <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                Без сайта
              </div>
            </div>

            {/* Карточка компании (Слева снизу - вылетает влево и вниз) */}
            <div className="absolute -bottom-12 -left-4 z-20 w-[270px] overflow-hidden rounded-[24px] border border-border/60 bg-card/90 p-5 shadow-2xl shadow-foreground/10 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] sm:-left-10">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Building2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[14px] leading-tight font-semibold text-foreground">
                      ООО «Ромашка»
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      Производство мебели
                    </p>
                  </div>
                </div>
                <div className="rounded-full bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-500 ring-1 ring-green-500/20">
                  Найдено
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-3.5 text-green-500" />
                  <span className="text-[12px] text-foreground/80">
                    Сайт отсутствует
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-3.5 text-green-500" />
                  <span className="text-[12px] text-foreground/80">
                    Email найден
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-3.5 text-green-500" />
                  <span className="text-[12px] text-foreground/80">
                    Телефон найден
                  </span>
                </div>
              </div>

              <div className="my-4 h-px bg-border" />

              {/* Генерация ИИ */}
              <div className="flex items-center gap-1.5">
                {/* Текст с градиентом */}
                <span className="animate-gradient bg-gradient-to-r from-primary via-emerald-400 to-primary bg-[length:200%_auto] bg-clip-text text-[12px] font-medium text-transparent">
                  AI генерирует письмо
                </span>

                {/* Точки, появляющиеся по очереди */}
                <span className="inline-flex text-[12px] leading-none font-medium text-primary">
                  {/* Задержка 0ms */}
                  <span className="animate-dot">.</span>
                  {/* Задержка 200ms */}
                  <span className="animate-dot delay-[200ms]">.</span>
                  {/* Задержка 400ms */}
                  <span className="animate-dot delay-[400ms]">.</span>
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-primary to-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
