import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus({ ok: true })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl ring-1 ring-slate-200 p-8 bg-slate-50">
          <h2 className="text-3xl font-bold text-slate-900">Get a quote</h2>
          <p className="mt-2 text-slate-600">Tell us a bit about your business and we’ll come back within one working day.</p>
          <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div>
              <label className="block text-sm text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700">Service of interest</label>
              <select name="service" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600">
                <option value="">Select a service</option>
                <option>Annual Accounts</option>
                <option>Bookkeeping</option>
                <option>VAT Returns</option>
                <option>Payroll</option>
                <option>Self Assessment</option>
                <option>Corporate Tax</option>
                <option>CIS</option>
                <option>R&D Tax Credits</option>
                <option>Advisory</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700">Message</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div className="sm:col-span-2">
              <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">Submit</button>
            </div>
            {status?.ok && (
              <p className="sm:col-span-2 text-green-700">Thanks — we’ve received your details. We’ll be in touch soon.</p>
            )}
            {status?.ok === false && (
              <p className="sm:col-span-2 text-red-700">Something went wrong: {status.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
