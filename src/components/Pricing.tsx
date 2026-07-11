import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Rp 500k",
      description: "Cocok untuk UMKM yang baru mulai butuh copywriting berkualitas.",
      features: [
        "Landing Page Copy",
        "Deskripsi Produk (3 produk)",
        "Email Welcome Sequence (3 bagian)",
        "1 Revisi",
        "5 Hari Pengerjaan"
      ]
    },
    {
      name: "Professional",
      price: "Rp 1,5 Juta",
      popular: true,
      description: "Ideal untuk bisnis yang serius dengan growth dan ingin copy yang jual.",
      features: [
        "Website Copy Lengkap (Up to 5 halaman)",
        "Email Marketing Sequence (7 bagian)",
        "Deskripsi Produk (Unlimited)",
        "Brand Voice Development",
        "2 Revisi",
        "10 Hari Pengerjaan"
      ]
    },
    {
      name: "Premium",
      price: "Rp 3 Juta",
      description: "Paket lengkap untuk bisnis yang ingin scaling fast dengan copy terbaik.",
      features: [
        "Website Copy + Landing Page Lengkap",
        "Email Marketing Sequence (14 bagian)",
        "Unlimited Deskripsi Produk",
        "Copy untuk Iklan (5 set)",
        "3 Revisi",
        "Custom Copy Audit",
        "15 Hari Pengerjaan"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 relative bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight text-white">Paket Harga</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Harga terjangkau untuk UMKM dengan hasil maksimal. Pilih paket yang sesuai dengan kebutuhan bisnis anda.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 md:p-10 rounded-[28px] relative flex flex-col border bg-white/[0.02] ${plan.popular ? 'border-primary-500 shadow-[0_0_40px_rgba(37,211,102,0.15)] shadow-primary-500/10' : 'border-white/10'} hover:-translate-y-2 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Popular & Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed h-14">{plan.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <span className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className="mt-0.5 rounded-full bg-primary-500/10 p-1 shrink-0">
                      <Check size={14} className="text-primary-500" strokeWidth={3} />
                    </div>
                    <span className="leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 ${plan.popular ? 'bg-primary-500 text-black hover:bg-primary-400 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-[1.03]' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:scale-[1.03]'}`}
              >
                Apply For {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto glass border border-primary-500/30 rounded-[28px] p-8 md:p-12 relative overflow-hidden text-center group"
        >
          <div className="absolute inset-0 bg-primary-500/5 group-hover:bg-primary-500/10 transition-colors duration-500" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Garansi Kepuasan</h3>
            <p className="text-gray-400 leading-relaxed max-w-xl">
              Jika anda tidak puas dengan copy yang kami buat, kami siap revisi sampai anda benar-benar puas. Kepuasan klien adalah prioritas kami.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
