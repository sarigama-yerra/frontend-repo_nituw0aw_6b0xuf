import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Technology', href: '#technology' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'How it works', href: '#how' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400" />
            <span className="font-semibold tracking-tight text-slate-900">AI Derm</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">
              Get started
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700">
                  {n.label}
                </a>
              ))}
              <a href="#cta" className="px-3 py-2 rounded-lg bg-slate-900 text-white text-center">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
