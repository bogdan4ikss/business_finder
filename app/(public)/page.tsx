import { Hero } from "@/components/home/hero"
import { CompanySection } from "@/components/home/company-section"
import { PricingSection } from "@/components/home/pricing-section"
import { ContactSection } from "@/components/home/contact-section"

export default function Page() {
  return (
    <>
      <Hero />
      <CompanySection />
      <PricingSection />
      <ContactSection />
    </>
  )
}
