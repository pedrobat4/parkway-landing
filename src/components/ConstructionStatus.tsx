import { HardHat, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';

const phases = [
  { label: 'Fundação', status: 'em-breve' },
  { label: 'Estrutura', status: 'em-breve' },
  { label: 'Alvenaria', status: 'em-breve' },
  { label: 'Acabamento', status: 'em-breve' },
];

export default function ConstructionStatus() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="obras" className="relative py-24 md:py-36 bg-graphite-800">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Acompanhe"
          title={<>Evolução <span className="gold-text">de obras.</span></>}
          subtitle="Transparência total no andamento da construção. Em breve atualizaremos com fotos e o percentual de cada etapa."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-graphite-900 flex items-center justify-center">
            <div className="text-center px-8">
              <HardHat size={56} strokeWidth={1} className="text-gold/70 mx-auto mb-5" />
              <p className="text-gold text-[11px] tracking-[0.35em] uppercase mb-3">Em breve</p>
              <p className="font-serif text-2xl text-white">Registros da obra serão publicados aqui.</p>
              <p className="text-white/55 text-sm mt-3 max-w-sm mx-auto">
                Acompanhamento mensal com fotos da estrutura, alvenaria e acabamento.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Etapas</h3>
            {phases.map((p) => (
              <div
                key={p.label}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <div className="flex items-center gap-4">
                  <Clock size={18} className="text-gold/60" strokeWidth={1.4} />
                  <span className="text-white/85 text-base">{p.label}</span>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                  Em breve
                </span>
              </div>
            ))}
            <p className="text-white/50 text-xs mt-6 leading-relaxed">
              O cronograma será atualizado conforme avanço da obra. Para informações
              detalhadas, entre em contato com nosso time comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
