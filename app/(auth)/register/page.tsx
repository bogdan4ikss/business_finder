"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

import { AuthPanel } from "@/components/auth/auth-panel"

const fieldClass =
  "h-12 w-full rounded-2xl border border-auth-line bg-auth-field px-4 text-sm text-foreground shadow-sm transition-[border-color,box-shadow,background-color] placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-4 focus:ring-primary/10"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <AuthPanel
      imagePosition="left"
      imageSrc="/images/auth-register-panel.png"
      imageAlt="Сеть связанных источников данных EasyFinder"
      panelLabel="Новый поиск"
      panelHeadline="Превратите поиск в стабильный поток клиентов."
      panelSub="Выберите нишу и город — EasyFinder соберёт подходящие компании и подготовит контакты для первого касания."
    >
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">Начните бесплатно</p>
        <h1 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Создать аккаунт</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Уже зарегистрированы?{" "}
          <Link href="/login" className="font-semibold text-foreground underline decoration-primary/60 underline-offset-4 hover:decoration-primary">
            Войти
          </Link>
        </p>
      </div>

      <form className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="reg-name" className="text-xs font-semibold text-foreground">Имя</label>
          <input id="reg-name" type="text" autoComplete="name" placeholder="Как к вам обращаться" className={fieldClass} required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="reg-email" className="text-xs font-semibold text-foreground">Email</label>
          <input id="reg-email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} required />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="reg-password" className="text-xs font-semibold text-foreground">Пароль</label>
          <div className="relative">
            <input id="reg-password" type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="Не менее 8 символов" className={`${fieldClass} pr-12`} minLength={8} required />
            <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground" aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}>
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-auth-line bg-auth-field/60 p-3.5">
          <input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} className="mt-0.5 size-4 shrink-0 accent-primary" />
          <span className="text-xs leading-relaxed text-muted-foreground">
            Принимаю <Link href="#" className="text-foreground underline underline-offset-2">условия использования</Link> и <Link href="#" className="text-foreground underline underline-offset-2">политику конфиденциальности</Link>
          </span>
        </label>

        <button type="submit" disabled={!agreed} className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none">
          Создать аккаунт
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>
    </AuthPanel>
  )
}
