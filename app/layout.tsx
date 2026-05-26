import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Remitrans NV — Transport & Logistiek sinds 1967",
    template: "%s | Remitrans NV",
  },
  description:
    "Belgisch transport- en logistiekbedrijf opgericht in 1967. 150 trekkers, 250 opleggers, 60.000 m² opslagruimte. Bulkvervoer, huifvervoer, multimodale logistiek.",
  keywords: ["transport belgië", "logistiek ninove", "bulkvervoer", "huifvervoer", "warehousing", "remitrans"],
  openGraph: {
    title: "Remitrans NV — Transport & Logistiek sinds 1967",
    description: "Belgisch transport en logistiek. 150 trekkers, 60.000 m² magazijnen, ISO 22000 gecertificeerd.",
    locale: "nl_BE",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#0A0A0A] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
