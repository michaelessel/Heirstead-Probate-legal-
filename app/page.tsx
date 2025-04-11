import Hero from "@/components/hero"
import PracticeAreas from "@/components/practice-areas"
import AboutPreview from "@/components/about-preview"
import TeamPreview from "@/components/team-preview"
import Testimonials from "@/components/testimonials"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PracticeAreas />
      <AboutPreview />
      <TeamPreview />
      <Testimonials />
      <ContactCta />
    </main>
  )
}
