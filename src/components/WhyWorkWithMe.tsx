import { motion } from 'motion/react';
import { Target, Zap, Bot, Wallet } from 'lucide-react';

export function WhyWorkWithMe() {
  const reasons = [
    {
      icon: <Bot size={24} />,
      title: "Hasil Berkualitas Tinggi",
      description: "Kami gunakan research mendalam dan copywriting formula yang terbukti. Setiap kata dipilih untuk maximize psychological impact dan conversions."
    },
    {
      icon: <Zap size={24} />,
      title: "Proses Cepat",
      description: "Kami deliver copy berkualitas dengan timeline yang jelas. Tidak ada delay, tepat waktu sesuai deadline yang disepakati."
    },
    {
      icon: <Wallet size={24} />,
      title: "Harga Terjangkau",
      description: "Kualitas premium dengan harga yang wajar untuk UMKM. Tidak ada biaya tersembunyi, harga transparan dengan ROI yang clear."
    },
    {
      icon: <Target size={24} />,
      title: "Fokus pada Penjualan",
      description: "Setiap kalimat ditulis untuk increase conversions dan revenue. Tidak ada marketing fluff, hanya copy yang beneran jual."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white">Kenapa Pilih Kami</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Kami gabungin psychology, research mendalam, dan formula copywriting yang terbukti untuk create copy yang beneran jual.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass bg-white/[0.01] p-8 md:p-10 rounded-[28px] border border-white/10 hover:border-primary-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(37,211,102,0.15)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent transition-colors duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-black transition-all duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
