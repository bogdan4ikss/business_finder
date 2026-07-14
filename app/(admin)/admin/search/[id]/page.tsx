import { notFound } from "next/navigation"
import { OrganizationProfile } from "@/components/admin/organization-profile"
import { organizations } from "@/lib/admin-data"

export default async function OrganizationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const organization = organizations.find((item) => item.id === id)
  if (!organization) notFound()
  return <OrganizationProfile organization={organization} />
}
