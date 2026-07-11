import { motion } from 'motion/react';

export function Process() {
  const steps = [
    { number: "01", title: "Konsultasi", description: "Kami diskusi dalam tentang bisnis anda, produk, dan goals penjualan anda." },
    { number: "02", title: "Riset", description: "Kami audit competitor, analisa customer anda, dan buat buyer persona yang detail." },
    { number: "03", title: "Penulisan", description: "Kami tulis copy yang convert menggunakan psychology dan copywriting formula yang terbukti." },
    { number: "04", title: "Revisi", description: "Kami review copy bareng anda dan refinement sampai anda 100% puas." },
    { number: "05", title: "Delivery", description: "Serah copy final yang siap pakai dan tinggal di-implementasi ke website anda." },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white">Proses Kerja Kami</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Proses yang transparan dan simple, dirancang untuk deliver copy berkualitas tepat waktu, setiap saat.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-px bg-white/10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-row lg:flex-col gap-6 lg:gap-8 group"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 shrink-0 rounded-full bg-[#030712] border border-white/20 flex items-center justify-center text-xl sm:text-2xl font-display font-bold text-gray-500 group-hover:text-primary-500 group-hover:border-primary-500 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="pt-2 lg:pt-0">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary-400 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
