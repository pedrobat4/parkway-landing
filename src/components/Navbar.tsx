import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { logoUrl, PHONE_DISPLAY, PHONE_TEL } from '../data/assets';

const links = [
  { label: 'O Empreendimento', href: '#diferenciais' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Ficha Técnica', href: '#ficha' },
  { label: 'Localização', href: '#localizacao' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-graphite-700/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Park Way Residencial"
            className="h-9 md:h-10 w-auto invert brightness-0 contrast-200"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-white/80 hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={PHONE_TEL}
          className="hidden lg:inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-graphite-700 px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300"
        >
          <Phone size={14} /> {PHONE_DISPLAY}
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-graphite-700/98 backdrop-blur-md border-t border-white/5">
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-gold py-2 border-b border-white/5 text-sm tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="mt-2 text-center border border-gold text-gold px-5 py-3 text-sm tracking-wider uppercase"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
