type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left', light = false }: Props) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl gap-5 mb-14 md:mb-20`}>
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-gold" />
        <span className={`text-[11px] md:text-xs tracking-[0.35em] uppercase ${light ? 'text-graphite-500' : 'text-gold'}`}>
          {eyebrow}
        </span>
      </div>
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-balance ${light ? 'text-graphite-700' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-graphite-400' : 'text-white/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
