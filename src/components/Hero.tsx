import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Zap, Star } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityParallax = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-20 overflow-hidden bg-[#030712]">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://res.cloudinary.com/dgxllmady/video/upload/v1780478217/Futuristic_robot_lifting_head_202606031716_dc6a3k.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex flex-col items-center justify-center text-center h-full">
          
          {/* Main Content */}
          <div className="flex flex-col items-center pt-20 lg:pt-0 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary-500 mb-8 backdrop-blur-sm shadow-sm uppercase tracking-widest"
            >
              <Sparkles size={14} className="text-primary-500" />
              <span>Copywriting untuk UMKM</span>
            </motion.div>
            
            <div className="text-[2.6rem] leading-[1.25] md:leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 text-white">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                  Copy Profesional
                </motion.div>
              </div>
              <div className="overflow-hidden mt-2">
                <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                  Untuk Bisnis Anda
                </motion.div>
              </div>
              <div className="overflow-hidden mt-2">
                <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}>
                  <span className="italic font-normal text-primary-500">Jual Lebih Banyak</span>
                </motion.div>
              </div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed text-balance"
            >
               Layanan copywriting profesional untuk UMKM yang ingin meningkatkan penjualan tanpa membuang waktu menulis sendiri.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
            >
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 min-h-[56px] rounded-full bg-primary-500 backdrop-blur-md border border-primary-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_20px_rgba(37,211,102,0.3)] text-gray-900 font-bold uppercase hover:bg-primary-400 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group text-xs sm:text-sm tracking-widest"
              >
                Book Free Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 min-h-[56px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center text-xs sm:text-sm tracking-widest"
              >
                View Portfolio
              </a>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-primary-500" />
                Trusted by modern brands
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary-500" />
                Fast turnaround
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary-500" />
                Conversion focused
              </div>
            </motion.div>
          </div>

          {/* Portrait Image removed */}
        </div>
      </div>
    </section>
  );
}
