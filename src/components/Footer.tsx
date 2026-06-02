import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import {
  logoManziBrancaUrl,
  PHONE_DISPLAY,
  WHATSAPP_URL,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from '../data/assets';

export default function Footer() {
  return (
    <footer className="bg-graphite-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-12 grid md:grid-cols-4 gap-8 md:gap-10">
        <div className="md:col-span-2">
          <img
            src={logoManziBrancaUrl}
            alt="Manzi Construtora"
            className="h-20 md:h-28 w-auto -ml-1 block mb-2"
          />
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Park Way Residencial — um empreendimento Manzi. Arquitetura
            contemporânea, lazer completo e localização privilegiada em
            Montes Claros / MG.
          </p>
        </div>

        <div>
          <h4 className="text-gold text-[10px] tracking-[0.3em] uppercase mb-5">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors">
              <WhatsAppIcon size={16} className="mt-0.5 text-gold flex-shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors">
              <Mail size={16} className="mt-0.5 text-gold flex-shrink-0" />
              <a href="mailto:construtoramanzi@gmail.com">construtoramanzi@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <MapPin size={16} className="mt-0.5 text-gold flex-shrink-0" />
              <span>{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-[10px] tracking-[0.3em] uppercase mb-5">Siga-nos</h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/manziconstrutora/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="border border-white/15 hover:border-gold hover:text-gold text-white/70 p-3 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/p/Manzi-Construtora-61569412624155/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="border border-white/15 hover:border-gold hover:text-gold text-white/70 p-3 transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Manzi Construtora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
