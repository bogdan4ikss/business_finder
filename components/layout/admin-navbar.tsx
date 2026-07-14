"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { BarChart3, Building2, ChevronDown, CreditCard, LayoutDashboard, LogOut, Menu, Moon, Search, Settings, Sparkles, Sun } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", label: "Обзор", icon: LayoutDashboard, exact: true },
  { href: "/admin/search", label: "Поиск организаций", icon: Search },
  { href: "/admin/subscription", label: "Подписка", icon: CreditCard },
  { href: "/admin/settings", label: "Настройки", icon: Settings },
]

function Brand() {
  return <Link href="/admin" className="flex items-center gap-3 font-heading text-lg font-bold"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Building2 className="size-5" /></span><span>easywork<span className="text-muted-foreground">.find</span></span></Link>
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return <nav className="flex flex-col gap-1" aria-label="Основная навигация">{navItems.map((item) => {
    const active = item.exact ? pathname === item.href : pathname.startsWith(item.href)
    const Icon = item.icon
    return <Link key={item.href} href={item.href} onClick={onNavigate} className={cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground", active && "bg-accent text-foreground")}><Icon className="size-4" />{item.label}</Link>
  })}</nav>
}

function PlanCard() {
  return <div className="rounded-2xl border bg-card p-4"><div className="flex items-center justify-between gap-2"><span className="text-xs font-semibold">Тариф Lite</span><Sparkles className="size-4 text-primary-foreground" /></div><p className="mt-1 text-xs text-muted-foreground">72 из 100 организаций</p><Progress value={72} className="mt-3" /><Button nativeButton={false} render={<Link href="/admin/subscription" />} variant="outline" size="sm" className="mt-3 w-full">Увеличить лимит</Button></div>
}

export function AdminNavbar() {
  const { resolvedTheme, setTheme } = useTheme()
  return <>
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r bg-sidebar p-4 lg:flex">
      <div className="px-2 py-2"><Brand /></div><Separator className="my-4" /><NavLinks /><div className="mt-auto flex flex-col gap-4"><PlanCard /><p className="px-2 text-xs leading-relaxed text-muted-foreground">Поддержка: support@easywork.find</p></div>
    </aside>
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:left-64 lg:px-8">
      <div className="lg:hidden"><Sheet><SheetTrigger render={<Button variant="outline" size="icon" aria-label="Открыть меню"><Menu /></Button>} /><SheetContent side="left" className="w-72 p-4"><SheetHeader className="px-2"><SheetTitle className="sr-only">Навигация</SheetTitle><Brand /></SheetHeader><Separator className="my-4" /><NavLinks /><div className="mt-6"><PlanCard /></div></SheetContent></Sheet></div>
      <div className="hidden items-center gap-2 text-sm text-muted-foreground lg:flex"><BarChart3 className="size-4" /><span>Рабочее пространство</span><span className="font-medium text-foreground">Студия Роста</span></div>
      <div className="flex items-center gap-2"><Button variant="ghost" size="icon" aria-label="Переключить тему" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}><><Sun className="hidden dark:block" /><Moon className="dark:hidden" /></></Button><DropdownMenu><DropdownMenuTrigger render={<Button variant="ghost" className="h-auto gap-2 px-2"><Avatar className="size-8"><AvatarFallback>АИ</AvatarFallback></Avatar><span className="hidden text-left sm:block"><span className="block text-xs font-semibold">Алексей Иванов</span><span className="block text-[11px] text-muted-foreground">Lite</span></span><ChevronDown /></Button>} /><DropdownMenuContent align="end" className="w-52"><DropdownMenuGroup><DropdownMenuItem><Settings />Настройки</DropdownMenuItem><DropdownMenuItem><CreditCard />Подписка</DropdownMenuItem></DropdownMenuGroup><DropdownMenuSeparator /><DropdownMenuGroup><DropdownMenuItem><LogOut />Выйти</DropdownMenuItem></DropdownMenuGroup></DropdownMenuContent></DropdownMenu></div>
    </header>
  </>
}
