"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface EnhancedLoadingScreenProps {
  onComplete: () => void
  customMessage?: string
}

export default function EnhancedLoadingScreen({ onComplete, customMessage }: EnhancedLoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            onComplete()
          }, 200)
          return 100
        }
        return prevProgress + 5
      })
    }, 100) // 20 steps of 5% over 2 seconds

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-primary/90 flex flex-col items-center justify-center z-[9999]">
      <div className="mb-8">
        <Image
          src="/images/lady-justice-teal.jpeg"
          alt="Heirstead Probate & Legal Affairs Logo"
          width={150}
          height={150}
          className="rounded-2xl"
        />
      </div>
      <div className="text-center w-full max-w-md px-4">
        <div className="relative h-2 bg-white/30 rounded-full mb-4 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-white/80">{customMessage || "Please wait while we prepare your content"}</p>
      </div>
    </div>
  )
}
