import { Plane, PlayCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';

export default function ExternalTour() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="tour" className="relative py-24 md:py-36 bg-graphite-700">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Tour Externo"
          title={<>Vista aérea <span className="gold-text">do empreendimento.</span></>}
          subtitle="Em breve, um tour 360° do edifício e seu entorno, capturado por drone em alta resolução."
        />

        <div ref={ref} className="reveal relative aspect-video overflow-hidden border border-white/10 bg-graphite-900 flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-graphite-900 via-graphite-800 to-graphite-900" />
          <div className="relative text-center px-6">
            <div className="relative inline-flex mb-6">
              <span className="absolute inset-0 rounded-full bg-gold/20 blur-2xl" />
              <Plane size={64} strokeWidth={1} className="relative text-gold" />
            </div>
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4">Em produção</p>
            <p className="font-serif text-3xl md:text-4xl text-white max-w-2xl mx-auto leading-tight">
              Levantamento de drone agendado.
            </p>
            <p className="text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
              Em poucos dias você poderá explorar o Park Way e o entorno em vídeo aéreo
              e tour interativo.
            </p>
            <div className="inline-flex items-center gap-2 mt-7 text-white/40 text-xs tracking-wider uppercase">
              <PlayCircle size={16} /> Tour disponível em breve
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
