import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function SocialProof() {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative border-y border-white/5 bg-[#030712] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none will-change-transform transform-gpu" />
      
      <div className="max-w-[100vw] mx-auto px-0 relative z-10">
        <div className="text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass p-12 rounded-[32px] border border-white/10 flex flex-col items-center justify-center relative overflow-hidden bg-white/[0.01] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 mb-8 border border-primary-500/20">
              <Sparkles size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight text-white">Client Success Stories</h2>
            <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">
              Currently accepting our first batch of founding clients.
            </p>
            <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
              Be among the first to experience premium AI-powered copywriting tailored for fast-growing businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
