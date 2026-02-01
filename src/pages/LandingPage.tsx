import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css';

interface LandingPageProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export function LandingPage({ theme, toggleTheme }: LandingPageProps) {
    const isDark = theme === 'dark';

    return (
        <div className={`landing-page ${isDark ? 'dark' : ''}`}>
            {/* Dynamic Background */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            {/* Navigation */}
            <nav className="nav">
                <div className="container nav-inner">
                    <div className="nav-logo">
                        <img src="/logo.png" alt="PolyDiscover" />
                        <span>PolyDiscover</span>
                    </div>
                    <div className="nav-actions">
                        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                            {theme === 'light' ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    </div>
                </div>
            </nav>

            <main className="landing-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="lp-badge">
                        The PolyDiscover Ecosystem
                    </span>
                </motion.div>

                <motion.h1
                    className="lp-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    One Platform. <br />
                    Limitless Intelligence.
                </motion.h1>

                <motion.p
                    className="lp-subtitle text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Professional-grade tools for prediction markets and live sports tracking. <br className="hidden md:block" />
                    Designed for those who demand speed, accuracy, and aesthetics.
                </motion.p>

                <div className="lp-grid">
                    {/* PolyDiscover Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link to="/polydiscover" className="lp-card group block h-full text-inherit no-underline">
                            <div className="lp-icon">
                                <img src="/logo.png" alt="PolyDiscover" style={{ width: '48px', height: '48px' }} />
                            </div>
                            <h3>PolyDiscover</h3>
                            <p>
                                The ultimate interface for Polymarket. Real-time data, advanced filtering, and instant discovery.
                            </p>
                            <div className="btn lp-btn lp-btn-primary">
                                Launch App
                            </div>
                        </Link>
                    </motion.div>

                    {/* Score Island Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="/score-island/" className="lp-card group block h-full text-inherit no-underline">
                            <div className="lp-icon">
                                🏝️
                            </div>
                            <h3>Score Island</h3>
                            <p>
                                Live scores that follow you. Dynamic islands for NBA, NFL, and MLB on any tab.
                            </p>
                            <div className="btn lp-btn lp-btn-accent">
                                Visit Island
                            </div>
                        </a>
                    </motion.div>
                </div>
            </main>

            <motion.footer
                className="text-center pb-8 opacity-50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.8 }}
            >
                <p>© {new Date().getFullYear()} PolyDiscover Ecosystem.</p>
            </motion.footer>
        </div>
    );
}
