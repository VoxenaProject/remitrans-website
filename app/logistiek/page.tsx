import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/FadeIn"

export const metadata: Metadata = {
  title: "Logistiek",
  description: "60.000 m² beveiligde opslagruimte in Ninove. Spooraansluiting, orderpicking, WMS, ISO 22000.",
}

const services = [
  { icon: "🏭", title: "Beveiligde opslag", text: "50.000 m² buiten + 45.000 m² binnen, nuttige hoogte 10 m. Toegangscontrole 24/7." },
  { icon: "📦", title: "Orderpicking", text: "Nauwkeurige en snelle ordervoorbereiding. WMS-systeem voor volledige traceerbaarheid." },
  { icon: "🚂", title: "Spooraansluiting", text: "3 sites met spoorverbinding. 2 sporen van 550 m voor de langste goederentreinen." },
  { icon: "🔄", title: "Laden & lossen", text: "Gespecialiseerde teams, heftrucks, laadkaaien aangepast aan alle goederentypes." },
  { icon: "☀️", title: "Zonne-energie", text: "Alle magazijnen uitgerust met zonnepanelen sinds eind 2013. Eigen duurzame energieproductie." },
  { icon: "✅", title: "ISO 22000 / HACCP", text: "Voedselveiligheidscertificering. Strikte procedures voor de opslag van levensmiddelen." },
]

const specs = [
  { value: "60.000", unit: "m²", label: "Totale oppervlakte" },
  { value: "26.000", unit: "m²", label: "Verbonden met spoor" },
  { value: "10", unit: "m", label: "Nuttige hoogte" },
  { value: "550", unit: "m", label: "Lengte spoorweg" },
]

export default function LogistiekPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/forklift.jpg" alt="Logistieke magazijnen Remitrans" fill className="object-cover object-center opacity-25" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Logistiek & Warehousing</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none text-white">
              60.000 M²<br /><span className="text-[#D4291E]">AAN OPLOSSINGEN.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Opslag, orderpicking, spooraansluiting en volledige logistieke dienstverlening vanuit Ninove.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-[#E5E5E3] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#E5E5E3]">
            {specs.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="flex flex-col items-center md:items-start md:px-10 first:pl-0 last:pr-0 gap-1">
                <span className="text-4xl md:text-5xl font-black text-[#0A0A0A] leading-none">
                  {s.value}<span className="text-[#D4291E] text-2xl">{s.unit}</span>
                </span>
                <span className="text-xs text-[#6B7280] font-medium tracking-wide">{s.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Diensten</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-[#0A0A0A]">ONZE LOGISTIEKE<br />DIENSTEN.</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 hover:border-[#D4291E]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full">
                <span className="text-2xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-bold text-[#0A0A0A] mb-3">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#F7F7F5] border-y border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Multimodaal</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-[#0A0A0A]">VERBONDEN MET<br />HET SPOORNETWERK.</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Drie vestigingen met directe spoorverbinding — twee sporen van 550 m voor de langste goederentreinen.
                Intermodale oplossing: spoor + weg voor maximale efficiëntie.
              </p>
              {["Snelle lossing van goederentreinen", "Vermindering van de CO₂-voetafdruk", "Intermodale oplossing spoor + weg"].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#374151] mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4291E]" />{item}
                </div>
              ))}
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-52 rounded-xl overflow-hidden">
                  <Image src="/images/still-11.jpg" alt="Spooraansluiting Remitrans" fill className="object-cover" />
                </div>
                <div className="relative h-52 rounded-xl overflow-hidden">
                  <Image src="/images/still-6.jpg" alt="Magazijn Remitrans" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-16 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="bg-[#D4291E] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Opslagruimte nodig?</h2>
              <p className="text-white/70">Spreek vandaag nog met ons logistiek team.</p>
            </div>
            <Link href="/contact" className="shrink-0 px-8 py-4 rounded-full bg-white text-[#0A0A0A] font-bold text-sm hover:bg-white/90 transition-all">
              Contacteer ons
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
