"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"
import { useRouter } from "next/navigation"

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [destination, setDestination] = useState("")
  const router = useRouter()

  const handleNavigation = (path: string) => {
    setDestination(path)
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
    router.push(destination)
  }

  return (
    <main className="min-h-screen">
      {isLoading && <EnhancedLoadingScreen onComplete={handleLoadingComplete} />}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/courtroom.jpeg')" }}
        >
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
              <p className="text-lg">Meet our expert attorneys from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8 text-center flex flex-col items-center">
              <div className="mb-6 relative w-24 h-24 rounded-full overflow-hidden">
                <Image src="/images/james-wilson.jpeg" alt="International Team" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-4">International Team</h2>
              <p className="mb-6">
                Our international team brings expertise from the UK, USA, and beyond, specializing in cross-border
                probate matters and complex international estate planning.
              </p>
              <Button onClick={() => handleNavigation("/team/international")} className="mt-auto">
                Meet Our International Team
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center flex flex-col items-center">
              <div className="mb-6 relative w-24 h-24 rounded-full overflow-hidden">
                <Image src="/images/kofi-mensah.jpeg" alt="Local Team" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Local Team</h2>
              <p className="mb-6">
                Our Ghana-based team provides expert legal services with deep understanding of local laws, customs, and
                practices in probate and estate matters.
              </p>
              <Button onClick={() => handleNavigation("/team/local")} className="mt-auto">
                Meet Our Local Team
              </Button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Team?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p>
                  Our attorneys have specialized knowledge in probate law, estate planning, and trust administration
                  with decades of combined experience.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                <p>
                  With team members across Ghana, the UK, and the USA, we can handle complex international cases with
                  ease.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
                <p>
                  We prioritize clear communication, compassionate service, and personalized solutions for each client's
                  unique situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
