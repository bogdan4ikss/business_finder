"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { AuthPanel } from "@/components/auth/auth-panel"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <AuthPanel
      imagePosition="left"
      imageSrc="/images/auth-register-panel.png"
      imageAlt="Визуализация сети данных EasyFinder"
      panelHeadline="Находите клиентов раньше конкурентов."
      panelSub="EasyFinder автоматически находит компании без сайтов в любой нише и городе России — уже через 3 минуты после запуска."
    >
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Создать аккаунт
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Войти
          </Link>
        </p>
      </div>

      <form className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="reg-name" className="text-sm font-medium text-foreground">
            Имя
          </label>
          <input
            id="reg-name"
            type="text"
            autoComplete="name"
            placeholder="Иван Иванов"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="reg-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="reg-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="reg-password" className="text-sm font-medium text-foreground">
            Пароль
          </label>
          <div className="relative">
            <input
              id="reg-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Не менее 8 символов"
              className="h-11 w-full rounded-xl border border-border bg-background px-4 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-primary"
          />
          <span className="text-xs leading-relaxed text-muted-foreground">
            Я соглашаюсь с{" "}
            <Link href="#" className="text-primary underline underline-offset-2 hover:no-underline">
              политикой конфиденциальности
            </Link>{" "}
            и{" "}
            <Link href="#" className="text-primary underline underline-offset-2 hover:no-underline">
              условиями использования
            </Link>
          </span>
        </label>

        <button
          type="submit"
          disabled={!agreed}
          className="mt-1 h-11 w-full rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Создать аккаунт
        </button>
      </form>
    </AuthPanel>
  )
}
