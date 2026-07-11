import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-6 ${isScrolled ? 'backdrop-blur-xl bg-[#030712]/60 py-4 border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tight flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded bg-primary-500 text-black flex items-center justify-center font-bold">
            C
          </div>
          CopyMojo<span className="text-primary-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-full">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          <a 
            href="#contact"
            className="text-primary-400 font-bold text-sm tracking-wide uppercase hover:text-primary-300 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-gray-900 border-b border-white/10 p-6 lg:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 mt-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(0,0,0,0.1)] text-white font-bold uppercase tracking-widest text-sm hover:scale-[1.03] hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  );
}
