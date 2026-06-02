import { CalendarClock } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';

const overallProgress = 0;
const deliveryDate = 'Dez • 2028';

const stages = [
  { label: 'Contenção / Fundações', progress: 0 },
  { label: 'Superestrutura', progress: 0 },
  { label: 'Alvenaria', progress: 0 },
  { label: 'Instalações', progress: 0 },
  { label: 'Fachada', progress: 0 },
  { label: 'Acabamento dos apartamentos', progress: 0 },
];

export default function ConstructionStatus() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="obras" className="relative py-24 md:py-36 bg-graphite-800">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Acompanhe"
          title={<>Evolução <span className="gold-text">de obras.</span></>}
          subtitle="Fique por dentro do andamento das obras do Park Way."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-graphite-900 flex flex-col items-center justify-center text-center px-8">
            <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-4">Status Geral</p>
            <p className="font-display text-7xl md:text-8xl text-white font-light leading-none">
              {overallProgress}%
            </p>
            <div className="w-2/3 max-w-[220px] h-1.5 bg-white/10 mt-7 mb-8 overflow-hidden">
              <div className="h-full bg-gold transition-all" style={{ width: `${overallProgress}%` }} />
            </div>
            <div className="flex items-center gap-2.5 text-white/70">
              <CalendarClock size={16} className="text-gold flex-shrink-0" />
              <span className="text-sm tracking-wide">
                Previsão de entrega: <span className="text-white font-medium">{deliveryDate}</span>
              </span>
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
    </section>
  );
}
