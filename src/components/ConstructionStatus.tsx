import { useState } from 'react';
import { CalendarClock, Maximize2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Lightbox from './Lightbox';
import { obraImages } from '../data/assets';
import { useReveal } from '../hooks/useReveal';

const overallProgress = 18;
const deliveryDate = 'Set • 2030';
const currentPhase = 'Junho / 2026';

const stages = [
  { label: 'Contenção / Fundações', progress: 100 },
  { label: 'Superestrutura', progress: 0 },
  { label: 'Alvenaria', progress: 0 },
  { label: 'Instalações', progress: 0 },
  { label: 'Fachada', progress: 0 },
  { label: 'Acabamento dos apartamentos', progress: 0 },
];

export default function ConstructionStatus() {
  const ref = useReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="obras" className="relative py-24 md:py-36 bg-graphite-800">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Acompanhe"
          title={<>Evolução <span className="gold-text">de obras.</span></>}
          subtitle="Fique por dentro do andamento das obras do Park Way."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-4">
            {/* Quadrado: foto de capa (Junho / foto 3) com a porcentagem por cima */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-graphite-900">
              <img
                src={obraImages[0].src}
                alt={obraImages[0].title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Escurecimento para legibilidade da porcentagem */}
              <div className="absolute inset-0 bg-graphite-900/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/90 via-transparent to-graphite-900/40 pointer-events-none" />

              {/* Tag do mês */}
              <span className="absolute top-4 left-4 z-10 bg-graphite-900/70 backdrop-blur border border-white/15 text-gold text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
                {currentPhase}
              </span>

              {/* Botão ampliar */}
              <button
                onClick={() => setLightbox(0)}
                aria-label="Ampliar registro da obra"
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-graphite-900/70 backdrop-blur border border-white/20 text-white hover:text-gold hover:border-gold transition-colors"
              >
                <Maximize2 size={16} />
              </button>

              {/* Porcentagem mantida por cima da imagem */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
                <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4">Status Geral</p>
                <p className="font-display text-7xl md:text-8xl text-white font-light leading-none drop-shadow-lg">
                  {overallProgress}%
                </p>
                <div className="w-2/3 max-w-[220px] h-1.5 bg-white/15 mt-7 mb-8 overflow-hidden">
                  <div className="h-full bg-gold transition-all" style={{ width: `${overallProgress}%` }} />
                </div>
                <div className="flex items-center gap-2.5 text-white/80">
                  <CalendarClock size={16} className="text-gold flex-shrink-0" />
                  <span className="text-sm tracking-wide">
                    Previsão de entrega: <span className="text-white font-medium">{deliveryDate}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Miniaturas do registro fotográfico (Junho — 1, 2, 3) */}
            <div className="grid grid-cols-3 gap-3">
              {obraImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox(i)}
                  aria-label={`Ampliar foto ${i + 1} da obra`}
                  className={`relative aspect-[16/10] overflow-hidden group transition-all duration-300 ${
                    i === 0 ? 'ring-2 ring-gold' : 'ring-1 ring-white/10 hover:ring-white/40'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Etapas</h3>
            {stages.map((s) => (
              <div key={s.label}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-white/85 text-sm md:text-base">{s.label}</span>
                  <span className="text-gold text-sm tabular-nums">{s.progress}%</span>
                </div>
                <div className="h-1.5 bg-white/10 overflow-hidden">
                  <div className="h-full bg-gold transition-all" style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            ))}
            <p className="text-white/50 text-xs mt-6 leading-relaxed">
              O cronograma será atualizado conforme o avanço da obra. Para informações
              detalhadas, entre em contato com nosso time comercial.
            </p>
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={obraImages}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((i) => (i === null ? 0 : (i - 1 + obraImages.length) % obraImages.length))
          }
          onNext={() =>
            setLightbox((i) => (i === null ? 0 : (i + 1) % obraImages.length))
          }
        />
      )}
    </section>
  );
}
