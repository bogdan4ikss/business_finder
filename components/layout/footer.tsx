"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

const navLinks = [
  { label: "О сервисе", href: "#company" },
  { label: "Цены", href: "#price" },
  { label: "Обратная связь", href: "#contact" },
]

const legalColumns = [
  {
    title: "Реквизиты",
    content: (
      <address className="not-italic text-sm leading-relaxed text-muted-foreground">
        ИП Нурпеисов Богдан Романович
        <br />
        ИНН: 481804709190
        <br />
        Плательщик НПД
      </address>
    ),
  },
  {
    title: "Правовая информация",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Используя сайт, вы соглашаетесь с обработкой персональных данных и правилами использования материалов.
      </p>
    ),
  },
  {
    title: "Конфиденциальность",
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Мы обрабатываем данные только для связи с вами. Ваши данные защищены и не передаются третьим лицам.
      </p>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Top band — logo + nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="EasyFinder — на главную">
            <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" />
                <path d="m16.5 16.5 3.5 3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-heading text-base font-bold tracking-tight text-foreground">EasyFinder</span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Навигация в футере">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Legal columns */}
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:py-12">
          {legalColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{col.title}</h3>
              {col.content}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 monochrome.digital &middot; Все права защищены.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Heart
              className="size-3.5 fill-red-500 text-red-500"
              aria-hidden="true"
            />
            Сделано с вниманием к деталям
          </p>
        </div>
      </div>
    </footer>
  )
}
