/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Placeholder Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Store from './pages/Store';
import CNC from './pages/CNC';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import Fabrication from './pages/Fabrication';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-accent selection:text-black">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cnc" element={<CNC />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="*" element={
              <div className="h-[70vh] flex flex-col items-center justify-center bg-background-deep relative overflow-hidden">
                <div className="absolute inset-0 grid-bg-dots opacity-20"></div>
                <div className="relative z-10 text-center">
                  <div className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-8">Error_Code_404</div>
                  <h1 className="text-9xl font-sans font-black text-white italic font-serif leading-none opacity-10 absolute -top-20 left-1/2 -translate-x-1/2">404</h1>
                  <h2 className="text-4xl font-sans font-black text-white uppercase tracking-tighter mb-8 leading-none">Transmission <br /> <span className="text-accent italic font-serif text-3xl">Severed</span></h2>
                  <p className="text-zinc-600 font-serif italic text-sm mb-12 max-w-xs mx-auto lowercase">Requested coordinate does not exist in the current grid configuration.</p>
                  <a href="/" className="px-10 py-4 border border-accent text-accent text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-black transition-all">Return to Origin</a>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
