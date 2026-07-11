import { motion } from 'motion/react';
import { MessageSquare, Calendar, Mail } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="pt-20 pb-20 md:pt-24 md:pb-32 relative bg-[#030712] overflow-hidden">
      {/* Background glow base */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary-600/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none will-change-transform transform-gpu" />
      
      {/* Interactive CTA glow */}
      <motion.div 
        animate={{
          opacity: isHovered ? 0.3 : 0.0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/30 rounded-full blur-[120px] pointer-events-none z-0 will-change-transform transition-all" 
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="glass shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[24px] md:rounded-[32px] p-6 md:p-16 border border-white/10 overflow-hidden relative backdrop-blur-3xl bg-[#030712]/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary-500/30 bg-primary-500/10 text-xs font-bold text-primary-400 mb-8 tracking-widest uppercase shadow-[0_0_15px_rgba(37,211,102,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Buka untuk klien baru — hubungi saya sekarang juga
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.05]"
              >
                Siap Jual Lebih Banyak?
              </motion.h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-md">
                Mari kita buat copy yang jual. Hubungi saya untuk konsultasi gratis dan audit website anda.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email</div>
                    <div className="font-bold text-white">contact@copymojo.id</div>
                  </div>
                </div>
                
                <a
                  href="https://wa.me/6281234567890?text=Hi%20saya%20tertarik%20dengan%20layanan%20copywriting%20anda"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded bg-[#25D366]/10 flex items-center justify-center text-[#25D366] border border-[#25D366]/20 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Respon paling cepat</div>
                    <div className="font-bold text-white flex items-center gap-2">
                      Chat WhatsApp
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-white/10 bg-white/5">Online</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Area */}
            <div className="bg-[#030712] rounded-[16px] md:rounded-[24px] p-6 md:p-10 border border-white/10 shadow-2xl relative">
              <h3 className="text-3xl font-display font-bold text-white mb-2 md:mb-3 tracking-tight">Audit Copy Gratis</h3>
              <p className="text-gray-400 text-sm mb-6 md:mb-8 font-medium">Hubungi saya di WhatsApp. Saya akan audit website anda dan kasih 3 tips untuk tingkatkan penjualan minggu ini.</p>
              
              <div className="space-y-5">
                <a
                  href="https://wa.me/6281234567890?text=Hi%20saya%20ingin%20konsultasi%20copywriting%20gratis%20dan%20audit%20website."
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="w-full min-h-[56px] bg-primary-500 backdrop-blur-md border border-primary-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(37,211,102,0.3)] text-black font-bold text-xs tracking-widest uppercase py-4 rounded-full hover:scale-[1.03] hover:bg-primary-400 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                  Chat di WhatsApp
                </a>
                
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-4">What happens next?</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0 border border-primary-500/20 font-bold text-xs">1</div>
                      <p>We'll have a brief 5-minute chat about your current conversion bottleneck and revenue goals.</p>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0 border border-primary-500/20 font-bold text-xs">2</div>
                      <p>I'll review your main landing page or sales asset to identify critical drops in buyer intent.</p>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0 border border-primary-500/20 font-bold text-xs">3</div>
                      <p>If we're a good fit, I'll send over a customized proposal and timeline. No pressure.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
