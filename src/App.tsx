/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { SocialProof } from './components/SocialProof';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-[#030712] text-gray-50 font-sans selection:bg-primary-500/30 overflow-x-hidden">
      <CustomCursor />
      <FloatingWhatsApp />
      
      {/* Global Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary-500/5 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary-600/5 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '15s', animationDelay: '5s' }} />
      </div>

      <div className="relative z-10 w-full">
        <Navbar />
        <main>
        <Hero />
        <Brands />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Portfolio />
        <SocialProof />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}
