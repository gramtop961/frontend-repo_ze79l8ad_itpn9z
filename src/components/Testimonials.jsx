export default function Testimonials() {
  const items = [
    { name: "Sara, e‑commerce founder", text: "Switched last year and wish we’d done it sooner. Clear reports and quick responses." },
    { name: "Daniel, contractor", text: "They set up my limited company, payroll and filings — hassle free." },
    { name: "Amrita, marketing agency", text: "Proactive advice saved us thousands in corporation tax." },
  ]
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">What clients say</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-6">
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm text-slate-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
