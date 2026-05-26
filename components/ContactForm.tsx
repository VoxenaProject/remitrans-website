"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulated submit — wire up to Resend/API route when deploying
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="bg-[#F7F7F5] border border-[#E5E5E3] rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[#D4291E]/10 border border-[#D4291E]/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-[#D4291E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">Bericht verzonden!</h3>
        <p className="text-sm text-[#6B7280]">Ons team neemt binnen 24 uur contact met u op.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">Naam *</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Jan Janssen"
            className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#D4291E] transition-colors" />
        </div>
        <div>
          <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">Bedrijf</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Uw bedrijf"
            className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#D4291E] transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">E-mail *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jan@bedrijf.be"
            className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#D4291E] transition-colors" />
        </div>
        <div>
          <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">Telefoon</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+32 4XX XX XX XX"
            className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#D4291E] transition-colors" />
        </div>
      </div>
      <div>
        <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">Dienst</label>
        <select name="service" value={form.service} onChange={handleChange}
          className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#D4291E] transition-colors appearance-none">
          <option value="">Selecteer een dienst</option>
          <option value="bulk">Bulkvervoer</option>
          <option value="tarp">Huifvervoer</option>
          <option value="logistics">Logistiek & Warehousing</option>
          <option value="cleaning">Reiniging</option>
          <option value="career">Sollicitatie</option>
          <option value="other">Andere</option>
        </select>
      </div>
      <div>
        <label className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium block mb-1.5">Bericht *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Beschrijf uw vraag..."
          className="w-full bg-white border border-[#E5E5E3] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#D1D5DB] focus:outline-none focus:border-[#D4291E] transition-colors resize-none" />
      </div>
      <p className="text-xs text-[#9CA3AF]">
        Door dit formulier in te dienen, gaat u akkoord met de verwerking van uw gegevens conform ons privacybeleid.
      </p>
      <button type="submit" disabled={status === "loading"}
        className="w-full py-4 rounded-xl bg-[#D4291E] hover:bg-[#B82218] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? "Verzenden..." : "Bericht verzenden"}
      </button>
    </form>
  )
}
