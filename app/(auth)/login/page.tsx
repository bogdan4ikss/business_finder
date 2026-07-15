"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

import { AuthCheckbox } from "@/components/auth/auth-checkbox"
import { AuthPanel } from "@/components/auth/auth-panel"

const fieldClass =
  "h-12 w-full rounded-2xl border border-auth-line bg-auth-field px-4 text-sm text-foreground shadow-sm transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/10"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthPanel
      imagePosition="right"
      imageSrc="/images/auth-login-panel.png"
      imageAlt="Цифровая структура города с найденными компаниями"
      panelLabel="Рабочее пространство"
      panelHeadline="Ваши новые лиды уже ждут внутри."
      panelSub="Вернитесь к сохранённым нишам, продолжите поиск и экспортируйте готовую базу для команды."
    >
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Продолжить работу</p>
        <h1 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Войти в аккаунт</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Впервые в EasyFinder?{" "}
          <Link href="/register" className="font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary">
            Создать аккаунт
          </Link>
        </p>
      </div>

      <form className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="login-email" className="text-xs font-semibold text-foreground">Email</label>
          <input id="login-email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} required />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="login-password" className="text-xs font-semibold text-foreground">Пароль</label>
            <a href="mailto:support@easywork.find?subject=Восстановление%20пароля" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">Забыли пароль?</a>
          </div>
          <div className="relative">
            <input id="login-password" type={showPassword ? "text" : "password"} autoComplete="current-password" placeholder="Введите пароль" className={`${fieldClass} pr-12`} required />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground" aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}>
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <AuthCheckbox name="remember">
          Запомнить меня на этом устройстве
        </AuthCheckbox>

        <button type="submit" className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25">
          Войти
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>

      <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <span className="h-px flex-1 bg-auth-line" />
        Безопасный вход
        <span className="h-px flex-1 bg-auth-line" />
      </div>
    </AuthPanel>
  )
}
