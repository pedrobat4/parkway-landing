import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';
import { facadeImages, ADDRESS_LINE_1, ADDRESS_LINE_2 } from '../data/assets';
import {
  Building2,
  Layers,
  Users,
  ArrowUpDown,
  Sun,
  Wifi,
  PlugZap,
  Snowflake,
} from 'lucide-react';

const specs = [
  { icon: Building2, label: 'Pavimentos', value: '8 tipo + Térreo + Subsolo' },
  { icon: Layers, label: 'Unidades', value: '32 apartamentos' },
  { icon: Users, label: 'Por Andar', value: '4 apartamentos' },
  { icon: ArrowUpDown, label: 'Elevadores', value: '2 elevadores' },
];

const typologies = [
  { qty: '2x', label: '3 Quartos · 1 Suíte', area: '103 m²' },
  { qty: '1x', label: '3 Quartos · 1 Suíte', area: '110 m²' },
  { qty: '1x', label: '4 Quartos · 1 Suíte + Lavabo', area: '136 m²' },
];

const techPrep = [
  { icon: Snowflake, label: 'Ar-condicionado' },
  { icon: Sun, label: 'Energia Fotovoltaica' },
  { icon: Wifi, label: 'Automação Residencial' },
  { icon: PlugZap, label: 'Carregador Veículo Elétrico' },
];

export default function Specs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="ficha" className="relative py-24 md:py-36 bg-graphite-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Ficha Técnica"
          title={<>Engenharia e <span className="gold-text">refinamento</span> em cada metro.</>}
        />

        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={facadeImages[0].src}
                alt="Fachada Park Way"
                className="w-full h-full object-cover animate-slow-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-gold text-[10px] tracking-[0.3em] uppercase">Park Way Residencial</p>
                <p className="text-white font-sans text-xl md:text-2xl font-light mt-1">{ADDRESS_LINE_1}</p>
                <p className="text-white/70 text-sm">{ADDRESS_LINE_2}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-px bg-white/5">
              {specs.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-graphite-700 p-6 md:p-8">
                  <Icon className="text-gold mb-4" size={26} strokeWidth={1.3} />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">{label}</p>
                  <p className="font-sans text-lg md:text-xl text-white font-light tracking-tight">{value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Tipologias por Pavimento</h3>
              <div className="space-y-3">
                {typologies.map((t) => (
                  <div
                    key={t.label + t.area}
                    className="flex items-center justify-between border-b border-white/10 pb-3 group hover:border-gold transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-sans text-xl md:text-2xl font-medium w-10">{t.qty}</span>
                      <span className="text-white/85 text-sm md:text-base">{t.label}</span>
                    </div>
                    <span className="font-sans text-lg md:text-xl text-white font-light tracking-tight">{t.area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Pré-disposições e Tecnologia</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {techPrep.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="border border-white/10 hover:border-gold/60 p-4 flex flex-col items-start gap-3 transition-colors"
                  >
                    <Icon className="text-gold" size={22} strokeWidth={1.3} />
                    <span className="text-xs text-white/80 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-gold text-xs tracking-[0.3em] uppercase mb-5">Estrutura do Térreo</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Hall de entrada, smart locker, bicicletário, estação de gás, guarita,
                sanitário gourmet com acessibilidade, elevadores e compartimento de
                seleção de lixo. Medições individuais de água, luz e gás canalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
