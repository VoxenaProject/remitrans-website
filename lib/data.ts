export const stats = [
  { value: 1967, label: "Opgericht", suffix: "" },
  { value: 2219, label: "Tevreden klanten", suffix: "+" },
  { value: 150, label: "Trekkers", suffix: "" },
  { value: 116, label: "Medewerkers", suffix: "" },
  { value: 60000, label: "m² opslagruimte", suffix: "" },
]

export const services = [
  {
    number: "01",
    title: "Bulkvervoer",
    description:
      "65 trekkers en 100 opleggers voor nationaal en internationaal bulkvervoer. SQAS-gecertificeerd reinigingsstation met 980 m³ siloopslag.",
    features: [
      "80 silo's van 60 m³",
      "50 eenheden PP/kunststoffen",
      "12 soorten mineralen",
      "3 onderlossers",
      "SQAS & ISO 22000 gecertificeerd",
      "Kosjere certificering",
    ],
    image: "/images/still-9.jpg",
    href: "/transport",
  },
  {
    number: "02",
    title: "Huifvervoer",
    description:
      "85 trekkers en 150 huifopleggers gespecialiseerd in retail- en drankenvervoer. Complete oplossingen voor alle soorten lading.",
    features: [
      "België – Luxemburg – Frankrijk – Nederland",
      "Volle ladingen",
      "Deelpartijen",
      "XL-Tautliners",
      "City-trailers",
      "Meeneemheftruck",
    ],
    image: "/images/still-2.jpg",
    href: "/transport",
  },
  {
    number: "03",
    title: "Logistiek & Warehousing",
    description:
      "60.000 m² beveiligde opslagruimte waarvan 26.000 m² met spooraansluiting. Volledige logistieke ketenbeheersing.",
    features: [
      "50.000 m² buitenopslag",
      "45.000 m² binnenopslag",
      "Nuttige hoogte: 10 m",
      "Spooraansluiting (2 sporen × 550 m)",
      "Orderpicking & WMS",
      "ISO 22000 / HACCP",
    ],
    image: "/images/forklift.jpg",
    href: "/logistiek",
  },
]

export const certifications = [
  { name: "ISO 22000", description: "Voedselveiligheid" },
  { name: "FoodChain", description: "Voedselketen" },
  { name: "Kosher", description: "Kosjere certificering" },
  { name: "SQAS", description: "Safety & Quality Assessment" },
  { name: "Green Truck", description: "Award 2018" },
  { name: "Lean & Green", description: "Duurzame logistiek" },
  { name: "VCA", description: "Veiligheid op de werkvloer" },
  { name: "GMP+", description: "Diervoedertransport" },
]

export const news = [
  {
    date: "16 januari 2026",
    title: "5 elektrische vrachtwagens versterken de vloot",
    excerpt:
      "Remitrans integreert 5 elektrische vrachtwagens en 2 elektrische terminaltrucks in zijn vloot. Een grote stap in onze energietransitie.",
    image: "/images/fh-electric.jpg",
    tag: "Innovatie",
  },
  {
    date: "8 december 2025",
    title: "Eerste semipubliek laadstation voor e-trucks in Wallonië",
    excerpt:
      "In samenwerking met Shell opent Remitrans het eerste semipublieke laadstation voor elektrische vrachtwagens in Wallonië.",
    image: "/images/shell-charging.png",
    tag: "Duurzaamheid",
  },
  {
    date: "14 juli 2018",
    title: "Truckwash & siloreiniging met herwonnen regenwater",
    excerpt:
      "Opening van een reinigingsstation in Ninove met voedsel- en niet-voedsellijnen, gebruikmakend van herwonnen regenwater.",
    image: "/images/cleaning-station.jpg",
    tag: "Milieu",
  },
]

export const timeline = [
  {
    year: "1967",
    title: "Oprichting",
    text: "Remi Dedoncker lanceert de eerste Remitrans-vrachtwagen in Kester, in het Pajottenland. Aanvankelijk landbouwtransport.",
  },
  {
    year: "Begin jaren '70",
    title: "Nationale uitbreiding",
    text: "De vloot breidt uit met silowagens voor nationale en internationale routes.",
  },
  {
    year: "1980",
    title: "Diversificatie",
    text: "Remitrans neemt opslag en distributie op zich voor Brico-winkels door heel België.",
  },
  {
    year: "1991",
    title: "Ninove",
    text: "Nieuwe vestiging in Ninove — moderne magazijnen, strategische ligging nabij snelwegen naar het zuiden en westen van België.",
  },
  {
    year: "2009",
    title: "Multimodaal",
    text: "Aankoop van het eerste multimodale magazijn (~10.000 m²) grenzend aan spoorweginfrastructuur.",
  },
  {
    year: "2018",
    title: "Green Truck Award",
    text: "Remitrans ontvangt de Green Truck Award voor de integratie van milieuvriendelijkheid in de Belgische vloot.",
  },
  {
    year: "2026",
    title: "Elektrificatie",
    text: "5 elektrische vrachtwagens en 2 elektrische terminaltrucks. Eerste e-truck laadstation in Wallonië met Shell.",
  },
]

export const contacts = {
  bulk: {
    label: "Bulkvervoer",
    manager: { name: "Ronald Dedoncker", email: "ronald.dedoncker@remitrans.be", phone: "054 31 77 91" },
    planning: { name: "Jeremy Boddaert & Johan Mertens", email: "remitransbulk@remitrans.be", phone: "054 31 77 98" },
    quality: { name: "Sofie Eeckhout", email: "sofie.eeckhout@remitrans.be", phone: "054 31 14 83" },
    cleaning: { name: "Johan Mertens", email: "Johan.mertens@remitrans.be", phone: "054/31 14 81" },
    invoices: "invoices@remitrans.be",
  },
  tarp: {
    label: "Huifvervoer",
    manager: { name: "Manu Opsomer", email: "manu.opsomer@remitrans.be", phone: "054 31 14 88" },
    benelux: { name: "Frederik Huygh", email: "frederik@remitrans.be", phone: "054 24 29 10" },
    international: { email: "inter@remitrans.be", phone: "054 31 77 92" },
    invoices: "invoices@remitrans.be",
  },
  logistics: {
    label: "Logistiek & Warehousing",
    manager: { name: "Frank Coppens", email: "frank.coppens@remitrans.be", phone: "054 31 14 86" },
    account: { name: "Bart Vandensteen", phone: "0490/64.64.63" },
    delivery: { phone: "054 31 14 84", email: "maxeda.ninove@remitrans.be" },
    invoices: { name: "Lieselot Kiekens", phone: "054 31 77 97" },
    accounting: { name: "Vanessa Dedoncker", phone: "054 31 14 82" },
  },
}

export const entities = [
  { name: "Remitrans NV", address: "Pamelstraat-Oost 447", city: "9400 Ninove", vat: "BE 0454 234 370" },
  { name: "Rovadis NV", address: "Pamelstraat-Oost 447", city: "9400 Ninove", vat: "BE 0453 362 063" },
  { name: "RT Logistics NV", address: "Pamelstraat-Oost 412", city: "9400 Ninove", vat: "BE 0830 768 277" },
]
