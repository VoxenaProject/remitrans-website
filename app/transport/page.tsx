import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Transport",
  description: "Bulkvervoer en huifvervoer. 150 trekkers, 250 opleggers, nationaal en internationaal. SQAS, ISO 22000 en Kosher gecertificeerd.",
}

const bulkFeatures = [
  "80 silo's van 60 m³", "50 eenheden PP/kunststoffen", "12 soorten mineralen",
  "3 onderlossers", "Nationaal & internationaal", "SQAS reinigingsstation",
  "980 m³ siloopslag", "Kosjere certificering",
]

const tarpFeatures = [
  "België – Luxemburg – Frankrijk – Nederland", "Volle ladingen",
  "Deelpartijen", "XL-Tautliners", "City-trailers", "Laadkleppen",
  "Containerchassissen", "Meeneemheftruck", "Coiltransport",
]

export default function TransportPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/still-2.jpg" alt="Remitrans transport" fill className="object-cover object-center opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/70 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Transport</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none text-white">
              NATIONAAL &<br /><span className="text-[#D4291E]">INTERNATIONAAL.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Twee gespecialiseerde divisies — Bulk en Huif — actief met 150 trekkers en 250 opleggers door heel Europa.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BULKVERVOER */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">01</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-[#0A0A0A]">BULKVERVOER</h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Transport van losse producten — poeders, kunststoffen, mineralen — met 65 trekkers en 100 gespecialiseerde opleggers.
              Ons SQAS-gecertificeerd reinigingsstation garandeert de hoogste kwaliteits- en voedselveiligheidsnormen.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {bulkFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4291E] shrink-0" />{f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {[["65", "Trekkers"], ["100", "Opleggers"], ["980", "m³ silo's"]].map(([v, l]) => (
                <div key={l} className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-xl px-6 py-4 text-center">
                  <span className="text-3xl font-black text-[#0A0A0A] block">{v}</span>
                  <span className="text-xs text-[#6B7280]">{l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative h-56 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/still-9.jpg" alt="Bulkvervoer Remitrans" fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="border-t border-[#E5E5E3]" /></div>

      {/* HUIFVERVOER */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="relative h-56 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image src="/images/still-10.jpg" alt="Huifvervoer Remitrans" fill className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" className="order-1 lg:order-2">
            <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">02</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-[#0A0A0A]">HUIFVERVOER</h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              85 trekkers en 150 huifopleggers gespecialiseerd in retail- en drankenvervoer.
              Actief in de Benelux, Frankrijk en internationaal. Maatoplossingen voor alle ladingstypes.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {tarpFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4291E] shrink-0" />{f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {[["85", "Trekkers"], ["150", "Opleggers"]].map(([v, l]) => (
                <div key={l} className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-xl px-6 py-4 text-center">
                  <span className="text-3xl font-black text-[#0A0A0A] block">{v}</span>
                  <span className="text-xs text-[#6B7280]">{l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ELEKTRISCHE VLOOT */}
      <section className="py-20 bg-[#F7F7F5] border-y border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Innovatie</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#0A0A0A]">DE VLOOT<br />ELEKTRISEERT.</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Sinds januari 2026 integreert Remitrans 5 elektrische vrachtwagens en 2 elektrische terminaltrekkers.
                In samenwerking met Shell is het eerste semipublieke laadpunt voor e-trucks in Wallonië operationeel.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4291E] hover:text-[#B82218] transition-colors">
                Meer informatie →
              </Link>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image src="/images/fh-electric.jpg" alt="Volvo FH Electric Remitrans" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image src="/images/electric-truck-2.jpg" alt="Elektrische vrachtwagen Remitrans" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden col-span-2">
                  <Image src="/images/shell-charging.png" alt="Shell laadstation Remitrans" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6 pt-16">
        <FadeIn>
          <div className="bg-[#D4291E] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Nood aan transport?</h2>
              <p className="text-white/70">Ons team reageert binnen 24 uur.</p>
            </div>
            <Link href="/contact" className="shrink-0 px-8 py-4 rounded-full bg-white text-[#0A0A0A] font-bold text-sm hover:bg-white/90 transition-all">
              Offerte aanvragen
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
