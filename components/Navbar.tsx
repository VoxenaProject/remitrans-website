"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/transport", label: "Transport" },
  { href: "/logistiek", label: "Logistiek" },
  { href: "/reiniging", label: "Reiniging" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHero = pathname === "/"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E5E3] shadow-sm"
          : isHero
          ? "bg-transparent"
          : "bg-white border-b border-[#E5E5E3]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" style={{ height: "72px" }}>
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-9 w-40">
            <Image
              src="/images/logo.png"
              alt="Remitrans NV"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-[#D4291E]"
                    : scrolled || !isHero
                    ? "text-[#374151] hover:text-[#0A0A0A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-[#D4291E] hover:bg-[#B82218] text-white transition-colors"
          >
            Offerte aanvragen
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || !isHero ? "bg-[#0A0A0A]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || !isHero ? "bg-[#0A0A0A]" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${scrolled || !isHero ? "bg-[#0A0A0A]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-white border-b border-[#E5E5E3] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-base font-medium ${pathname === l.href ? "text-[#D4291E]" : "text-[#374151]"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-[#D4291E] text-white text-center"
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </header>
  )
}
