import { MapPin, ShoppingBag, GraduationCap, HeartPulse, Trees } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { useReveal } from '../hooks/useReveal';
import {
  MAPS_EMBED_URL,
  MAPS_LINK,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from '../data/assets';

const nearby = [
  { icon: ShoppingBag, label: 'Shopping & Comércio', desc: 'Centros comerciais a poucos minutos.' },
  { icon: GraduationCap, label: 'Escolas e Faculdades', desc: 'Instituições de ensino renomadas no entorno.' },
  { icon: HeartPulse, label: 'Saúde', desc: 'Hospitais e clínicas de referência próximos.' },
  { icon: Trees, label: 'Áreas Verdes', desc: 'Parques e praças para o lazer da família.' },
];

const mapsEmbed = MAPS_EMBED_URL;
const mapsLink = MAPS_LINK;

export default function Location() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="localizacao" className="relative py-24 md:py-36 bg-graphite-800">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionTitle
          eyebrow="Localização"
          title={<>No <span className="gold-text">coração</span> da Augusta Mota.</>}
          subtitle="Um endereço estratégico em uma das regiões mais valorizadas de Montes Claros — perto de tudo o que importa."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 relative">
            <div className="relative h-[420px] md:h-[520px] overflow-hidden border border-white/10">
              <iframe
                title="Mapa Park Way Residencial"
                src={mapsEmbed}
                className="w-full h-full grayscale contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="absolute top-4 right-4 bg-graphite-700/95 backdrop-blur border border-gold/40 text-gold px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-gold hover:text-graphite-700 transition-colors flex items-center gap-2"
            >
              <MapPin size={14} /> Abrir no Maps
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-1 mb-6">
              <p className="text-gold text-[11px] tracking-[0.3em] uppercase">Endereço</p>
              <p className="font-sans text-2xl md:text-3xl text-white font-light tracking-tight">
                {ADDRESS_LINE_1}
              </p>
              <p className="text-white/70">{ADDRESS_LINE_2}</p>
            </div>

            <div className="space-y-4">
              {nearby.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 border-l-2 border-gold/40 hover:border-gold pl-5 py-2 transition-colors"
                >
                  <Icon className="text-gold mt-1 flex-shrink-0" size={22} strokeWidth={1.3} />
                  <div>
                    <p className="text-white text-sm md:text-base font-medium">{label}</p>
                    <p className="text-white/60 text-xs md:text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
