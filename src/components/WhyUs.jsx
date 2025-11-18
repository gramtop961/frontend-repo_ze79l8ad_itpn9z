export default function WhyUs() {
  const points = [
    { title: "UK regulated", desc: "ICAEW/ACCA qualified team with practice experience." },
    { title: "Fixed fees", desc: "Simple monthly packages with no surprises." },
    { title: "Proactive advice", desc: "Tax planning and reminders before deadlines." },
    { title: "Modern tools", desc: "Xero, QuickBooks, Dext and Open Banking automations." },
  ]
  return (
    <section id="why" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Why choose us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="rounded-xl bg-white ring-1 ring-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
