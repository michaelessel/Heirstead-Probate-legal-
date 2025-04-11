"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import LoadingScreen from "./loading-screen"

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  const images = [
    "/images/law-image-1.jpeg",
    "/images/law-image-2.jpeg",
    "/images/law-image-3.jpeg",
    "/images/law-image-4.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const handleAppointment = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      router.push("/appointment")
    }, 2000)
  }

  const handleExploreServices = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Randomly choose between probate law and trust administration
      const destinations = ["/practice-areas/probate", "/practice-areas/trust"]
      const randomIndex = Math.floor(Math.random() * destinations.length)
      router.push(destinations[randomIndex])
    }, 2000)
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <div className="relative h-[70vh]">
          {/* Image container with transition effect */}
          <div className="absolute inset-0 w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full transition-opacity duration-1000 bg-cover bg-center"
                style={{
                  opacity: currentImageIndex === index ? 1 : 0,
                  backgroundImage: `url('${image}')`,
                }}
              />
            ))}
          </div>
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Expert Probate Law Services Since 1999
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Navigating the complexities of probate law with integrity and expertise across Ghana, UK, and USA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleAppointment} size="lg" className="bg-red-400 hover:bg-red-500 text-white">
                  Book an Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white"
                  onClick={handleExploreServices}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
