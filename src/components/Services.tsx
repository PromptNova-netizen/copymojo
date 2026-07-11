import { motion } from 'motion/react';
import { LayoutTemplate, Mail, ShoppingBag, Globe, Bot } from 'lucide-react';

const services = [
  {
    icon: <Globe size={24} />,
    title: "Website Copy",
    description: "Copy website yang menjual. Kami menulis homepage, about, dan sales page yang meningkatkan kepercayaan dan konversi."
  },
  {
    icon: <LayoutTemplate size={24} />,
    title: "Landing Page",
    description: "Landing page yang dioptimasi untuk konversi. Dari headline yang menarik hingga CTA yang kuat, semua dirancang untuk jual."
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "Deskripsi Produk & Jasa",
    description: "Deskripsi yang membuat calon customer ingin beli. Kami highlight benefits, bukan hanya features."
  },
  {
    icon: <Mail size={24} />,
    title: "Email Marketing Copy",
    description: "Email sequence yang diread dan di-click. Dari welcome series hingga sales email yang menghasilkan revenue."
  },
  {
    icon: <Bot size={24} />,
    title: "Copywriting Mastery Coaching",
    description: "Kami ajari tim anda cara menulis copy yang jual. Workshop dan training untuk meningkatkan skill internal."
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight text-white">Layanan Kami</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4 md:px-0">
            Copy profesional untuk semua kebutuhan marketing anda. Dari website hingga email, kami siap membantu jual lebih banyak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="glass p-8 md:p-10 rounded-[24px] group cursor-pointer relative overflow-hidden border border-white/5 hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(37,211,102,0.2)] will-change-transform bg-white/[0.01] backdrop-blur-xl"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-transparent transition-all duration-500 ease-out" />
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 mb-8 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-black transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group-hover:text-primary-400 transition-colors duration-300 relative z-10 mt-auto">
                Learn More <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
