import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PolyDiscoverProduct } from './pages/PolyDiscoverProduct';
import { ChatIslandProduct } from './pages/ChatIslandProduct';

function App() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Initialize from system preference
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/polydiscover" element={<PolyDiscoverProduct theme={theme} toggleTheme={toggleTheme} />} />
                <Route path="/chat-island" element={<ChatIslandProduct theme={theme} toggleTheme={toggleTheme} />} />
            </Routes>
        </Router>
    );
}

export default App;
