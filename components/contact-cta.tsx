"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import EnhancedLoadingScreen from "./enhanced-loading-screen"
import Image from "next/image"

export default function ContactCta() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleAppointment = () => {
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
    router.push("/appointment")
  }

  return (
    <>
      {isLoading && <EnhancedLoadingScreen onComplete={handleLoadingComplete} />}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/heirstead-logo-transparent.png"
              alt="Heirstead Probate & Legal Affairs Logo"
              width={300}
              height={150}
              className="rounded max-w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of experienced probate attorneys is ready to help you navigate the complexities of probate law,
            estate planning, and trust administration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={handleAppointment} size="lg" className="bg-white text-primary hover:bg-white/90">
              Book an Appointment
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                  router.push("/contact")
                }, 2000)
              }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
