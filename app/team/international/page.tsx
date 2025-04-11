"use client"

import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"

export default function InternationalTeamPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentEmail, setCurrentEmail] = useState("")

  const handleEmailClick = (email: string) => {
    setCurrentEmail(email)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = `mailto:${email}`
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      {isLoading && (
        <EnhancedLoadingScreen onComplete={() => {}} customMessage={`Opening email to ${currentEmail}...`} />
      )}
      <section className="relative">
        {/* Background image with statue */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/justice-statue.webp')" }}
        />

        {/* Lighter blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/40 z-10" />

        <div className="relative h-[40vh] z-20">
          <div className="container relative h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our International Team</h1>
              <p className="text-lg">Meet our expert attorneys from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        {/* Subtle background continuation */}
        <div
          className="absolute inset-0 bg-cover bg-top opacity-5"
          style={{ backgroundImage: "url('/images/justice-statue.webp')" }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. James Wilson"
              role="Head of International Operations"
              image="/images/james-wilson.jpeg"
              email="Jameswil091@outlook.com"
              linkedin="https://linkedin.com/in/jameswilson"
              bio="Dr. James Wilson has over 25 years of experience in international probate law. He oversees all international operations and specializes in complex cross-border estate matters. Contact him directly at Jameswil091@outlook.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Sarah Johnson"
              role="Senior Probate Attorney"
              image="/images/sarah-johnson.jpeg"
              email="sa.johnson89@outlook.com"
              linkedin="https://linkedin.com/in/sarahjohnson"
              bio="Sarah Johnson specializes in UK probate law and has successfully handled hundreds of complex estate cases. She is known for her meticulous attention to detail and client-centered approach. Contact her directly at sa.johnson89@outlook.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Aaron Rice III"
              role="Head of Probate, International"
              image="/images/aaron-rice.jpeg"
              email="a3rdaronrice@heirsteadlegalaffairsprobate.com"
              linkedin="https://linkedin.com/in/aaronrice"
              bio="Aaron Rice III leads our international probate department with expertise in multi-jurisdictional estate matters. His background in both common law and civil law systems makes him uniquely qualified to handle complex international probate cases. He specializes in handling neutral cases in the USA and Ghana, ensuring fair and unbiased legal representation across different jurisdictions. Contact him directly at a3rdaronrice@heirsteadlegalaffairsprobate.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Elena Rodriguez"
              role="Trust Administration Attorney"
              image="/images/elena-rodriguez.png"
              email="rodriguez_elena14@yahoo.com"
              linkedin="https://linkedin.com/in/elenarodriguez"
              bio="Elena Rodriguez specializes in international trust administration and has extensive experience in managing complex trust structures across multiple jurisdictions. Contact her directly at rodriguez_elena14@yahoo.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="David Thompson"
              role="International Tax Specialist"
              image="/images/david-thompson.jpeg"
              email="thompson.david89@aol.com"
              linkedin="https://linkedin.com/in/davidthompson"
              bio="David Thompson brings expertise in international tax law as it relates to estate planning and probate. He helps clients navigate the complex tax implications of cross-border asset transfers. Contact him directly at thompson.david89@aol.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function TeamMember({
  name,
  role,
  image,
  email,
  linkedin,
  bio,
  showEmailButton = false,
  onEmailClick,
}: {
  name: string
  role: string
  image: string
  email: string
  linkedin: string
  bio: string
  showEmailButton?: boolean
  onEmailClick: (email: string) => void
}) {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{role}</p>
        <p className="mb-4">{bio}</p>

        {showEmailButton ? (
          <div className="mb-4">
            <Button onClick={() => onEmailClick(email)} className="w-full" variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Email: {email}
            </Button>
          </div>
        ) : null}

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
