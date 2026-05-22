import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type Img = { src: string; title: string };

type Props = {
  images: Img[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-5 right-5 text-white/70 hover:text-gold p-2 z-10"
      >
        <X size={28} />
      </button>
      <button
        onClick={onPrev}
        aria-label="Anterior"
        className="absolute left-3 md:left-8 text-white/70 hover:text-gold p-2 z-10"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={onNext}
        aria-label="Próxima"
        className="absolute right-3 md:right-8 text-white/70 hover:text-gold p-2 z-10"
      >
        <ChevronRight size={36} />
      </button>

      <div className="max-w-[90vw] max-h-[88vh] flex flex-col items-center gap-4 px-4">
        <img
          src={current.src}
          alt={current.title}
          className="max-w-full max-h-[78vh] object-contain shadow-2xl"
        />
        <div className="text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase">{current.title}</p>
          <p className="text-white/50 text-xs mt-1">{index + 1} / {images.length}</p>
        </div>
      </div>
    </div>
  );
}
