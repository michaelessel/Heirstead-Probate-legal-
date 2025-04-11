import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EstatePlanningPage() {
  return (
    <main className="min-h-screen">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400/90 to-red-400/70 z-10" />
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/courtroom.jpeg')" }}
        >
          <div className="container relative z-20 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Estate Planning Services</h1>
              <p className="text-lg">Secure your family's future with comprehensive estate planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our Estate Planning Expertise</h2>
              <p className="mb-4">
                Estate planning is the process of arranging for the management and disposal of your estate during your
                lifetime and after death. At Heirstead Probate & Legal Affairs, we understand that planning for the
                future can be a complex and emotional process. Our experienced estate planning attorneys provide
                compassionate guidance and expert legal advice to help you create a comprehensive plan that reflects
                your wishes and protects your loved ones.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Our Estate Planning Services Include:</h3>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Will Drafting</h4>
                  <p>
                    We assist in creating legally binding wills that clearly express your wishes regarding the
                    distribution of your assets, guardianship of minor children, and other important matters. Our
                    attorneys ensure that your will complies with all legal requirements and minimizes the potential for
                    disputes.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Trust Creation</h4>
                  <p>
                    Our team helps establish various types of trusts, including revocable living trusts, irrevocable
                    trusts, special needs trusts, and charitable trusts. Trusts can help you avoid probate, reduce
                    taxes, protect assets, and provide for loved ones with special needs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Power of Attorney</h4>
                  <p>
                    We assist in creating durable powers of attorney for financial and healthcare decisions, ensuring
                    that someone you trust can make important decisions on your behalf if you become incapacitated.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Healthcare Directives</h4>
                  <p>
                    Our attorneys help you prepare advance healthcare directives, including living wills and healthcare
                    proxies, that specify your wishes regarding medical treatment and end-of-life care.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">International Estate Planning</h4>
                  <p>
                    With offices in Ghana, the UK, and the USA, we specialize in handling estate planning matters that
                    span multiple jurisdictions. Our international team ensures that your estate plan is effective
                    across different legal systems.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">
                Why Choose Heirstead Probate & Legal Affairs for Estate Planning?
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Personalized approach tailored to your unique situation and goals</li>
                <li>Comprehensive planning that addresses all aspects of your estate</li>
                <li>International expertise with knowledge of laws in Ghana, UK, and USA</li>
                <li>Regular review and updates to ensure your plan remains current</li>
                <li>Clear communication that helps you understand complex legal concepts</li>
                <li>Commitment to protecting your assets and providing for your loved ones</li>
              </ul>

              <div className="bg-red-400/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Client Testimonial</h3>
                <p className="italic mb-4">
                  "The estate planning team at Heirstead Probate & Legal Affairs made what seemed like an overwhelming
                  process straightforward and manageable. They took the time to understand my family's unique needs and
                  created a comprehensive plan that gives me peace of mind about the future."
                </p>
                <p className="font-semibold">- Robert M., London</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/appointment">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Our Estate Planning Team</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/law-image-4.jpeg"
                    alt="Estate Planning Services"
                    width={400}
                    height={600}
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">Estate Planning Checklist</h3>
                  <ul className="space-y-3 list-disc pl-6">
                    <li>Inventory your assets and liabilities</li>
                    <li>Identify beneficiaries and guardians</li>
                    <li>Consider tax implications</li>
                    <li>Create a will and/or trust</li>
                    <li>Establish powers of attorney</li>
                    <li>Prepare healthcare directives</li>
                    <li>Review and update beneficiary designations</li>
                    <li>Consider digital asset management</li>
                    <li>Plan for business succession (if applicable)</li>
                    <li>Regularly review and update your plan</li>
                  </ul>
                </div>

                <div className="bg-red-400 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-semibold mb-4">Ready to Secure Your Family's Future?</h3>
                  <p className="mb-4">
                    Our estate planning attorneys are ready to help you create a comprehensive plan tailored to your
                    needs.
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
                      <span>estate@heirsteadlegal.com</span>
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
