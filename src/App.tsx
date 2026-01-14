

function App() {
  return (
    <div className="flex-col min-h-screen">
      <main className="container flex-col items-center flex-grow">
        
        {/* Hero Section */}
        <section className="section text-center mb-16 pt-24">
          <div className="mb-6 flex justify-center">
             <img src="/logo.png" alt="PolyDiscover Logo" className="w-16 h-16 rounded-xl shadow-lg" />
          </div>
          <h1 className="mb-6 text-slate-900 tracking-tight">PolyDiscover</h1>
          <p className="hero-subtext mx-auto">
            The professional interface for Polymarket. Instant discovery, real-time context, and distraction-free intelligence.
          </p>
          
          <div className="flex-col items-center gap-4">
            <a href="https://chrome.google.com/webstore" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
              Add to Chrome
            </a>
            <a href="https://chrome.google.com/webstore" className="link-secondary" onClick={(e) => e.preventDefault()}>
              View on Chrome Web Store
            </a>
          </div>
        </section>

        {/* How it works */}
        <section className="section w-full border-t border-slate-100">
          <div className="grid-3">
            <div className="flex-col gap-2">
              <h3>Fast Discovery</h3>
              <p className="text-sm">
                Instantly search and filter thousands of markets without navigating complex menus. Speed is our priority.
              </p>
            </div>
            <div className="flex-col gap-2">
              <h3>Contextual Intelligence</h3>
              <p className="text-sm">
                Get critical market data, probabilities, and trends at a glance. Make informed decisions faster.
              </p>
            </div>
            <div className="flex-col gap-2">
              <h3>Seamless Integration</h3>
              <p className="text-sm">
                Lives quietly in your browser. One click away when you need it, invisible when you don't.
              </p>
            </div>
          </div>
        </section>

        {/* Why PolyDiscover */}
        <section className="section w-full">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
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
