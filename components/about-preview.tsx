import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPreview() {
  return (
    <section className="py-16 relative">
      {/* Background Lady Justice images with overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lady-justice-1.jpeg')" }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/lady-justice-2.jpeg')" }}
        />
      </div>

      {/* Content with higher z-index to appear above the background */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Heirstead Probate & Legal Affairs</h2>
            <p className="text-muted-foreground mb-4">
              Established in 1999, Heirstead Probate & Legal Affairs has grown from a small practice in Accra, Ghana to
              an international firm with offices in the UK and USA. Our journey has been defined by our unwavering
              commitment to ethical practice and client satisfaction.
            </p>
            <p className="text-muted-foreground mb-6">
              With over two decades of experience in probate law, estate planning, and trust administration, our team of
              dedicated attorneys brings expertise, compassion, and integrity to every case we handle.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/gavel.jpeg"
              alt="Heirstead Probate & Legal Affairs Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
