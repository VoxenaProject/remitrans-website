import Link from "next/link"
import Image from "next/image"
import { entities } from "@/lib/data"

const quickLinks = [
  { href: "/transport", label: "Transport" },
  { href: "/logistiek", label: "Logistiek" },
  { href: "/reiniging", label: "Reiniging" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#F7F7F5] border-t border-[#E5E5E3] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="relative h-9 w-40 mb-4">
              <Image src="/images/logo.png" alt="Remitrans NV" fill className="object-contain object-left" />
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              Transport & logistiek sinds 1967.
              <br />
              Betrouwbaar, precies, duurzaam.
            </p>
            <a
              href="https://www.facebook.com/remitrans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] mb-4">Navigatie</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entities */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] mb-4">Onze vennootschappen</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {entities.map((e) => (
                <div key={e.name}>
                  <p className="text-sm font-semibold text-[#0A0A0A] mb-1">{e.name}</p>
                  <p className="text-xs text-[#6B7280]">{e.address}</p>
                  <p className="text-xs text-[#6B7280]">{e.city}</p>
                  <p className="text-xs text-[#9CA3AF] mt-1">BTW {e.vat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E5E5E3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">
            © {new Date().getFullYear()} Remitrans NV. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors">Privacybeleid</Link>
            <Link href="#" className="text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors">Cookies</Link>
            <Link href="#" className="text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors">Klokkenluiders</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
