import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Crosshair } from "lucide-react"

import { ThemeToggle } from "@/components/layout/theme-toggle"

interface AuthPanelProps {
  imagePosition: "left" | "right"
  imageSrc: string
  imageAlt: string
  panelHeadline: string
  panelSub: string
  panelLabel: string
  children: React.ReactNode
}

export function AuthPanel({
  imagePosition,
  imageSrc,
  imageAlt,
  panelHeadline,
  panelSub,
  panelLabel,
  children,
}: AuthPanelProps) {
  const imageBlock = (
    <aside
      className={`relative order-1 min-h-56 overflow-hidden rounded-[1.6rem] sm:min-h-64 lg:min-h-0 ${
        imagePosition === "right" ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority sizes="(max-width: 1023px) 100vw, 48vw" />
      <div aria-hidden="true" className="absolute inset-0 bg-auth-overlay" />

      <div className="relative z-10 flex h-full min-h-56 flex-col justify-between p-6 text-auth-image-foreground sm:min-h-64 sm:p-8 lg:min-h-full lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-auth-image-foreground/20 bg-auth-image-foreground/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
            {panelLabel}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-auth-image-foreground/45">EasyFinder 01</span>
        </div>

        <div className="max-w-md pt-12 lg:pt-0">
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.65rem]">
            {panelHeadline}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-auth-image-foreground/65">{panelSub}</p>
        </div>
      </div>
    </aside>
  )

  const formBlock = (
    <div
      className={`order-2 flex min-w-0 flex-col px-2 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-8 xl:px-14 ${
        imagePosition === "right" ? "lg:order-1" : "lg:order-2"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="EasyFinder — на главную">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/20">
            <Crosshair className="size-4" />
          </span>
          <span className="font-heading text-base font-bold tracking-tight text-foreground">EasyFinder</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className="my-auto w-full max-w-md self-center py-10 lg:py-8">{children}</div>

      <Link href="/" className="group flex w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
        Вернуться на главную
      </Link>
    </div>
  )

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-auth-page p-3 sm:p-6 lg:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:radial-gradient(var(--auth-dot)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="relative grid w-full max-w-6xl gap-2 overflow-hidden rounded-[2rem] border border-auth-line bg-auth-card p-2 shadow-2xl shadow-auth-shadow sm:gap-3 sm:rounded-[2.4rem] sm:p-3 lg:min-h-[700px] lg:grid-cols-2">
        {imageBlock}
        {formBlock}
      </div>
    </main>
  )
}
