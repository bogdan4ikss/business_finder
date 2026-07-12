import { AdminNavbar } from "@/components/layout/admin-navbar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AdminNavbar />
      <main>{children}</main>
    </>
  )
}
