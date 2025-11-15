import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { TechSection, SolutionsSection, HowSection, CTASection } from './components/Sections'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TechSection />
        <SolutionsSection />
        <HowSection />
        <CTASection />
        <footer id="about" className="py-16 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-orange-400 mb-3" />
                <p className="text-white/70">AI-powered dermatology. Modern, secure, and built for care teams.</p>
              </div>
              <div>
                <div className="font-semibold">Company</div>
                <ul className="mt-3 space-y-2 text-white/70">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <div className="font-semibold">Legal</div>
                <ul className="mt-3 space-y-2 text-white/70">
                  <li><a href="#" className="hover:text-white">Privacy</a></li>
                  <li><a href="#" className="hover:text-white">Terms</a></li>
                  <li><a href="#" className="hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-10 text-sm text-white/50">© 2025 AI-Derm. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
