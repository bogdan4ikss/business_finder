"use client"

import { Building2, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"

const anchorLinks = [
  { label: "Компания", href: "#about" },
  { label: "Цены", href: "#price" },
  { label: "Обратная связь", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-6xl rounded-2xl border border-border/40 bg-background/70 shadow-lg shadow-black/5 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-8 px-5 py-2.5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-sm">
            <Building2 className="size-4" />
          </span>
          <span className="font-heading text-sm font-semibold text-foreground">
            easywork.find
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Главная
              </Link>
            </li>
            {anchorLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button variant="ghost">Войти</Button>
          <Button>Попробовать бесплатно</Button>
        </div>

        <div className="ml-auto flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border/40 px-5 py-3 lg:hidden">
          <Link
            href="/"
            className="rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            Главная
          </Link>
          {anchorLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border/40 pt-3">
            <Button variant="ghost" className="justify-center">
              Войти
            </Button>
            <Button className="justify-center">Попробовать бесплатно</Button>
          </div>
        </div>
      )}
    </header>
  )
}
