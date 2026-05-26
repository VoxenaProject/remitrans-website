import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Reiniging",
  description: "SQAS & EFTCO gecertificeerd reinigingsstation in Ninove. Voedsel- en niet-voedsellijnen, kosjere certificering.",
}

const features = [
  { title: "EFTCO Standaard", text: "Gecertificeerd EFTCO-station voor het reinigen van tanks en silo's volgens Europese normen." },
  { title: "EFTCO Food", text: "Aparte voedsellijn voor het reinigen van recipiënten bestemd voor levensmiddelen." },
  { title: "Kosjere certificering", text: "Gecertificeerde kosjere reiniging voor klanten met strikte religieuze vereisten." },
  { title: "Herwonnen regenwater", text: "Gebruik van herwonnen regenwater voor reinigingsoperaties. Concreet milieubewustzijn." },
  { title: "SQAS gecertificeerd", text: "Safety & Quality Assessment System. Eén van de ±20 sites in België met deze certificering." },
  { title: "980 m³ silo's", text: "Opslagcapaciteit in silo's voor poeders, kunststoffen en bulkgoederen." },
]

export default function ReinigingPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/eftco.jpg" alt="Reinigingsstation Remitrans" fill className="object-cover object-center opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Reiniging</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none text-white">
              GECERTIFICEERDE<br /><span className="text-[#D4291E]">REINIGING.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              SQAS & EFTCO reinigingsstation in Ninove. Voedsel- en niet-voedsellijnen, kosjere certificering, herwonnen regenwater.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Diensten</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-[#0A0A0A]">KWALITEIT &<br />VOEDSELVEILIGHEID.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E3] rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="bg-white hover:bg-[#F7F7F5] transition-colors p-8 h-full">
                <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">0{i + 1}</span>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-3">{f.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{f.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-10 bg-[#F7F7F5] border-y border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/images/cleaning-station.jpg", "/images/still-12.jpg", "/images/still-13.jpg", "/images/eftco.jpg"].map((src, i) => (
              <FadeIn key={src} delay={i * 0.08}>
                <div className="relative h-44 md:h-56 rounded-xl overflow-hidden">
                  <Image src={src} alt={`Reinigingsstation Remitrans ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Certificeringen</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-[#0A0A0A]">
              EEN VAN DE ±20<br />GECERTIFICEERDE SITES<br />IN BELGIË.
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              België telt ongeveer 20 reinigingsstations met SQAS-certificering. Remitrans is er één van,
              wat onze klanten de garantie geeft van de hoogste kwaliteits- en traceerbaarheidsnormen.
            </p>
            <div className="flex flex-wrap gap-3">
              {["EFTCO", "EFTCO Food", "SQAS", "Kosher", "ISO 22000"].map((c) => (
                <span key={c} className="px-4 py-2 rounded-full border border-[#E5E5E3] bg-white text-sm font-semibold text-[#0A0A0A] hover:border-[#D4291E]/40 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-2xl p-10">
              <p className="text-5xl font-black text-[#0A0A0A] mb-2">~20</p>
              <p className="text-sm text-[#6B7280] mb-8">SQAS-gecertificeerde sites in België. Remitrans is er één van.</p>
              <div className="border-t border-[#E5E5E3] pt-6">
                <p className="text-sm text-[#374151] leading-relaxed italic">
                  &ldquo;Zo&apos;n spoeling duurt minstens een uur — wij doen geen compromissen over de kwaliteit van de reiniging.&rdquo;
                </p>
                <p className="text-xs text-[#9CA3AF] mt-3">— Kwaliteitsmanager, Remitrans</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="bg-[#D4291E] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Gecertificeerde reiniging nodig?</h2>
              <p className="text-white/70">Contacteer Johan Mertens — 054/31 14 81</p>
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
