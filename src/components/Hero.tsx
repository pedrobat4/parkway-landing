import { ChevronDown } from 'lucide-react';
import { heroVideoUrl } from '../data/assets';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-graphite-700/70 via-graphite-700/40 to-graphite-700/90" />
      <div className="absolute inset-0 bg-graphite-700/30" />

      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-5 md:px-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase">
              Park Way Residencial
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-light leading-[1.05] text-balance">
            Um endereço que <em className="not-italic gold-text font-medium">redefine</em> o
            morar bem.
          </h1>
          <p className="mt-8 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
            Apartamentos de 3 e 4 quartos com varanda gourmet, lazer completo e
            arquitetura assinada — no coração de Montes Claros.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-gold text-graphite-700 px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-gold-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20"
            >
              Agende uma Visita
            </a>
            <a
              href="#diferenciais"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Conheça o Projeto
            </a>
          </div>
        </div>
      </div>

      <a
        href="#diferenciais"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-gold transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Descubra</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}
