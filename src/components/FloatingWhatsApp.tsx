import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/1?text=Hi%20CopyMojo"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-40 group-hover:opacity-70 group-hover:blur-lg transition-all duration-300" />
      <MessageSquare size={28} className="relative z-10" />
      
      {/* Availability indicator */}
      <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
      </span>
    </a>
  );
}
