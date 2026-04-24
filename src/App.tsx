/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Requirements from './components/Requirements';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

export default function App() {
  return (
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
  );
}


