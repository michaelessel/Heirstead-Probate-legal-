"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import EnhancedLoadingScreen from "./enhanced-loading-screen"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/heirstead-logo.png"
                alt="Heirstead Probate & Legal Affairs Logo"
                width={300}
                height={100}
                className="h-auto w-auto max-h-16"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  About Us <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem onClick={() => handleNavigation("/about")}>Our History</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/about#ethics")}>Ethics & Values</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/about#locations")}>Our Locations</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  Practice Areas <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem onClick={() => handleNavigation("/practice-areas")}>
                  All Practice Areas
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/practice-areas/probate")}>
                  Probate Law
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/practice-areas/estate")}>
                  Estate Planning
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/practice-areas/trust")}>
                  Trust Administration
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                  Our Team <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem onClick={() => handleNavigation("/team")}>Meet Our Team</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/team/international")}>
                  International Team
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("/team/local")}>Local Team</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>

            <Button onClick={() => handleNavigation("/appointment")} className="bg-red-400 hover:bg-red-500 text-white">
              Book Appointment
            </Button>
          </nav>

          <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/heirstead-logo.png"
                alt="Heirstead Probate & Legal Affairs Logo"
                width={250}
                height={80}
                className="h-auto"
              />
            </div>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              {/* Mobile About Us submenu */}
              <div className="border-t border-b py-2">
                <p className="text-sm font-medium mb-2">About Us</p>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/about")
                    }}
                  >
                    Our History
                  </Link>
                  <Link
                    href="/about#ethics"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/about#ethics")
                    }}
                  >
                    Ethics & Values
                  </Link>
                  <Link
                    href="/about#locations"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/about#locations")
                    }}
                  >
                    Our Locations
                  </Link>
                </div>
              </div>

              {/* Mobile Practice Areas submenu */}
              <div className="border-b py-2">
                <p className="text-sm font-medium mb-2">Practice Areas</p>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/practice-areas"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/practice-areas")
                    }}
                  >
                    All Practice Areas
                  </Link>
                  <Link
                    href="/practice-areas/probate"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/practice-areas/probate")
                    }}
                  >
                    Probate Law
                  </Link>
                  <Link
                    href="/practice-areas/estate"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/practice-areas/estate")
                    }}
                  >
                    Estate Planning
                  </Link>
                  <Link
                    href="/practice-areas/trust"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/practice-areas/trust")
                    }}
                  >
                    Trust Administration
                  </Link>
                </div>
              </div>

              {/* Mobile Team submenu */}
              <div className="border-b py-2">
                <p className="text-sm font-medium mb-2">Our Team</p>
                <div className="pl-4 flex flex-col gap-2">
                  <Link
                    href="/team"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/team")
                    }}
                  >
                    Meet Our Team
                  </Link>
                  <Link
                    href="/team/international"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/team/international")
                    }}
                  >
                    International Team
                  </Link>
                  <Link
                    href="/team/local"
                    className="text-sm text-muted-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleNavigation("/team/local")
                    }}
                  >
                    Local Team
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
                onClick={() => {
                  setIsMenuOpen(false)
                  handleNavigation("/contact")
                }}
              >
                Contact
              </Link>

              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                  handleNavigation("/appointment")
                }}
                className="bg-red-400 hover:bg-red-500 text-white w-full mt-2"
              >
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
