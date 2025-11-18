export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Chartered accountants for UK SMEs
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Fixed-fee accounting, proactive tax planning and real-time advice. We help limited companies, contractors and startups stay compliant and grow.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-center">Get a free quote</a>
              <a href="#services" className="px-6 py-3 rounded-md bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 text-center">See our services</a>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              HMRC recognised • Making Tax Digital ready • QuickBooks & Xero partners
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 flex items-center justify-center">
              <div className="p-6 text-center">
                <p className="text-slate-700 font-medium">Trusted by 300+ UK businesses</p>
                <div className="mt-3 flex items-center justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-slate-500">4.9 average rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
