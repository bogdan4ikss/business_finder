import { Header } from "@/components/layout/header"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
    </>
  )
}
