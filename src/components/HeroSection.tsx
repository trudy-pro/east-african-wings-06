import heroButterfly from '@/assets/hero-butterfly.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroButterfly}
          alt="East African Swallowtail butterfly specimen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
      </div>

      {/* Top nav bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary-foreground/80">
          East Africa Butterfly Archive
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {['Archive', 'Species', 'Zones', 'Research'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs tracking-wider uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <h1 className="archive-heading text-primary-foreground text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.85]">
              NATURAL
              <br />
              <span className="italic">Selection</span>
            </h1>
          </div>
          <div className="lg:max-w-md lg:ml-auto">
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-6">
              An archive dedicated to exploring how natural selection shapes variation in color, 
              wing patterns, shapes and form across East African butterfly species.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block font-display text-3xl text-primary-foreground">15</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-primary-foreground/60">Species</span>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="block font-display text-3xl text-primary-foreground">6</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-primary-foreground/60">Families</span>
              </div>
              <div className="w-px h-10 bg-primary-foreground/20" />
              <div className="text-center">
                <span className="block font-display text-3xl text-primary-foreground">7</span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-primary-foreground/60">Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling marquee */}
        <div className="mt-12 overflow-hidden border-t border-primary-foreground/20 pt-4">
          <div className="flex scroll-marquee whitespace-nowrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="font-mono text-[10px] tracking-[0.5em] uppercase text-primary-foreground/40 mr-16">
                Color · Pattern · Shape · Form · Mimicry · Camouflage · Migration · Predation · Climate · Vegetation ·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
