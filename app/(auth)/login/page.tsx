"use client"

import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { AuthPanel } from "@/components/auth/auth-panel"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthPanel
      imagePosition="right"
      imageSrc="/images/auth-login-panel.png"
      imageAlt="Карта городов с найденными бизнесами"
      panelHeadline="Каждый день — новые лиды для вашего бизнеса."
      panelSub="Войдите в аккаунт и продолжайте находить компании без сайтов по всей России."
    >
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Добро пожаловать
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Нет аккаунта?{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>

      <form className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="login-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="text-sm font-medium text-foreground">
              Пароль
            </label>
            <Link href="#" className="text-xs text-primary hover:underline">
              Забыли пароль?
            </Link>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Ваш пароль"
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

        <button
          type="submit"
          className="mt-1 h-11 w-full rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/30"
        >
          Войти
        </button>
      </form>
    </AuthPanel>
  )
}
