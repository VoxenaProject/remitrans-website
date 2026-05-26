import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { timeline, certifications } from "@/lib/data"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Over ons",
  description: "Opgericht in 1967 door Remi Dedoncker in Kester. Vandaag geleid door Ronald en Vanessa Dedoncker. 116 medewerkers, 2219 klanten, Green Truck Award 2018.",
}

const values = [
  { title: "Betrouwbaarheid", text: "51 jaar ononderbroken dienstverlening. Onze klanten rekenen op ons omdat we nooit teleurstellen." },
  { title: "Innovatie", text: "Eerste LNG in Belgische vloot, Green Truck Award 2018, elektrificatie van de vloot in 2026." },
  { title: "Duurzaamheid", text: "Herwonnen water, zonnepanelen, elektrische trucks, e-truck station in Wallonië met Shell." },
  { title: "Excellentie", text: "\"Alleen het beste is goed genoeg\" — de filosofie van Remi Dedoncker, nog steeds levend." },
]

export default function OverOnsPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-50ans.jpg" alt="Team Remitrans 50 jaar" fill className="object-cover object-center opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Over ons</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none text-white">
              OPGERICHT IN 1967.
              <br /><span className="text-[#D4291E]">ALTIJD IN BEWEGING.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Remi Dedoncker begon met één vrachtwagen in Kester. Vandaag leiden zijn kinderen Ronald en Vanessa een toonaangevende transportgroep in België.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Onze geschiedenis</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-[#0A0A0A]">EEN EEUW<br />IN AANBOUW.</h2>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#E5E5E3] -translate-x-1/2" />
          <div className="flex flex-col gap-0">
            {timeline.map((t, i) => (
              <FadeIn key={t.year} delay={i * 0.08}>
                <div className={`relative flex items-start gap-8 pb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-white border border-[#E5E5E3] rounded-2xl p-6 inline-block w-full hover:border-[#D4291E]/30 hover:shadow-sm transition-all">
                      <span className="text-sm font-black text-[#D4291E] block mb-1">{t.year}</span>
                      <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">{t.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{t.text}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-[#D4291E] -translate-x-1/2 z-10 ring-4 ring-white" />
                  <div className="hidden md:block flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5] border-y border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Onze waarden</span>
            <h2 className="text-4xl font-black tracking-tight mb-12 text-[#0A0A0A]">WAT ONS<br />DEFINIEERT.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white border border-[#E5E5E3] rounded-2xl p-6 hover:border-[#D4291E]/30 hover:shadow-sm transition-all h-full">
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Ons team</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-[#0A0A0A]">116 MENSEN.<br />ÉÉN MISSIE.</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Chauffeurs, logistici, planners, boekhoudkundigen — 116 medewerkers delen dezelfde ambitie:
              onze klanten een onberispelijke dienstverlening bieden, dag na dag, vanuit Ninove.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Het familiale management zorgt voor de continuïteit van de stichtende waarden: Ronald en Vanessa Dedoncker,
              kinderen van oprichter Remi, zetten een cultuur van excellentie voort die dateert van 1967.
            </p>
          </FadeIn>
          <FadeIn direction="right">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image src="/images/team-50ans.jpg" alt="Team Remitrans — 50 jaar" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-xs font-semibold text-[#0A0A0A]">50 jaar Remitrans — 2017</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-[#E5E5E3] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] text-center mb-10">Onze certificeringen & erkenningen</p>
          </FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {certifications.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-1 px-5 py-3 rounded-xl border border-[#E5E5E3] bg-white hover:border-[#D4291E]/30 hover:shadow-sm transition-all">
                  <span className="text-sm font-bold text-[#0A0A0A]">{c.name}</span>
                  <span className="text-[10px] text-[#9CA3AF] tracking-wide">{c.description}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight mb-6 text-[#0A0A0A]">LATEN WE<br />SAMENWERKEN.</h2>
            <p className="text-[#6B7280] mb-8 leading-relaxed">
              Nood aan een betrouwbare logistieke partner in België? Contacteer ons — ons team reageert binnen 24 uur.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4291E] hover:bg-[#B82218] text-white font-semibold transition-all duration-200 hover:scale-[1.02]">
              Contacteer ons →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
