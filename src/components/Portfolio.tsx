import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Portfolio() {
  const cases = [
    {
      client: "Online Shop Fashion - 2x Revenue",
      description: "Rewrite product description dan landing page untuk online shop fashion lokal. Hasil: 2x peningkatan conversion rate dalam 3 bulan.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
      tag: "E-commerce Copy"
    },
    {
      client: "Jasa Konsultasi - Email Funnel",
      description: "Buat email marketing sequence untuk jasa konsultasi bisnis. Hasil: 40+ leads per bulan dari email list mereka.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tag: "Email Marketing"
    },
    {
      client: "UMKM Kuliner - Website Overhaul",
      description: "Redesign seluruh website copy untuk UMKM kuliner. Dari tentang produk hingga testimoni. Hasil: 3x booking order online.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      tag: "Website Copy"
    },
    {
      client: "Digital Course - Sales Page",
      description: "Tulis sales page dan email launch sequence untuk digital course. Hasil: 150+ enrollments dalam launch week pertama.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      tag: "Sales Page"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight text-white">Portofolio</h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl">
              Lihat hasil karya saya membantu UMKM jual lebih banyak dengan copywriting yang tepat.
            </p>
          </div>
          <a href="#contact" className="px-8 py-4 min-h-[56px] rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-2 w-full md:w-fit">
            Mulai Proyek <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] border border-white/10 shadow-lg">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                <img 
                  src={item.image} 
                  alt={item.client} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-block px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-[11px] font-bold tracking-widest uppercase text-white border border-white/20">
                    {item.tag}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-primary-400 transition-colors">{item.client}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-500 group-hover:text-white transition-colors">
                  View Project <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
