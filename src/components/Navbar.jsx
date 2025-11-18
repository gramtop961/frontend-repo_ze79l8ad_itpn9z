import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="logo" className="h-8 w-8" />
            <span className="font-semibold text-slate-900">Blue Ledger Accountants</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <button onClick={() => scrollTo('services')} className="hover:text-slate-900">Services</button>
            <button onClick={() => scrollTo('why')} className="hover:text-slate-900">Why us</button>
            <button onClick={() => scrollTo('testimonials')} className="hover:text-slate-900">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Get a quote</button>
          </div>
          <button onClick={toggle} className="md:hidden p-2 rounded hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollTo('services')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-100">Services</button>
            <button onClick={() => scrollTo('why')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-100">Why us</button>
            <button onClick={() => scrollTo('testimonials')} className="block w-full text-left px-3 py-2 rounded hover:bg-slate-100">Reviews</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Get a quote</button>
          </div>
        )}
      </nav>
    </header>
  )
}
