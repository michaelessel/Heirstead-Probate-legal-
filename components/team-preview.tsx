"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import EnhancedLoadingScreen from "./enhanced-loading-screen"

export default function TeamPreview() {
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
    <section className="py-16 bg-gray-50">
      {isLoading && <EnhancedLoadingScreen onComplete={handleLoadingComplete} />}
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of legal professionals brings expertise from across the globe to provide you with the
            highest quality legal services.
          </p>
        </div>

        <Tabs defaultValue="international" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="international">International Team</TabsTrigger>
              <TabsTrigger value="local">Local Team</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="international">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Dr. James Wilson"
                role="Head of International Operations"
                image="/images/james-wilson.jpeg"
                email="james.wilson@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/jameswilson"
              />
              <TeamMember
                name="Sarah Johnson"
                role="Senior Probate Attorney"
                image="/images/sarah-johnson.jpeg"
                email="sarah.johnson@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/sarahjohnson"
              />
              <TeamMember
                name="Aaron Rice"
                role="Head of Probate, International"
                image="/images/aaron-rice.jpeg"
                email="aaron.rice@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/aaronrice"
              />
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" onClick={() => handleNavigation("/team/international")}>
                View All International Team Members
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="local">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TeamMember
                name="Kofi Mensah"
                role="Head of Probate, Ghana"
                image="/images/kofi-mensah.jpeg"
                email="kofi.mensah@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/kofimensah"
              />
              <TeamMember
                name="Ama Darko"
                role="Senior Legal Counsel"
                image="/images/ama-darko.jpeg"
                email="ama.darko@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/amadarko"
              />
              <TeamMember
                name="Kwame Osei"
                role="Trust Administration Specialist"
                image="/images/kwame-osei.jpeg"
                email="kwame.osei@heirsteadlegal.com"
                linkedin="https://linkedin.com/in/kwameosei"
              />
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" onClick={() => handleNavigation("/team/local")}>
                View All Local Team Members
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button onClick={() => handleNavigation("/team")}>Learn More About Our Team</Button>
        </div>
      </div>
    </section>
  )
}

function TeamMember({
  name,
  role,
  image,
  email,
  linkedin,
}: {
  name: string
  role: string
  image: string
  email: string
  linkedin: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <div className="flex gap-3">
          <a
            href={`mailto:${email}`}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
