import type React from "react"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Heirstead Probate & Legal Affairs - Expert Probate Services Since 1999",
  description:
    "Heirstead Probate & Legal Affairs provides expert probate, estate planning, and trust administration services in Ghana, UK, and USA since 1999.",
  icons: {
    icon: [{ url: "/images/lady-justice-teal.jpeg" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/lady-justice-teal.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/images/lady-justice-teal.jpeg" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
