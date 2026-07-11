import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Online Shop Fashion",
      content: "Copy yang dibuat benar-benar mengubah conversion rate kami. Dalam 2 bulan, penjualan naik 2x lipat. Sangat recommended!",
      rating: 5
    },
    {
      name: "Siti Nurhaliza",
      role: "Owner Jasa Konsultasi",
      content: "Email marketing sequence nya sangat efektif. Sekarang kami dapat 40+ leads per bulan tanpa boros budget iklan.",
      rating: 5
    },
    {
      name: "Rendra Wijaya",
      role: "Founder Digital Course",
      content: "Sales page yang dibuat menghasilkan 150+ enrollments di launch week pertama. Investasi terbaik untuk bisnis online saya.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 relative border-y border-white/5 bg-[#030712] overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none will-change-transform transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight text-white">Testimoni Klien</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Dengarkan apa kata klien kami tentang hasil copywriting services kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-[24px] border border-white/10 bg-white/[0.01] backdrop-blur-xl hover:border-primary-500/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary-500 text-primary-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                "{testimonial.content}"
              </p>

              <div className="pt-6 border-t border-white/10">
                <div className="font-bold text-white text-sm md:text-base">{testimonial.name}</div>
                <div className="text-gray-400 text-xs md:text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
