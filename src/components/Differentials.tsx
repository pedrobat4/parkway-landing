import {
  Home,
  Ruler,
  Car,
  Package,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Briefcase,
  MapPin,
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';

const items = [
  { icon: Home, title: '3 e 4 Quartos', desc: 'Tipologias amplas com suíte e lavabo na opção 4Q.' },
  { icon: Ruler, title: '103, 110 e 136 m²', desc: 'Plantas inteligentes que se adaptam ao seu estilo.' },
  { icon: Car, title: '2 Vagas de Garagem', desc: 'Vagas soltas, com fácil manobra para cada unidade.' },
  { icon: Package, title: 'Depósito Privativo', desc: 'Box individual de 1,14 m × 1,50 m para sua organização.' },
  { icon: UtensilsCrossed, title: 'Varanda Gourmet', desc: 'Em todas as unidades — pronto para receber.' },
  { icon: Waves, title: 'Área de Lazer Completa', desc: 'Piscina, lounge, gourmet e brinquedoteca.' },
  { icon: Briefcase, title: 'Coworking', desc: 'Ambiente exclusivo para trabalhar perto de casa.' },
  { icon: Dumbbell, title: 'Espaço Fitness', desc: 'Treine indoor e outdoor sem sair do condomínio.' },
  { icon: MapPin, title: 'Localização Privilegiada', desc: 'Morada do Sol — região valorizada em Montes Claros.' },
];

export default function Differentials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="diferenciais" className="relative py-24 md:py-36 bg-graphite-700">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Diferenciais"
          title={<>Cada detalhe pensado para <span className="gold-text">elevar</span> o seu cotidiano.</>}
          subtitle="O Park Way Residencial reúne arquitetura contemporânea, lazer sofisticado e funcionalidade premium em um só endereço."
        />
        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-graphite-700 p-8 md:p-10 hover:bg-graphite-600 transition-colors duration-500"
            >
              <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl text-white mb-3">{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
