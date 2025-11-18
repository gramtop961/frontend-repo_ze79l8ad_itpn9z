export default function Services() {
  const services = [
    {
      title: "Annual accounts & Corporation Tax",
      desc: "End-to-end preparation and filing with HMRC & Companies House, with proactive tax planning included.",
    },
    {
      title: "Bookkeeping & VAT",
      desc: "Accurate monthly bookkeeping, MTD-compliant VAT returns and clear management reports.",
    },
    {
      title: "Payroll & CIS",
      desc: "Weekly or monthly payroll, pensions and CIS submissions handled for you.",
    },
    {
      title: "Personal tax (Self Assessment)",
      desc: "Tax returns for directors and contractors with advice to optimise your take-home pay.",
    },
    {
      title: "Xero & QuickBooks setup",
      desc: "Software setup, data migration and training tailored to your business.",
    },
    {
      title: "R&D Tax Credits",
      desc: "Claim innovation reliefs compliantly with experienced advisors.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600">Clear, fixed monthly pricing. Cancel anytime.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl ring-1 ring-slate-200 p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
