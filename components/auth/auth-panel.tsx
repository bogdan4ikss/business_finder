import Image from "next/image"
import Link from "next/link"
import { Crosshair } from "lucide-react"

interface AuthPanelProps {
  /** "left" — image on the left, form on the right (register)
   *  "right" — form on the left, image on the right (login) */
  imagePosition: "left" | "right"
  imageSrc: string
  imageAlt: string
  panelHeadline: string
  panelSub: string
  children: React.ReactNode
}

export function AuthPanel({
  imagePosition,
  imageSrc,
  imageAlt,
  panelHeadline,
  panelSub,
  children,
}: AuthPanelProps) {
  const imageBlock = (
    <div className="relative hidden overflow-hidden lg:flex lg:w-5/12 xl:w-[45%]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-foreground/55" />
      {/* content over image */}
      <div className="relative z-10 flex h-full flex-col justify-between p-10">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Crosshair className="size-4" />
          </span>
          <span className="font-heading text-base font-bold tracking-tight">EasyFinder</span>
        </Link>
        <div>
          <p className="font-heading text-3xl font-bold leading-tight text-white xl:text-4xl">
            {panelHeadline}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{panelSub}</p>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-white/35">
          monochrome.digital
        </p>
      </div>
    </div>
  )

  const formBlock = (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-10 lg:px-16 xl:px-20">
      {/* mobile logo */}
      <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
        <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Crosshair className="size-4" />
        </span>
        <span className="font-heading text-base font-bold tracking-tight text-foreground">
          EasyFinder
        </span>
      </Link>
      <div className="w-full max-w-sm">{children}</div>
    </div>
  )

  return (
    <div className="flex min-h-svh bg-background">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {formBlock}
        </>
      ) : (
        <>
          {formBlock}
          {imageBlock}
        </>
      )}
    </div>
  )
}
