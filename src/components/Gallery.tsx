import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Lightbox from './Lightbox';
import {
  apartmentImages,
  facadeImages,
  amenityImages,
  garageImages,
  planImages,
} from '../data/assets';
import { useReveal } from '../hooks/useReveal';

const tabs = [
  { id: 'fachada', label: 'Fachadas', images: facadeImages },
  { id: 'interna', label: 'Apartamentos', images: apartmentImages },
  { id: 'lazer', label: 'Áreas Comuns', images: amenityImages },
  { id: 'plantas', label: 'Plantas', images: planImages },
  { id: 'garagem', label: 'Garagem & Box', images: garageImages },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function Gallery() {
  const [active, setActive] = useState<TabId>('fachada');
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const images = useMemo(() => tabs.find((t) => t.id === active)!.images, [active]);

  useEffect(() => {
    setIndex(0);
  }, [active]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Preload vizinhos pra navegação ficar instantânea, sem manter no DOM
  useEffect(() => {
    const neighbors = [
      images[(index + 1) % images.length],
      images[(index - 1 + images.length) % images.length],
    ];
    neighbors.forEach((img) => {
      const i = new Image();
      i.src = img.src;
    });
  }, [index, images]);

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const thumbRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const container = thumbRef.current;
    const el = container?.querySelector<HTMLButtonElement>(`[data-thumb="${index}"]`);
    if (!container || !el) return;
    const target = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
    container.scrollTo({ left: target, behavior: 'smooth' });
  }, [index]);

  return (
    <section id="galeria" className="relative py-20 sm:py-24 md:py-36 bg-graphite-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <SectionTitle
          eyebrow="Galeria"
          title={<>Uma <span className="gold-text">experiência visual</span> do seu novo lar.</>}
          subtitle="Navegue pelos ambientes — arquitetura, interiores, lazer e plantas inteligentes."
        />

        <div className="mb-6 sm:mb-8 flex flex-wrap gap-x-1 gap-y-0 md:gap-2 border-b border-white/10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-300 relative ${
                active === t.id ? 'text-gold' : 'text-white/55 hover:text-white'
              }`}
            >
              {t.label}
              {active === t.id && (
                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-gold" />
              )}
            </button>
          ))}
        </div>

        <div ref={ref} className="reveal">
          {/* Main stage */}
          <div className="relative group">
            <div
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-graphite-900 overflow-hidden select-none touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].title}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                loading="eager"
                decoding="async"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/90 via-graphite-900/20 to-transparent pointer-events-none" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 flex items-end justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-gold text-[10px] md:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-1.5 sm:mb-2">
                    {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-lg sm:text-2xl md:text-4xl text-white leading-tight truncate sm:whitespace-normal">
                    {images[index].title}
                  </h3>
                </div>
                <button
                  onClick={() => setLightbox(index)}
                  aria-label="Ampliar"
                  className="hidden md:inline-flex items-center gap-2 border border-white/30 hover:border-gold hover:text-gold text-white px-4 py-2.5 text-[10px] tracking-[0.3em] uppercase transition-colors shrink-0"
                >
                  <Maximize2 size={14} /> Ampliar
                </button>
                <button
                  onClick={() => setLightbox(index)}
                  aria-label="Ampliar"
                  className="md:hidden shrink-0 w-10 h-10 flex items-center justify-center bg-graphite-900/70 backdrop-blur border border-white/20 text-white"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center bg-graphite-900/55 hover:bg-gold text-white hover:text-graphite-700 backdrop-blur transition-all duration-300 border border-white/10"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Próxima"
                className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 flex items-center justify-center bg-graphite-900/55 hover:bg-gold text-white hover:text-graphite-700 backdrop-blur transition-all duration-300 border border-white/10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-4 sm:mt-5 flex gap-1 sm:gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-0.5 flex-1 transition-colors duration-300 ${
                    i === index ? 'bg-gold' : 'bg-white/15 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div
            ref={thumbRef}
            className="mt-4 sm:mt-6 -mx-4 sm:mx-0 px-4 sm:px-0 grid grid-flow-col auto-cols-[38%] xs:auto-cols-[32%] sm:auto-cols-[22%] md:auto-cols-[16%] gap-2 sm:gap-3 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2"
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                data-thumb={i}
                onClick={() => setIndex(i)}
                className={`relative aspect-[4/3] overflow-hidden snap-start group transition-all duration-300 ${
                  i === index ? 'ring-2 ring-gold' : 'ring-1 ring-white/10 hover:ring-white/40'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    i === index ? '' : 'opacity-60 group-hover:opacity-100'
                  }`}
                />
                {i !== index && <div className="absolute inset-0 bg-graphite-900/30" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((i) => (i === null ? 0 : (i - 1 + images.length) % images.length))
          }
          onNext={() => setLightbox((i) => (i === null ? 0 : (i + 1) % images.length))}
        />
      )}
    </section>
  );
}
