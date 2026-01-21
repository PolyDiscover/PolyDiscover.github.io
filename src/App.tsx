import { useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { AnimatedGlobe } from './components/AnimatedGlobe';

const faqData = [
  {
    id: 1,
    question: "How do I install PolyDiscover?",
    answer: (
      <>
        Installing PolyDiscover is simple and free. Visit the{' '}
        <a href="https://chromewebstore.google.com/detail/polydiscover/agebcajnepddkkdigcloncjdfnacmaji" className="faq-link" target="_blank" rel="noopener noreferrer">
          Chrome Web Store
        </a>
        , click "Add to Chrome," and you're ready to go. The extension will appear in your browser toolbar for instant access.
      </>
    )
  },
  {
    id: 2,
    question: "Where is the data sourced from?",
    answer: "All market data is sourced directly from Polymarket. We don't aggregate from third-party sources or cache outdated information—what you see is pulled straight from the source."
  },
  {
    id: 3,
    question: "Is the data live?",
    answer: "Yes, all data is live and updated in real-time. Every market displayed includes a direct link to view it on Polymarket, so you can verify and trade with confidence."
  },
  {
    id: 4,
    question: "Is PolyDiscover private and secure?",
    answer: "Absolutely. PolyDiscover is built with privacy at its core—no tracking, no analytics, no cookies. Your research activity stays completely private. The extension only requests the minimum permissions necessary to function."
  }
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="min-h-screen flex-col">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="PolyDiscover" />
            <span>PolyDiscover</span>
          </a>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
            <a
              href="https://chromewebstore.google.com/detail/polydiscover/agebcajnepddkkdigcloncjdfnacmaji"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Extension
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <motion.section
          className="hero container"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Free Chrome Extension
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Instant Polymarket Intelligence
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            The professional interface for Polymarket. Discover markets instantly, get real-time context, and make informed decisions—without leaving your browser.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a
              href="https://chromewebstore.google.com/detail/polydiscover/agebcajnepddkkdigcloncjdfnacmaji"
              className="btn btn-accent btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" y1="8" x2="12" y2="8" />
                <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
              </svg>
              Add to Chrome — It's Free
            </a>
          </motion.div>
        </motion.section>

        <div className="divider" />

        {/* Features Section */}
        <motion.section
          className="section container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Built for Speed</h2>
            <p>Everything you need to discover and analyze prediction markets, designed for professionals who value their time.</p>
          </motion.div>

          <motion.div className="feature-grid" variants={itemVariants}>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3>Instant Discovery</h3>
              <p>Search and filter thousands of markets in milliseconds. No complex navigation—just type and find.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <h3>Live Data</h3>
              <p>Real-time probabilities, volumes, and trends pulled directly from Polymarket. Always accurate, never stale.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3>Seamless Integration</h3>
              <p>Lives quietly in your browser toolbar. One click when you need it, invisible when you don't.</p>
            </div>
          </motion.div>
        </motion.section>

        <div className="divider" />

        {/* Benefits Section */}
        <motion.section
          className="section container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Why PolyDiscover</h2>
            <p>Designed with the principles that matter most to professionals.</p>
          </motion.div>

          <div className="benefits-grid">
            <motion.div className="benefit-item" variants={itemVariants}>
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Privacy First</h3>
                <p>Zero tracking, no analytics, no cookies. Your research activity stays completely private.</p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={itemVariants}>
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Lightweight</h3>
                <p>Zero impact on browser performance. Engineered for efficiency from the ground up.</p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={itemVariants}>
              <div className="benefit-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="benefit-content">
                <h3>Direct Source</h3>
                <p>Data sourced directly from Polymarket APIs. Accuracy and confidence in every query.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Edge Network Section */}
        <section className="edge-section">
          <motion.div
            className="container edge-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div className="edge-header" variants={itemVariants}>
              <h2>Global edge delivery</h2>
              <p>
                PolyDiscover leverages Cloudflare's worldwide network to serve market data from the edge—delivering real-time Polymarket intelligence with sub-100ms latency, anywhere in the world.
              </p>
              <div className="edge-cta">
                <span className="edge-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  Powered by Cloudflare Workers
                </span>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <AnimatedGlobe />
            </motion.div>
          </motion.div>
        </section>

        <div className="divider" />

        {/* FAQ Section */}
        <motion.section
          className="section container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Frequently Asked Questions</h2>
          </motion.div>

          <div className="faq-container">
            {faqData.map((faq) => (
              <motion.div
                key={faq.id}
                className={`faq-item ${openFaq === faq.id ? 'faq-item-open' : ''}`}
                variants={itemVariants}
              >
                <button
                  className="faq-summary"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={openFaq === faq.id}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: openFaq === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === faq.id && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className="faq-answer">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="divider" />

        {/* CTA Section */}
        <motion.section
          className="cta-section container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants}>Ready to get started?</motion.h2>
          <motion.p variants={itemVariants}>
            Join thousands of users discovering markets faster with PolyDiscover.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="https://chromewebstore.google.com/detail/polydiscover/agebcajnepddkkdigcloncjdfnacmaji"
              className="btn btn-accent btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Chrome — It's Free
            </a>
          </motion.div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="container footer-inner">
          <p className="footer-text">© {new Date().getFullYear()} PolyDiscover. All rights reserved.</p>
          <p className="footer-disclaimer">
            PolyDiscover is an independent tool and is not affiliated with, endorsed by, or sponsored by Polymarket.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
