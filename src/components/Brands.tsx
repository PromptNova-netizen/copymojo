import { motion } from 'motion/react';
import { Bot, FastForward, UserCheck, Search, TrendingUp, CheckCircle2 } from 'lucide-react';

export function Brands() {
  const benefits = [
    { label: "AI Assisted", icon: <Bot size={20} /> },
    { label: "Fast Delivery", icon: <FastForward size={20} /> },
    { label: "Human Reviewed", icon: <UserCheck size={20} /> },
    { label: "SEO Optimized", icon: <Search size={20} /> },
    { label: "Conversion Focused", icon: <TrendingUp size={20} /> },
  ];

  return (
    <section className="py-16 border-t border-b border-white/5 bg-[#030712] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Benefits Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 pb-16 border-b border-white/5">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-gray-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <span className="font-medium tracking-wide">{benefit.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">CopyMojo Standards</p>
      </div>

      <div className="max-w-[100vw] mx-auto px-0">
        <div className="relative w-full overflow-hidden pause-on-hover px-6">
          {/* Edge fades */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-[200%] gap-12 sm:gap-20 animate-marquee items-center justify-around opacity-70 cursor-default">
            {[...benefits, ...benefits, ...benefits, ...benefits].map((benefit, i) => (
              <div
                key={`${benefit.label}-${i}`}
                className="flex items-center gap-2 justify-center transition-all duration-300 transform hover:scale-110 shrink-0"
              >
                <CheckCircle2 size={16} className="text-primary-500" />
                <span className="text-lg md:text-xl font-bold font-display text-gray-400 hover:text-white transition-colors">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
