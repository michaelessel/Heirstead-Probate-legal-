import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in the trust our clients place in us. Here's what some of them have to say about our services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Legacy Probate Law guided me through the complex probate process with compassion and expertise during a difficult time. Their attention to detail and clear communication made all the difference."
            author="Elizabeth K."
            location="Accra, Ghana"
          />
          <TestimonialCard
            quote="As an expatriate with assets in multiple countries, I needed specialized legal advice. The international team at Legacy provided tailored solutions that addressed all my estate planning concerns."
            author="Robert M."
            location="London, UK"
          />
          <TestimonialCard
            quote="The trust administration services provided by Legacy Probate Law have been exceptional. Their team's knowledge and professionalism ensured that my family's trust was managed with the utmost integrity."
            author="David T."
            location="New York, USA"
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, location }: { quote: string; author: string; location: string }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/40 mb-4" />
        <p className="flex-1 italic mb-6">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
