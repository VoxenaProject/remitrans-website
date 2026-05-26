import Image from "next/image"
import Link from "next/link"
import { stats, services, certifications, news } from "@/lib/data"
import FadeIn from "@/components/FadeIn"
import AnimatedCounter from "@/components/AnimatedCounter"
import HeroVideo from "@/components/HeroVideo"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center md:items-end pt-24 md:pt-0 pb-12 md:pb-20 overflow-hidden">
        <HeroVideo />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4291E] animate-pulse" />
            <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
              Sinds 1967 — Ninove, België
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 max-w-4xl text-white">
            TRANSPORT
            <br />
            <span className="text-[#D4291E]">&</span> LOGISTIEK
            <br />
            MET ZEKERHEID.
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-xl mb-10 leading-relaxed">
            150 trekkers. 250 opleggers. 60.000&nbsp;m² opslag.
            <br />
            ISO 22000, Kosher & SQAS gecertificeerd.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-[#D4291E] hover:bg-[#B82218] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
            >
              Offerte aanvragen
            </Link>
            <Link
              href="/transport"
              className="px-7 py-3.5 rounded-full border border-white/30 hover:border-white/60 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              Onze diensten →
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#E5E5E3] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-0 md:divide-x divide-[#E5E5E3]">
            {stats.map((s, i) => (
              <FadeIn
                key={s.label}
                delay={i * 0.08}
                className="flex flex-col items-center md:items-start md:px-8 first:pl-0 last:pr-0 gap-1"
              >
                <span className="text-4xl md:text-5xl font-black text-[#0A0A0A] tabular-nums leading-none">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs text-[#6B7280] font-medium tracking-wide">{s.label}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 md:mb-16 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">
                Onze activiteiten
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0A0A0A]">
                DRIE DIVISIES,
                <br />
                ÉÉN EXPERTISE.
              </h2>
            </div>
            <Link href="/transport" className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">
              Alles bekijken →
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E3] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.12}>
              <Link
                href={s.href}
                className="group relative block bg-white hover:bg-[#F7F7F5] transition-colors duration-300 p-8 h-full"
              >
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-3 block">
                  {s.number}
                </span>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#D4291E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">{s.description}</p>

                <ul className="flex flex-col gap-1.5">
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                      <span className="w-1 h-1 rounded-full bg-[#D4291E] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] group-hover:text-[#D4291E] transition-colors">
                  Meer informatie
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 border-y border-[#E5E5E3] bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#9CA3AF] text-center mb-10">
              Certificeringen & labels
            </p>
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

      {/* NIEUWS */}
      <section className="py-16 md:py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 md:mb-16 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">
                Nieuws
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0A0A0A]">
                REMITRANS
                <br />
                IN BEWEGING.
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <FadeIn key={n.title} delay={i * 0.1}>
              <article className="group bg-white border border-[#E5E5E3] rounded-2xl overflow-hidden hover:border-[#D4291E]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={n.image}
                    alt={n.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#D4291E] text-white uppercase tracking-wide">
                    {n.tag}
                  </span>
                </div>
                <div className="p-6">
                  <time className="text-[10px] text-[#9CA3AF] tracking-wide uppercase font-medium">{n.date}</time>
                  <h3 className="text-base font-bold text-[#0A0A0A] mt-2 mb-3 leading-snug group-hover:text-[#D4291E] transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{n.excerpt}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* VACATURES CTA */}
      <section className="pb-16 md:pb-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A]">
            <div className="absolute inset-0 opacity-25">
              <Image src="/images/team-50ans.jpg" alt="Team Remitrans" fill className="object-cover object-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
            <div className="relative z-10 px-10 md:px-16 py-16 md:py-20 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-4">
                Vacatures
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
                WORD DEEL VAN
                <br />
                ONS TEAM.
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                116 gepassioneerde medewerkers. Chauffeurs, logistici, planners —
                Remitrans groeit en werft continu.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0A0A0A] font-semibold text-sm hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
              >
                Bekijk vacatures →
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
