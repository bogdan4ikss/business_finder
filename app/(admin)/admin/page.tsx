import Link from "next/link"
import { ArrowRight, Bookmark, Building2, CheckCircle2, ChevronRight, MessageSquareText, Search, Sparkles, Target, TrendingUp } from "lucide-react"
import { organizations } from "@/lib/admin-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const stats = [
  { label: "Найдено в июле", value: "72", note: "+18 за неделю", icon: Building2 },
  { label: "Сохранено лидов", value: "18", note: "25% от найденных", icon: Bookmark },
  { label: "AI-обращений", value: "12", note: "+5 за неделю", icon: MessageSquareText },
  { label: "Высокий потенциал", value: "9", note: "Lead-score от 80", icon: TrendingUp },
]

export default function AdminPage() {
  return <div className="flex flex-col gap-6">
    <section className="flex flex-col gap-4 rounded-3xl border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8"><div className="max-w-2xl"><Badge variant="secondary" className="mb-3"><Sparkles /> Ваш рабочий обзор</Badge><h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">Добрый день, Алексей</h1><p className="mt-2 max-w-xl text-pretty leading-relaxed text-muted-foreground">Найдите подходящие компании, оцените потенциал и подготовьте персональное обращение за несколько минут.</p></div><Button nativeButton={false} render={<Link href="/admin/search" />} size="lg">Найти организации <ArrowRight data-icon="inline-end" /></Button></section>

    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(({ label, value, note, icon: Icon }) => <Card key={label}><CardHeader><CardDescription>{label}</CardDescription><CardAction><span className="flex size-9 items-center justify-center rounded-xl bg-accent"><Icon className="size-4" /></span></CardAction><CardTitle className="font-heading text-3xl">{value}</CardTitle></CardHeader><CardFooter className="text-xs text-muted-foreground">{note}</CardFooter></Card>)}</section>

    <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <Card><CardHeader><CardTitle>Последние организации</CardTitle><CardDescription>Компании, которые вы недавно открывали</CardDescription><CardAction><Button nativeButton={false} render={<Link href="/admin/search" />} variant="ghost" size="sm">Все результаты <ChevronRight data-icon="inline-end" /></Button></CardAction></CardHeader><CardContent className="flex flex-col gap-2">{organizations.slice(0,4).map((company) => <Link key={company.id} href={`/admin/search/${company.id}`} className="group flex items-center gap-3 rounded-2xl border p-3 transition-colors hover:bg-accent"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/20 font-heading font-bold">{company.name.charAt(0)}</span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold">{company.name}</span><span className="block truncate text-xs text-muted-foreground">{company.category} · {company.city}</span></span><Badge variant={company.score >= 85 ? "default" : "secondary"}>{company.score}%</Badge><ChevronRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" /></Link>)}</CardContent></Card>
      <div className="flex flex-col gap-6"><Card className="border-primary/40"><CardHeader><CardDescription>Текущий тариф</CardDescription><CardTitle className="flex items-center gap-2">Lite <Badge variant="secondary">Активен</Badge></CardTitle></CardHeader><CardContent><div className="flex items-end justify-between gap-4"><p className="text-sm text-muted-foreground">Месячный лимит</p><p className="font-heading text-xl font-bold">72 / 100</p></div><Progress value={72} className="mt-3" /><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Лимит обновится 1 августа. Осталось 28 организаций.</p></CardContent><CardFooter><Button nativeButton={false} render={<Link href="/admin/subscription" />} variant="outline" className="w-full">Управлять тарифом</Button></CardFooter></Card>
      <Card><CardHeader><CardTitle>Следующий шаг</CardTitle><CardDescription>Простой процесс работы с лидами</CardDescription></CardHeader><CardContent className="flex flex-col gap-4">{[{ icon: Search, title: "Найдите компании", text: "Выберите нишу и город" },{ icon: Target, title: "Оцените потенциал", text: "Изучите контакты и lead-score" },{ icon: MessageSquareText, title: "Начните диалог", text: "Используйте AI-обращение" }].map(({icon: Icon,title,text}, index) => <div key={title} className="flex gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent"><Icon className="size-4" /></span><div><p className="text-sm font-semibold"><span className="mr-1 text-muted-foreground">{index+1}.</span>{title}</p><p className="text-xs text-muted-foreground">{text}</p></div></div>)}</CardContent></Card></div>
    </section>
    <Card><CardHeader><CardTitle>Недавняя активность</CardTitle><CardDescription>Что происходило в вашем пространстве</CardDescription></CardHeader><CardContent className="grid gap-3 md:grid-cols-3">{["Сохранена компания «Профи Дент»","Создано обращение для «Студия Волна»","Поиск: кофейни в Санкт-Петербурге"].map((text,i)=><div key={text} className="flex items-start gap-3 rounded-2xl bg-accent p-4"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary-foreground"/><div><p className="text-sm font-medium">{text}</p><p className="mt-1 text-xs text-muted-foreground">{i === 0 ? "Сегодня, 12:40" : i === 1 ? "Вчера, 18:20" : "12 июля, 09:15"}</p></div></div>)}</CardContent></Card>
  </div>
}
