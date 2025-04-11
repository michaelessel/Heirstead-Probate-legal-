"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import LoadingScreen from "@/components/loading-screen"
import Image from "next/image"

export default function AppointmentPage() {
  const [step, setStep] = useState<"lookup" | "form" | "success">("lookup")
  const [appointmentNumber, setAppointmentNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: null as Date | null,
    time: "",
    location: "",
    service: "",
    message: "",
  })

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Only proceed if the appointment number matches one of the valid numbers
      if (appointmentNumber === "15AFQ" || appointmentNumber === "56HOV") {
        setStep("form")
      } else {
        alert("Invalid appointment number. Please try again.")
      }
    }, 2000)
  }

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
      console.log("Sending appointment data to a3rdaronrice@gmail.com:", formData)

      setIsLoading(false)
      setStep("success")
    } catch (error) {
      setIsLoading(false)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <main className="min-h-screen py-16">
      {isLoading && <LoadingScreen />}

      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/heirstead-logo.png"
              alt="Heirstead Probate & Legal Affairs Logo"
              width={250}
              height={100}
              className="h-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-muted-foreground">Schedule a consultation with our expert probate attorneys.</p>
        </div>

        {step === "lookup" && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6">Enter Appointment Number</h2>
            <form onSubmit={handleLookup}>
              <div className="mb-6">
                <Label htmlFor="appointmentNumber">Appointment Number</Label>
                <Input
                  id="appointmentNumber"
                  type="text"
                  placeholder="Enter your appointment number"
                  value={appointmentNumber}
                  onChange={(e) => setAppointmentNumber(e.target.value)}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-2">Please enter your appointment number to continue.</p>
              </div>
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </div>
        )}

        {step === "form" && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold mb-6">Appointment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal mt-1">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.date || undefined}
                        onSelect={(date) => setFormData({ ...formData, date })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                      <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                      <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                      <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                      <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                      <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                      <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, location: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ghana">Ghana Office</SelectItem>
                      <SelectItem value="UK">UK Office</SelectItem>
                      <SelectItem value="USA">USA Office</SelectItem>
                      <SelectItem value="Virtual">Virtual Meeting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Probate">Probate Law</SelectItem>
                      <SelectItem value="Estate">Estate Planning</SelectItem>
                      <SelectItem value="Trust">Trust Administration</SelectItem>
                      <SelectItem value="Other">Other Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide any additional details about your legal needs"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Appointment Request
              </Button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Appointment Request Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for scheduling an appointment with Heirstead Probate & Legal Affairs. We have received your
              request and will contact you shortly to confirm your appointment.
            </p>
            <p className="text-muted-foreground mb-6">A confirmation email has been sent to your email address.</p>
            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
          </div>
        )}
      </div>
    </main>
  )
}
