"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, CheckCircle2 } from "lucide-react"
import LoadingScreen from "@/components/loading-screen"
import Image from "next/image"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    try {
      // In a real application, you would send this data to your server
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Send email to the specified address
      // This would be handled by your backend in a real application
      console.log("Sending contact form data to a3rdaronrice@gmail.com:", formData)

      setIsLoading(false)
      setIsSubmitted(true)
    } catch (error) {
      setIsLoading(false)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <main className="min-h-screen">
      {isLoading && <LoadingScreen />}

      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        {/* Rotating images container */}
        <div className="relative h-[40vh]">
          {/* Create rotating images */}
          {["/images/gavel-documents.jpeg", "/images/constitution-gavel.jpeg", "/images/courtroom.jpeg"].map(
            (image, index) => (
              <div
                key={index}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                  backgroundImage: `url('${image}')`,
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
              />
            ),
          )}
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg">Get in touch with our team of expert probate attorneys.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <Image
                      src="/images/heirstead-logo.png"
                      alt="Heirstead Probate & Legal Affairs Logo"
                      width={250}
                      height={100}
                      className="h-auto"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Probate Inquiry">Probate Inquiry</SelectItem>
                            <SelectItem value="Estate Planning">Estate Planning</SelectItem>
                            <SelectItem value="Trust Administration">Trust Administration</SelectItem>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="mt-1"
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">Message Sent Successfully!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting Heirstead Probate & Legal Affairs. We have received your message and will
                    get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Our Offices</h3>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">Ghana Headquarters</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <div>
                          <p>123 Legal Avenue, Accra, Ghana</p>
                          <p className="text-sm text-muted-foreground">GPS ADDRESS: GA-352-4195</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        <span>(233)-2433-16031</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <span>info@heirsteadlegalaffairsprobate.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">UK Office</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <span>Parliament Sq, London SW1P 3BD, United Kingdom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        <span>+44 20 1234 5678</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <span>info@heirsteadlegalaffairsprobate.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4">USA Office</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                        <span>
                          13th Judicial Circuit Court Of Florida, 800 E Twiggs St, Tampa, FL 33602, United States
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 shrink-0 text-primary" />
                        <span>(305)-521-8105</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Email:</span>
                        <span>info@heirsteadlegalaffairsprobate.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
