import WhatsAppIcon from './icons/WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../data/assets';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conversar no WhatsApp ${PHONE_DISPLAY}`}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
      <span className="relative flex items-center justify-center bg-gold text-graphite-700 p-4 rounded-full shadow-2xl shadow-black/30 hover:bg-gold-400 transition-colors">
        <WhatsAppIcon size={26} />
      </span>
    </a>
  );
}
