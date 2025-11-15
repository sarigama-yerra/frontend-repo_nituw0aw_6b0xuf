import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-white/70 bg-white/10 ring-1 ring-white/20 rounded-full px-3 py-1 w-fit mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400" />
            AI-powered dermatology platform
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Smarter skin assessments with an AI voice agent aura
          </h1>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-prose">
            Meet AI-Derm: a modern, privacy-first assistant that helps triage skin concerns in seconds. Upload images, describe symptoms, and get evidence-backed guidance.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 font-medium px-5 py-3 shadow-lg hover:shadow-xl transition-shadow">
              Get started
            </a>
            <a href="#technology" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white font-medium px-5 py-3 ring-1 ring-white/20 hover:bg-white/15">
              Explore technology
            </a>
          </div>
        </div>
        <div className="lg:col-span-6" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.12),transparent_60%)]" />
    </section>
  )
}
