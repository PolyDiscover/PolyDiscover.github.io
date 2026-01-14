

function App() {
  return (
    <div className="flex-col min-h-screen">
      <main className="container flex-col items-center flex-grow">
        
        {/* Hero Section */}
        <section className="text-center mb-8 pt-24">
          <div className="mb-6 flex justify-center">
             <img src="/logo.png" alt="PolyDiscover Logo" className="w-16 h-16 rounded-xl shadow-lg" />
          </div>
          <h1 className="mb-6 text-slate-900 tracking-tight">PolyDiscover</h1>
          <p className="hero-subtext mx-auto">
            The professional interface for Polymarket. Instant discovery, real-time context, and distraction-free intelligence.
          </p>
          
          <div className="flex-col items-center gap-4">
            <a href="https://chrome.google.com/webstore" className="cta-button btn btn-primary" onClick={(e) => e.preventDefault()}>
              Add to Chrome - It's Free!
            </a>
          </div>
        </section>

        <section className="section w-full">
          <div className="grid-3 px-4">
            <div className="flex-col items-center text-center gap-6 bg-white p-8 rounded-2xl shadow-premium h-full transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <div className="flex-col gap-3">
                <h3 className="text-lg">Fast Discovery</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Instantly search and filter thousands of markets without navigating complex menus. Speed is our priority.
                </p>
              </div>
            </div>
            
            <div className="flex-col items-center text-center gap-6 bg-white p-8 rounded-2xl shadow-premium h-full transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4 v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4 v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <div className="flex-col gap-3">
                <h3 className="text-lg">Contextual Intelligence</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Get critical market data, probabilities, and trends at a glance. Make informed decisions faster.
                </p>
              </div>
            </div>
            
            <div className="flex-col items-center text-center gap-6 bg-white p-8 rounded-2xl shadow-premium h-full transition-transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="flex-col gap-3">
                <h3 className="text-lg">Seamless Integration</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Lives quietly in your browser. One click away when you need it, invisible when you don't.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why PolyDiscover */}
        <section className="section w-full">
          <div className="bg-white p-8 rounded-xl border border-slate-200">
            <h2 className="text-center mb-8">Built for Professionals</h2>
            <ul className="flex-col gap-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-slate-700">Zero tracking, no analytics, and no cookies. Your research remains private.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-slate-700">Lightweight architecture ensures zero impact on browser performance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-slate-700">Open source and audible code for complete transparency.</span>
              </li>
            </ul>
          </div>
        </section>

      </main>

      <footer className="footer container text-center">
        <p className="mb-2">© {new Date().getFullYear()} PolyDiscover. All rights reserved.</p>
        <p className="text-xs max-w-lg mx-auto opacity-70">
          PolyDiscover is an independent tool and is not affiliated with, endorsed by, or sponsored by Polymarket.
        </p>
      </footer>
    </div>
  );
}

export default App;
