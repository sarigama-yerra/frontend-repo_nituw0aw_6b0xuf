export function TechSection() {
  const stats = [
    { k: '95%', v: 'coverage', d: 'Dermatology conditions covered' },
    { k: '30s', v: 'triage', d: 'Average assessment time' },
    { k: 'HIPAA', v: 'compliant', d: 'Privacy-first infrastructure' },
  ]

  return (
    <section id="technology" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Clinical-grade AI, built for dermatology</h2>
            <p className="mt-6 text-slate-600 text-lg">Our models are trained on peer-reviewed datasets and continuously improved with clinician feedback. Every suggestion includes confidence levels and next-step guidance.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              <li className="p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200">Real-time voice and chat interface</li>
              <li className="p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200">Computer vision for skin imaging</li>
              <li className="p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200">Evidence-backed recommendations</li>
              <li className="p-4 rounded-xl bg-slate-50 ring-1 ring-slate-200">On-prem or cloud deployments</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.d} className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 ring-1 ring-slate-200 shadow-sm">
                <div className="text-3xl font-semibold text-slate-900">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">{s.v}</div>
                <p className="mt-2 text-slate-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SolutionsSection() {
  const items = [
    { title: 'Clinics', desc: 'Streamline triage and patient intake with automated symptom capture and risk stratification.' },
    { title: 'Telederm', desc: 'Offer instant AI-assisted consultations and follow-ups with patient education.' },
    { title: 'Research', desc: 'Accelerate trials with consistent, structured phenotype capture from imagery and voice.' },
  ]
  return (
    <section id="solutions" className="relative py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-lg font-semibold text-slate-900">{it.title}</div>
              <p className="mt-2 text-slate-600">{it.desc}</p>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400 rounded-full group-hover:w-24 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowSection() {
  const steps = [
    { n: '01', t: 'Capture', d: 'Upload images or speak with the agent. We extract structured context securely.' },
    { n: '02', t: 'Analyze', d: 'Vision models and LLMs assess likely conditions with confidence bands.' },
    { n: '03', t: 'Guide', d: 'Receive next steps: home care, OTC options, or see a specialist.' },
  ]
  return (
    <section id="how" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="p-6 rounded-2xl bg-slate-50 ring-1 ring-slate-200">
              <div className="text-sm font-mono text-slate-500">{s.n}</div>
              <div className="text-xl font-semibold text-slate-900">{s.t}</div>
              <p className="mt-2 text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-10 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-orange-400/20 ring-1 ring-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Build with AI-Derm</h3>
              <p className="mt-2 text-white/80">Integrate our SDK to add AI triage and education to your product. HIPAA-ready with robust audit logs.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-5 py-3 shadow-lg hover:shadow-xl transition-shadow">Request demo</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-medium px-5 py-3 ring-1 ring-white/20 hover:bg-white/15">View docs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
