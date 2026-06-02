import { CalendarCheck, ArrowUpRight } from 'lucide-react';
import { facadeImages, WHATSAPP_URL } from '../data/assets';
import { useReveal } from '../hooks/useReveal';

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contato" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={facadeImages[0].src}
          alt=""
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-graphite-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-700/60 via-graphite-700/70 to-graphite-700" />
      </div>

      <div ref={ref} className="reveal relative max-w-5xl mx-auto px-5 md:px-10 text-center">
        <span className="text-gold text-[11px] tracking-[0.35em] uppercase">Park Way Residencial</span>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-light mt-5 leading-[1.05] text-balance">
          Seu próximo capítulo <span className="gold-text italic">começa aqui.</span>
        </h2>
        <p className="text-white/75 text-base md:text-lg mt-7 max-w-2xl mx-auto leading-relaxed">
          Solicite o catálogo digital completo ou agende uma visita guiada ao stand
          de vendas — vamos apresentar cada detalhe do empreendimento para você.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent('Olá, gostaria de agendar uma visita ao Park Way Residencial.')}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-gold text-graphite-700 px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-400 transition-all duration-300"
          >
            <CalendarCheck size={18} /> Agende uma Visita
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
