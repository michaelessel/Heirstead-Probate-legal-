"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, FileText, Landmark } from "lucide-react"
import { useRouter } from "next/navigation"
import EnhancedLoadingScreen from "./enhanced-loading-screen"

export default function PracticeAreas() {
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
    <>
      {isLoading && <EnhancedLoadingScreen onComplete={handleLoadingComplete} />}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Practice Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With over two decades of experience, our firm specializes in providing expert legal services in the
              following areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Probate Law</CardTitle>
                <CardDescription>Our primary area of expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We guide clients through the complex probate process, helping to validate wills, distribute assets,
                  and resolve disputes. Our experienced attorneys ensure that the deceased's wishes are honored while
                  minimizing stress for the family.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleNavigation("/practice-areas/probate")}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-red-400">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle>Estate Planning</CardTitle>
                <CardDescription>Secure your family's future</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our estate planning services help you create comprehensive plans for the management and disposal of
                  your estate. We assist with wills, trusts, power of attorney, and healthcare directives to ensure your
                  wishes are fulfilled.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => handleNavigation("/practice-areas/estate")}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-t-4 border-t-blue-400">
              <CardHeader>
                <div className="mb-2 w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center">
                  <Landmark className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle>Trust Administration</CardTitle>
                <CardDescription>Managing assets with integrity</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We provide expert guidance in trust administration, helping trustees understand their fiduciary duties
                  and legal obligations. Our team ensures proper management, investment, and distribution of trust
                  assets according to the trust document.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => handleNavigation("/practice-areas/trust")}>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => handleNavigation("/practice-areas")}>View All Practice Areas</Button>
          </div>
        </div>
      </section>
    </>
  )
}
