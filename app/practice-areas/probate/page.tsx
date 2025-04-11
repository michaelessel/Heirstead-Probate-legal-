import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProbateLawPage() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/courtroom.jpeg')" }}
        >
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Probate Law Services</h1>
              <p className="text-lg">Expert guidance through the probate process across Ghana, UK, and USA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Probate Law Expertise</h2>
              <p className="mb-4">
                Probate is the legal process through which a deceased person's will is validated, their assets are
                distributed, and their debts are settled. At Heirstead Probate & Legal Affairs, we understand that
                navigating this process can be overwhelming, especially during a time of grief. Our experienced probate
                attorneys provide compassionate guidance and expert legal representation to ensure that the probate
                process proceeds smoothly and efficiently.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our Probate Services Include:</h3>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Will Validation</h4>
                  <p>
                    We assist in proving the validity of the deceased's will in court, ensuring that their final wishes
                    are respected and legally recognized. Our attorneys carefully review the will for compliance with
                    legal requirements and represent the executor throughout the validation process.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Estate Administration</h4>
                  <p>
                    Our team provides comprehensive support to executors and administrators in managing the deceased's
                    estate. This includes identifying and valuing assets, notifying creditors, paying debts and taxes,
                    and distributing remaining assets to beneficiaries according to the will or intestacy laws.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Intestate Succession</h4>
                  <p>
                    When someone dies without a valid will, we guide families through the intestate succession process.
                    Our attorneys help determine the legal heirs according to the laws of the relevant jurisdiction and
                    assist in the fair distribution of assets.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Probate Litigation</h4>
                  <p>
                    In cases of contested wills or disputed inheritances, our experienced litigators provide strong
                    representation to protect our clients' interests. We handle will contests, claims against the
                    estate, disputes between beneficiaries, and challenges to executor actions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Cross-Border Probate</h4>
                  <p>
                    With offices in Ghana, the UK, and the USA, we specialize in handling probate matters that span
                    multiple jurisdictions. Our international team coordinates the probate process across different
                    legal systems, ensuring compliance with all relevant laws and regulations.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Why Choose Heirstead Probate & Legal Affairs?</h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Over 20 years of specialized experience in probate law</li>
                <li>International expertise with offices in Ghana, UK, and USA</li>
                <li>Compassionate approach that recognizes the emotional challenges of probate</li>
                <li>Transparent fee structures with no hidden costs</li>
                <li>Personalized service tailored to your specific situation</li>
                <li>Commitment to ethical practice and client satisfaction</li>
              </ul>

              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                <p className="italic mb-4">
                  "During one of the most difficult times in my life, the team at Heirstead Probate & Legal Affairs
                  provided not just expert legal guidance, but also compassion and understanding. They made a complex
                  probate process manageable and ensured that my father's wishes were honored. I cannot recommend them
                  highly enough."
                </p>
                <p className="font-semibold">- Elizabeth K., Accra</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/appointment">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Our Probate Team</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/law-image-1.jpeg"
                    alt="Probate Law Services"
                    width={400}
                    height={600}
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Probate Process</h3>
                  <ol className="space-y-3 list-decimal pl-6">
                    <li>Filing the petition with the probate court</li>
                    <li>Notifying heirs and creditors</li>
                    <li>Inventory and appraisal of estate assets</li>
                    <li>Paying debts and taxes</li>
                    <li>Formal accounting to the court</li>
                    <li>Distribution of remaining assets</li>
                    <li>Closing the estate</li>
                  </ol>
                </div>

                <div className="bg-primary p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-4">Our probate attorneys are ready to help you navigate this challenging process.</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Ghana:</span>
                      <span>+233 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">UK:</span>
                      <span>+44 20 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">USA:</span>
                      <span>+1 212 345 6789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Email:</span>
                      <span>probate@heirsteadlegal.com</span>
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
