import { AdminNavbar } from "@/components/layout/admin-navbar"
import { Toaster } from "@/components/ui/sonner"

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen bg-muted/30"><AdminNavbar /><main className="min-h-screen pt-16 lg:pl-64"><div className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">{children}</div></main><Toaster /></div>
}
