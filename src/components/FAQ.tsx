import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the AI-powered copywriting process work?",
    answer: "We use advanced AI models to process massive datasets, analyze competitor strategies, and identify market gaps. Then, our expert human copywriters take those insights to craft emotionally compelling, conversion-focused copy tailored to your brand voice."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "For Starter projects like a single landing page, our standard turnaround is 7 days. The Growth package takes 14 days, and the Premium package takes 21 days, ensuring we have ample time for deep research and strategic alignment."
  },
  {
    question: "Do you offer revisions if I'm not satisfied?",
    answer: "Absolutely. The Starter package includes 1 round of revisions, Growth includes 2 rounds, and our Premium package comes with priority support and unlimited revisions. Our goal is 100% satisfaction and measurable results."
  },
  {
    question: "Will you implement the copy on our website or CRM?",
    answer: "Our packages focus strictly on delivering high-converting copy assets. We provide the copy in a clean, developer-ready format (like Google Docs or Figma wireframes) making it easy for your design and development teams to implement seamlessly."
  },
  {
    question: "How do you learn our brand voice?",
    answer: "We start every project with an in-depth onboarding questionnaire and a strategy call. We analyze your existing materials, past successful campaigns, and customer feedback to develop comprehensive Brand Voice Guidelines before writing a single word."
  },
  {
    question: "What makes CopyMojo different from freelance copywriters?",
    answer: "CopyMojo operates like a premium SaaS agency. We combine the scale and data-processing capabilities of AI with the strategic nuance of senior human copywriters. This hybrid approach allows us to deliver agency-tier quality without the bloated retainer fees."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-[#030712]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 tracking-tight text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl">
            Everything you need to know about our process, delivery, and methodology.
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
