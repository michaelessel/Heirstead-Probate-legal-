import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TrustAdministrationPage() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/90 to-blue-400/70 z-10" />
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/courtroom.jpeg')" }}
        >
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust Administration Services</h1>
              <p className="text-lg">Expert guidance for trustees in managing and distributing trust assets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Trust Administration Expertise</h2>
              <p className="mb-4">
                Trust administration involves managing trust assets and distributing them according to the terms of the
                trust document. At Heirstead Probate & Legal Affairs, we understand that serving as a trustee carries
                significant legal and fiduciary responsibilities. Our experienced trust administration attorneys provide
                comprehensive guidance to trustees, helping them fulfill their duties efficiently and in compliance with
                all legal requirements.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our Trust Administration Services Include:</h3>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Trustee Guidance</h4>
                  <p>
                    We provide trustees with clear explanations of their legal duties and responsibilities, including
                    the duty of loyalty, duty of impartiality, duty to account, and duty to invest prudently. Our
                    attorneys help trustees understand how to fulfill these obligations and avoid potential liability.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Trust Asset Management</h4>
                  <p>
                    Our team assists trustees in identifying, collecting, and managing trust assets. We provide guidance
                    on investment strategies that comply with the prudent investor rule and the terms of the trust
                    document.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Beneficiary Communications</h4>
                  <p>
                    We help trustees maintain appropriate communication with beneficiaries, including providing required
                    notices and accountings. Our attorneys can assist in explaining trust provisions to beneficiaries
                    and addressing their questions and concerns.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Tax Compliance</h4>
                  <p>
                    Our attorneys ensure that trustees comply with all tax obligations related to the trust, including
                    filing trust income tax returns and distributing tax information to beneficiaries. We work closely
                    with tax professionals to minimize tax liabilities while fulfilling the trust's purposes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Trust Modification and Termination</h4>
                  <p>
                    When appropriate, we assist trustees in modifying trust terms through judicial or non-judicial
                    methods, or in terminating trusts and distributing remaining assets to beneficiaries. Our attorneys
                    ensure that these processes comply with all legal requirements and the settlor's intent.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Why Choose Heirstead Probate & Legal Affairs for Trust Administration?
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Extensive experience in trust administration across multiple jurisdictions</li>
                <li>Comprehensive understanding of fiduciary duties and responsibilities</li>
                <li>Proactive approach to identifying and addressing potential issues</li>
                <li>Clear communication that simplifies complex legal concepts</li>
                <li>Commitment to honoring the settlor's intent while protecting beneficiaries' interests</li>
                <li>International expertise with knowledge of trust laws in Ghana, UK, and USA</li>
              </ul>

              <div className="bg-blue-400/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                <p className="italic mb-4">
                  "When I was appointed as trustee of my father's trust, I felt overwhelmed by the responsibility. The
                  team at Heirstead Probate & Legal Affairs provided invaluable guidance, helping me understand my
                  duties and navigate complex decisions. Their expertise made all the difference in ensuring the trust
                  was administered properly."
                </p>
                <p className="font-semibold">- David T., New York</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/appointment">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Our Trust Administration Team</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/law-image-1.jpeg"
                    alt="Trust Administration Services"
                    width={400}
                    height={600}
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Trustee Responsibilities</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>Identify and collect trust assets</li>
                    <li>Invest trust assets prudently</li>
                    <li>Keep accurate records and accounts</li>
                    <li>File tax returns and pay taxes</li>
                    <li>Communicate with beneficiaries</li>
                    <li>Distribute assets according to trust terms</li>
                    <li>Avoid conflicts of interest</li>
                    <li>Maintain impartiality among beneficiaries</li>
                    <li>Defend the trust against claims</li>
                    <li>Seek professional advice when needed</li>
                  </ul>
                </div>

                <div className="bg-blue-400 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Need Assistance with Trust Administration?</h3>
                  <p className="mb-4">
                    Our trust administration attorneys are ready to help you navigate your fiduciary responsibilities.
                  </p>
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
                      <span>trust@heirsteadlegal.com</span>
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
