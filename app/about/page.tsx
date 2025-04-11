"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const backgroundImages = ["/images/lady-justice-1.jpeg", "/images/lady-justice-2.jpeg", "/images/gavel.jpeg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <main className="min-h-screen">
      <section className="relative">
        {/* Rotating background images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: currentImageIndex === index ? 0.3 : 0,
              zIndex: 5,
            }}
          />
        ))}

        {/* Gradient overlay on top of the images */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />

        <div className="relative h-[40vh] z-20">
          <div className="container relative h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Heirstead Probate & Legal Affairs</h1>
              <p className="text-lg">Our history, values, and commitment to excellence since 1999.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="mb-4">
                Heirstead Probate & Legal Affairs was founded in 1999 in Accra, Ghana, by a group of dedicated attorneys
                who recognized the need for specialized probate legal services. What began as a small practice has grown
                into an international firm with offices in Ghana, the United Kingdom, and the United States.
              </p>
              <p className="mb-4">
                Our journey has been marked by a steadfast commitment to ethical practice, client satisfaction, and
                legal excellence. Over the past two decades, we have helped thousands of clients navigate the
                complexities of probate law, estate planning, and trust administration.
              </p>
              <p className="mb-4">
                In 2005, we expanded our operations to the United Kingdom, establishing our London office to better
                serve our growing international clientele. By 2010, we had further extended our reach to the United
                States, opening our New York office and solidifying our position as a truly global probate law firm.
              </p>
              <p className="mb-4">
                Today, Heirstead Probate & Legal Affairs stands as a testament to the vision of its founders and the
                dedication of its team members. We continue to evolve and adapt to the changing legal landscape while
                remaining true to our core values and commitment to providing exceptional legal services.
              </p>

              <h2 id="ethics" className="text-3xl font-bold mt-12 mb-6">
                Our Ethics and Values
              </h2>

              <p className="mb-4">
                At Heirstead Probate & Legal Affairs, we believe that ethical practice is the cornerstone of effective
                legal representation. Our firm's values guide every aspect of our operations, from client interactions
                to case management and resolution.
              </p>

              <p className="mb-4">
                <strong>Integrity:</strong> We conduct ourselves with unwavering honesty and transparency in all our
                dealings. Our clients can trust that we will always act in their best interests and provide candid
                advice, even when it may be difficult to hear.
              </p>

              <p className="mb-4">
                <strong>Competence:</strong> We are committed to maintaining the highest levels of legal expertise and
                professional skill. Our attorneys regularly engage in continuing education and stay abreast of
                developments in probate law to ensure that our clients receive the most current and effective legal
                representation.
              </p>

              <p className="mb-4">
                <strong>Confidentiality:</strong> We recognize the sensitive nature of probate matters and estate
                planning. Our firm maintains strict confidentiality protocols to protect our clients' personal and
                financial information, ensuring that their privacy is respected at all times.
              </p>

              <p className="mb-4">
                <strong>Diligence:</strong> We approach each case with thoroughness and attention to detail. Our
                attorneys work tirelessly to advance our clients' interests, meeting deadlines and responding promptly
                to inquiries and concerns.
              </p>

              <p className="mb-4">
                <strong>Respect:</strong> We treat all individuals with dignity and courtesy, regardless of their
                background or circumstances. Our firm values diversity and strives to create an inclusive environment
                for both clients and staff.
              </p>

              <p className="mb-4">
                <strong>Accessibility:</strong> We believe that legal services should be accessible to all who need
                them. Our firm offers flexible fee arrangements and strives to communicate complex legal concepts in
                clear, understandable language.
              </p>

              <p className="mb-4">
                <strong>Community Engagement:</strong> We are committed to giving back to the communities we serve. Our
                attorneys regularly engage in pro bono work and community service, using their legal skills to benefit
                those in need.
              </p>

              <p className="mb-4">
                <strong>Innovation:</strong> While respecting legal traditions, we embrace innovation in our practice.
                We utilize technology and modern management techniques to enhance efficiency and improve client service.
              </p>

              <p className="mb-4">
                <strong>Balance:</strong> We recognize the importance of maintaining a healthy work-life balance. Our
                firm supports the well-being of our team members, understanding that attorneys who are fulfilled in
                their personal lives are better able to serve their clients effectively.
              </p>

              <p className="mb-4">
                <strong>Excellence:</strong> In all that we do, we strive for excellence. From legal research and
                document preparation to courtroom advocacy and client counseling, we hold ourselves to the highest
                standards of professional performance.
              </p>

              <p className="mb-4">
                <strong>Accountability:</strong> We take responsibility for our actions and decisions. When mistakes
                occur, we acknowledge them promptly, take corrective measures, and learn from the experience to improve
                our practice.
              </p>

              <p className="mb-4">
                <strong>Client-Centered Approach:</strong> Our clients' needs and objectives are at the center of our
                practice. We listen carefully to understand their unique situations and tailor our legal strategies
                accordingly.
              </p>

              <p className="mb-4">
                <strong>Collaboration:</strong> We value teamwork and collaboration, both within our firm and with other
                professionals involved in our clients' matters. By working together, we can achieve better outcomes than
                any individual working alone.
              </p>

              <p className="mb-4">
                <strong>Cultural Sensitivity:</strong> As an international firm, we respect and appreciate cultural
                differences. Our attorneys are trained to be culturally competent and to consider diverse perspectives
                in their legal practice.
              </p>

              <p className="mb-4">
                <strong>Environmental Responsibility:</strong> We recognize our obligation to the planet and future
                generations. Our firm implements environmentally sustainable practices in our operations and encourages
                our clients to consider environmental factors in their estate planning.
              </p>

              <p className="mb-4">
                <strong>Continuous Improvement:</strong> We are never satisfied with the status quo. Our firm regularly
                evaluates and refines our processes and practices to better serve our clients and fulfill our
                professional responsibilities.
              </p>

              <p className="mb-4">
                <strong>Ethical Advocacy:</strong> While zealously representing our clients' interests, we maintain our
                ethical obligations to the legal system and society. We advocate firmly but fairly, never resorting to
                deceptive or improper tactics.
              </p>

              <p className="mb-4">
                <strong>Transparency in Billing:</strong> We provide clear, detailed billing statements that allow our
                clients to understand exactly what services they are paying for. Our fee structures are explained
                thoroughly at the outset of representation.
              </p>

              <p className="mb-4">
                <strong>Conflict Resolution:</strong> We approach conflicts with a problem-solving mindset, seeking
                solutions that address the underlying interests of all parties when possible. This approach often leads
                to more satisfactory and durable resolutions.
              </p>

              <p className="mb-4">
                <strong>Professional Courtesy:</strong> We treat opposing counsel, court personnel, and all participants
                in the legal process with respect and courtesy. Professional relationships built on mutual respect
                facilitate better outcomes for our clients.
              </p>

              <p className="mb-4">
                <strong>Legacy Building:</strong> Just as we help our clients secure their legacies through proper
                estate planning, we are committed to building a positive legacy for our firm through ethical practice
                and community impact.
              </p>

              <h2 id="locations" className="text-3xl font-bold mt-12 mb-6">
                Our Locations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Ghana Headquarters</h3>
                  <p className="mb-2">123 Legal Avenue</p>
                  <p className="mb-2">Accra, Ghana</p>
                  <p className="mb-2">GPS ADDRESS: GA-352-4195</p>
                  <p className="mb-2">(233)-2433-16031</p>
                  <p>info@heirsteadlegalaffairsprobate.com</p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">UK Office</h3>
                  <p className="mb-2">Parliament Sq</p>
                  <p className="mb-2">London SW1P 3BD, United Kingdom</p>
                  <p className="mb-2">+44 20 1234 5678</p>
                  <p>info@heirsteadlegalaffairsprobate.com</p>
                </div>

                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">USA Office</h3>
                  <p className="mb-2">13th Judicial Circuit Court Of Florida</p>
                  <p className="mb-2">800 E Twiggs St, Tampa, FL 33602</p>
                  <p className="mb-2">United States</p>
                  <p className="mb-2">(305)-521-8105</p>
                  <p>info@heirsteadlegalaffairsprobate.com</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/images/gavel.jpeg"
                    alt="Heirstead Probate & Legal Affairs Office"
                    width={400}
                    height={600}
                    className="w-full"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Founded:</span>
                      <span>1999 in Accra, Ghana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Offices:</span>
                      <span>Ghana, UK, USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Team Size:</span>
                      <span>10+ legal professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Languages:</span>
                      <span>English, Twi, French, Spanish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">Specialization:</span>
                      <span>Probate Law, Estate Planning, Trust Administration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
