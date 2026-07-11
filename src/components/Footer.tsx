export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] pt-24 pb-12 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] md:w-[600px] md:h-[300px] bg-primary-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none will-change-transform transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          
          <div className="md:col-span-2">
            <a href="#top" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-8 text-white">
              <div className="w-8 h-8 rounded bg-primary-500 text-black flex items-center justify-center font-bold">
                C
              </div>
              CopyMojo<span className="text-primary-500">.</span>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-10 text-[1.05rem]">
              Premium AI-powered copywriting agency helping businesses turn visitors into customers through persuasive, conversion-focused messaging.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest opacity-60">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#top" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#top" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest opacity-60">Connect</h4>
            <ul className="space-y-4 text-gray-400 font-medium text-sm">
              <li><a href="https://wa.me/1?text=Hi%20CopyMojo" target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">WhatsApp</a></li>
              <li><a href="mailto:hello@copymojo.com" className="hover:text-primary-400 transition-colors">Email Us</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
          <p>© {new Date().getFullYear()} CopyMojo. All rights reserved.</p>
          <p className="mt-4 md:mt-0 opacity-60">Premium AI Copywriting.</p>
        </div>
      </div>
    </footer>
  );
}
