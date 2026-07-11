import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Berapa lama proses penulisan copy dimulai dari awal?",
    answer: "Tergantung paket yang dipilih. Paket Basic: 5 hari kerja. Paket Professional: 10 hari kerja. Paket Premium: 15 hari kerja. Waktu ini sudah termasuk research, penulisan, dan 1-3 revisi."
  },
  {
    question: "Bagaimana proses kerjanya? Apakah ada konsultasi?",
    answer: "Proses dimulai dengan konsultasi WhatsApp gratis. Kami tanya tentang bisnis, target customer, dan goals anda. Kemudian kami audit website/copy yang ada sekarang. Baru setelah itu mulai menulis copy yang baru."
  },
  {
    question: "Apakah ada garansi atau jaminan hasil?",
    answer: "Kami jamin kepuasan anda. Jika copy yang kami buat kurang memuaskan atau ingin revisi, kami siap lakukan revisi sesuai jumlah yang tertera di paket. Paket Premium bahkan unlimited revisions."
  },
  {
    question: "Bagaimana cara mentransfer copy yang sudah jadi ke website?",
    answer: "Kami deliver copy dalam format Google Docs atau Word yang rapi dan siap pakai. Anda atau tim developer anda tinggal copy-paste ke website. Kami tidak handle implementasi teknis karena fokus kami adalah copywriting."
  },
  {
    question: "Berapa harga yang sebenarnya? Ada biaya tambahan?",
    answer: "Harga yang tertera sudah final. Tidak ada biaya hidden atau tambahan. Semua yang dijanjikan di paket sudah termasuk dalam harga tersebut. Pembayaran bisa dilakukan sebelum kami mulai atau bertahap."
  },
  {
    question: "Bagaimana jika saya belum yakin dengan services ini?",
    answer: "Tidak masalah! Silahkan chat kami di WhatsApp untuk konsultasi gratis dulu. Kami bisa audit website/copy anda dan kasih 3 tips konkret untuk tingkatkan penjualan. Setelah itu baru anda putuskan apakah ingin lanjut."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight text-white">Pertanyaan Umum</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Semua yang perlu anda tahu tentang proses copywriting, delivery, dan cara kerjanya.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="border border-white/10 rounded-[20px] bg-white/[0.02] overflow-hidden"
              >
                <button
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none focus:bg-white/[0.04] transition-colors hover:bg-white/[0.02]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base md:text-lg font-bold text-white pr-4 md:pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-white text-black border-transparent' : 'border-white/20 text-gray-400 bg-white/5'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-400 leading-relaxed text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
