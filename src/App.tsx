/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Requirements from './components/Requirements';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ isDark: false, toggleDark: () => {} });

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      <div className="min-h-screen bg-surface selection:bg-secondary/20">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Courses />
          <Requirements />
          <CTA />
          <Footer />
        </main>
        <MobileNav />
      </div>
    </ThemeContext.Provider>
  );
}


