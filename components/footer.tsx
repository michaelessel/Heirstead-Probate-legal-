import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex justify-center md:justify-start mb-6">
              <Link href="/" className="block">
                <Image
                  src="/images/heirstead-logo-transparent.png"
                  alt="Heirstead Probate & Legal Affairs Logo"
                  width={300}
                  height={150}
                  className="rounded max-w-full h-auto"
                  priority
                />
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Providing expert probate legal services since 1999. With offices in Ghana, UK, and USA, we offer
              comprehensive legal solutions for all your probate and estate planning needs.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-primary-foreground/80 hover:text-white">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-primary-foreground/80 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-primary-foreground/80 hover:text-white">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas/probate" className="text-primary-foreground/80 hover:text-white">
                  Probate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/estate" className="text-primary-foreground/80 hover:text-white">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/trust" className="text-primary-foreground/80 hover:text-white">
                  Trust Administration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <span className="text-primary-foreground/80">123 Legal Avenue, Accra, Ghana (Headquarters)</span>
                  <p className="text-sm text-primary-foreground/60">GPS ADDRESS: GA-352-4195</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Parliament Sq, London SW1P 3BD, United Kingdom</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  13th Judicial Circuit Court Of Florida, 800 E Twiggs St, Tampa, FL 33602, United States
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">Ghana: (233)-2433-16031</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">USA: (305)-521-8105</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">UK: +44 20 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-primary-foreground/80">info@heirsteadlegalaffairsprobate.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Heirstead Probate & Legal Affairs. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/80">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
