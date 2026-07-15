import Link from "next/link"

interface LegalSection {
  title: string
  paragraphs?: string[]
  items?: string[]
}

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
}

const relatedDocuments = [
  { href: "/terms", label: "Условия использования" },
  { href: "/privacy", label: "Политика конфиденциальности" },
  { href: "/personal-data-consent", label: "Согласие на обработку данных" },
]

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <article className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-border pb-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Редакция от 15 июля 2026 года</p>
        </header>

        <div className="py-10">
          {sections.map((section, index) => (
            <section key={section.title} className="border-b border-border py-8 first:pt-0 last:border-0">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {paragraph}
                </p>
              ))}
              {section.items && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-heading text-lg font-bold text-foreground">Связанные документы</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedDocuments.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {document.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </article>
  )
}
