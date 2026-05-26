import type { Metadata } from "next"
import { contacts, entities } from "@/lib/data"
import FadeIn from "@/components/FadeIn"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacteer Remitrans NV in Ninove. Bulkvervoer, huifvervoer en logistiek. Reactie binnen 24 uur.",
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#D4291E] block mb-3">Contact</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 leading-none text-[#0A0A0A]">LATEN WE<br />PRATEN.</h1>
          <p className="text-lg text-[#6B7280] max-w-lg leading-relaxed">
            Ons team reageert binnen 24 uur. Kies hieronder uw afdeling.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeIn delay={0}>
            <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 h-full hover:border-[#D4291E]/30 hover:shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">01</span>
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-6">{contacts.bulk.label}</h2>
              <div className="flex flex-col gap-5">
                <ContactRow label="Directeur" name={contacts.bulk.manager.name} email={contacts.bulk.manager.email} phone={contacts.bulk.manager.phone} />
                <ContactRow label="Planning" name={contacts.bulk.planning.name} email={contacts.bulk.planning.email} phone={contacts.bulk.planning.phone} />
                <ContactRow label="Kwaliteit & Veiligheid" name={contacts.bulk.quality.name} email={contacts.bulk.quality.email} phone={contacts.bulk.quality.phone} />
                <ContactRow label="Reiniging" name={contacts.bulk.cleaning.name} email={contacts.bulk.cleaning.email} phone={contacts.bulk.cleaning.phone} />
                <div className="pt-3 border-t border-[#E5E5E3]">
                  <p className="text-xs text-[#9CA3AF] mb-1">Facturatie</p>
                  <a href={`mailto:${contacts.bulk.invoices}`} className="text-sm text-[#374151] hover:text-[#D4291E] transition-colors">{contacts.bulk.invoices}</a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 h-full hover:border-[#D4291E]/30 hover:shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">02</span>
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-6">{contacts.tarp.label}</h2>
              <div className="flex flex-col gap-5">
                <ContactRow label="Directeur" name={contacts.tarp.manager.name} email={contacts.tarp.manager.email} phone={contacts.tarp.manager.phone} />
                <ContactRow label="Planning Benelux" name={contacts.tarp.benelux.name} email={contacts.tarp.benelux.email} phone={contacts.tarp.benelux.phone} />
                <div>
                  <p className="text-xs text-[#9CA3AF] mb-1">Internationaal transport</p>
                  <a href={`mailto:${contacts.tarp.international.email}`} className="text-sm text-[#374151] hover:text-[#D4291E] transition-colors block">{contacts.tarp.international.email}</a>
                  <a href={`tel:${contacts.tarp.international.phone}`} className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors mt-0.5 block">{contacts.tarp.international.phone}</a>
                </div>
                <div className="pt-3 border-t border-[#E5E5E3]">
                  <p className="text-xs text-[#9CA3AF] mb-1">Facturatie</p>
                  <a href={`mailto:${contacts.tarp.invoices}`} className="text-sm text-[#374151] hover:text-[#D4291E] transition-colors">{contacts.tarp.invoices}</a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white border border-[#E5E5E3] rounded-2xl p-8 h-full hover:border-[#D4291E]/30 hover:shadow-sm transition-all">
              <span className="text-xs font-mono font-bold text-[#D4291E] tracking-widest mb-4 block">03</span>
              <h2 className="text-xl font-bold text-[#0A0A0A] mb-6">{contacts.logistics.label}</h2>
              <div className="flex flex-col gap-5">
                <ContactRow label="Directeur" name={contacts.logistics.manager.name} email={contacts.logistics.manager.email} phone={contacts.logistics.manager.phone} />
                <div>
                  <p className="text-xs text-[#9CA3AF] mb-1">Account Manager</p>
                  <p className="text-sm font-medium text-[#0A0A0A]">{contacts.logistics.account.name}</p>
                  <a href={`tel:${contacts.logistics.account.phone}`} className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors">{contacts.logistics.account.phone}</a>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF] mb-1">Leveringscoördinatie</p>
                  <a href={`tel:${contacts.logistics.delivery.phone}`} className="text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors block">{contacts.logistics.delivery.phone}</a>
                  <a href={`mailto:${contacts.logistics.delivery.email}`} className="text-sm text-[#374151] hover:text-[#D4291E] transition-colors">{contacts.logistics.delivery.email}</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <h2 className="text-2xl font-black tracking-tight mb-8 text-[#0A0A0A]">STUUR EEN BERICHT</h2>
            <ContactForm />
          </FadeIn>
          <FadeIn direction="right">
            <h2 className="text-2xl font-black tracking-tight mb-8 text-[#0A0A0A]">ONZE ADRESSEN</h2>
            <div className="flex flex-col gap-4">
              {entities.map((e) => (
                <div key={e.name} className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-2xl p-6 hover:border-[#D4291E]/30 transition-all">
                  <h3 className="text-base font-bold text-[#0A0A0A] mb-1">{e.name}</h3>
                  <p className="text-sm text-[#6B7280]">{e.address}</p>
                  <p className="text-sm text-[#6B7280]">{e.city}</p>
                  <p className="text-xs text-[#9CA3AF] mt-2">BTW {e.vat}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(e.address + ", " + e.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#D4291E] hover:text-[#B82218] transition-colors mt-3"
                  >
                    Bekijk op kaart →
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function ContactRow({ label, name, email, phone }: { label: string; name: string; email: string; phone: string }) {
  return (
    <div>
      <p className="text-xs text-[#9CA3AF] mb-1">{label}</p>
      <p className="text-sm font-medium text-[#0A0A0A]">{name}</p>
      <a href={`mailto:${email}`} className="text-xs text-[#6B7280] hover:text-[#D4291E] transition-colors truncate block">{email}</a>
      <a href={`tel:${phone}`} className="text-xs text-[#6B7280] hover:text-[#0A0A0A] transition-colors">{phone}</a>
    </div>
  )
}
