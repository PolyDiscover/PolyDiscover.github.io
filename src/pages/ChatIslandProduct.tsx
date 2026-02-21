import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "What does Chat Island do?",
    answer: "Chat Island creates a Picture-in-Picture (PiP) window for ChatGPT. This allows you to keep ChatGPT on top of your other windows, so you can chat while working, browsing, or watching videos without constantly switching tabs."
  },
  {
    id: 2,
    question: "Does it work with my ChatGPT account?",
    answer: "Yes! Chat Island is simply a smaller, customized window of the main ChatGPT website. You stay logged into your own account, and all your chats sync perfectly with the official site."
  },
  {
    id: 3,
    question: "Does it collect my data?",
    answer: "No. The extension operates entirely locally within your browser to launch the PiP window and inject custom styles for a better small-window experience. We do not collect, store, or transmit any of your conversation data."
  },
  {
    id: 4,
    question: "How do I launch it?",
    answer: "After installing, click the Chat Island extension icon in your toolbar, or use the injected PiP button directly on the ChatGPT interface to quickly pop out the current conversation."
  }
];

interface ChatIslandProductProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function ChatIslandProduct({ theme, toggleTheme }: ChatIslandProductProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <svg viewBox="0 0 200 200" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M165 45 H 45 C 42.2386 45 40 47.2386 40 50 V 105" />
              <path d="M40 135 H 60 L 60 160 L 105 135 H 155 C 157.761 135 160 132.761 160 130 V 75" />
            </svg>
            <span>Chat Island</span>
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
              href="#"
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
            Always-on-top AI Companion
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            A dedicated Picture-in-Picture window for ChatGPT. Custom-styled for maximum efficiency in a smaller footprint so you never have to break focus.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a
              href="#"
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
            <h2>Streamlined Intelligence</h2>
            <p>Designed specifically to make ChatGPT feel like a native desktop widget.</p>
          </motion.div>

          <motion.div className="feature-grid" variants={itemVariants}>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <line x1="8" y1="3" x2="8" y2="21" />
                  <path d="M21 3L14 10" />
                </svg>
              </div>
              <h3>Picture-in-Picture</h3>
              <p>Stays on top of all your other windows. Chat seamlessly while reading articles, coding, or watching videos.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3>Custom UI Enhancements</h3>
              <p>Clutter-free, compact layout tailored for smaller windows. Super slim sidebars, hidden distractions, and responsive scaling.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
              </div>
              <h3>Instant Context Switching</h3>
              <p>One click to enter PiP mode from the main site. Another click to expand back to full screen when you need more space.</p>
            </div>
          </motion.div>
        </motion.section>

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
          <motion.h2 variants={itemVariants}>Upgrade Your AI Experience</motion.h2>
          <motion.p variants={itemVariants}>
            Keep your AI companion close at hand without blocking your workflow.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#"
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
          <p className="footer-text">© {new Date().getFullYear()} PolyDiscover Ecosystem. All rights reserved.</p>
          <p className="footer-disclaimer">
            Chat Island is an independent productivity tool and is not affiliated with, endorsed by, or sponsored by OpenAI.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
