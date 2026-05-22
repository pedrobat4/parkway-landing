import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/assets';

export default function WhatsAppButton() {
  return (
    <a
      href={PHONE_TEL}
      aria-label={`Ligar para ${PHONE_DISPLAY}`}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
      <span className="relative flex items-center gap-3 bg-gold text-graphite-700 pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-black/30 hover:bg-gold-400 transition-colors">
        <Phone size={22} strokeWidth={2} />
        <span className="hidden sm:inline text-sm font-medium tracking-wide">{PHONE_DISPLAY}</span>
      </span>
    </a>
  );
}
