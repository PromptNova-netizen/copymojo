import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 relative bg-[#030712] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary-600/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none will-change-transform transform-gpu" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 mb-6 uppercase tracking-widest">
              Tentang Saya
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight max-w-3xl text-center">
              "Membantu UMKM jual lebih banyak dengan copywriting yang tepat."
            </h3>

            <div className="space-y-6 text-base sm:text-[1.1rem] text-gray-400 leading-relaxed mb-10 md:mb-12 max-w-3xl">
              <p>
                Saya memulai journey copywriting karena melihat banyak UMKM yang punya produk bagus tapi copy jelek, jadinya penjualan standby.
              </p>
              <p>
                Saya tahu dari pengalaman, copy yang tepat bisa 2x, 3x bahkan 10x lipat sales anda. Tugas saya adalah menulis copy yang membuat produk anda punya daya jual yang tidak bisa ditolak.
              </p>
              <p>
                Saya fokus pada UMKM dan bisnis kecil karena itu adalah akar ekonomi kita. Mari sama-sama tumbuh dengan strategy copywriting yang tepat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-10 border-b border-white/10 mb-10 w-full text-left">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest opacity-60">Keahlian Kami</h4>
                <ul className="text-gray-300 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />Website & Landing Page Copy</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />Email Marketing Copywriting</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />Deskripsi Produk & Brand Voice</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest opacity-60">Siapa Yang Kami Bantu</h4>
                <ul className="text-gray-300 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />UMKM & Bisnis Kecil</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />E-commerce & Online Shop</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />Jasa & Konsultasi</li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-white hover:text-primary-400 transition-colors group">
              Start Your Project
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-black transition-colors border border-white/10">
                <span className="text-lg leading-none">→</span>
              </div>
            </a>
          </motion.div>
      </div>
    </section>
  );
}
