"use client"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import EnhancedLoadingScreen from "@/components/enhanced-loading-screen"

export default function LocalTeamPage() {
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
        {/* Ghana Law Building background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/ghana-law-building.jpeg')" }}
        />

        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/40 z-10" />

        <div className="relative h-[40vh] z-20">
          <div className="container relative h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Local Team</h1>
              <p className="text-lg">Meet our expert attorneys based in Ghana.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        {/* Subtle background continuation */}
        <div
          className="absolute inset-0 bg-cover bg-top opacity-5"
          style={{ backgroundImage: "url('/images/ghana-law-building.jpeg')" }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Kofi Mensah"
              role="Head of Probate, Ghana"
              image="/images/kofi-mensah.jpeg"
              email="kofimensah@heirsteadlegalaffairsprobate.com"
              linkedin="https://linkedin.com/in/kofimensah"
              bio="Kofi Mensah has been with Legacy Probate Law since its founding in 1999. As Head of Probate in our Ghana office, he oversees all probate cases and specializes in complex inheritance matters under Ghanaian law. Contact him directly at kofimensah@heirsteadlegalaffairsprobate.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Ama Darko"
              role="Senior Legal Counsel"
              image="/images/ama-darko.jpeg"
              email="darkoa261@gmail.com"
              linkedin="https://linkedin.com/in/amadarko"
              bio="Ama Darko is a senior legal counsel with over 15 years of experience. She has handled some of the most complex probate cases in the country and is respected for her expertise in family law and estate disputes. Contact her directly at darkoa261@gmail.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Kwame Osei"
              role="Trust Administration Specialist"
              image="/images/kwame-osei.jpeg"
              email="Kwameose.i3@outlook.com"
              linkedin="https://linkedin.com/in/kwameosei"
              bio="Kwame Osei specializes in trust administration and has extensive experience in setting up and managing trusts for high-net-worth individuals and families in Ghana and across West Africa. Contact him directly at Kwameose.i3@outlook.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Abena Boateng"
              role="Estate Planning Attorney"
              image="/images/abena-boateng.png"
              email="abena.boateng5@outlook.com"
              linkedin="https://linkedin.com/in/abenaboateng"
              bio="Abena Boateng focuses on estate planning with particular expertise in customary law considerations. She helps clients create comprehensive estate plans that respect both statutory and customary legal requirements. Contact her directly at abena.boateng5@outlook.com"
              showEmailButton={true}
              onEmailClick={handleEmailClick}
            />
            <TeamMember
              name="Yaw Adjei"
              role="Litigation Specialist"
              image="/images/yaw-adjei.jpeg"
              email="Yaw.adjei7@hotmail.com"
              linkedin="https://linkedin.com/in/yawadjei"
              bio="Yaw Adjei handles probate litigation matters for our firm. With a strong background in courtroom advocacy, he represents clients in contested probate cases and inheritance disputes. Contact him directly at Yaw.adjei7@hotmail.com"
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
