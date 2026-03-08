const ResearchSection = () => {
  const pressures = [
    {
      title: 'Predation',
      description: 'Birds, lizards, and mantids exert intense selective pressure, driving evolution of warning colors, eyespots, and mimicry complexes.',
      stat: '60%',
      label: 'of species show anti-predator adaptations',
    },
    {
      title: 'Climate',
      description: 'Seasonal temperature and humidity variations trigger phenotypic plasticity — the same species producing different wing patterns in wet vs. dry seasons.',
      stat: '3',
      label: 'species with documented seasonal forms',
    },
    {
      title: 'Vegetation',
      description: 'Host plant chemistry influences larval development and adult wing pigmentation. Forest species trend darker; savanna species display brighter warning colors.',
      stat: '12+',
      label: 'distinct habitat types documented',
    },
    {
      title: 'Mimicry',
      description: 'Batesian and Müllerian mimicry rings connect species across families. Palatable species evolve to resemble toxic models, creating complex evolutionary networks.',
      stat: '5',
      label: 'species in mimicry relationships',
    },
  ];

  return (
    <section id="research" className="py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="archive-mono text-muted-foreground mb-2 block">Evolutionary Pressures</span>
          <h2 className="archive-heading text-5xl md:text-7xl">
            Forces of<br /><span className="italic">Selection</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {pressures.map((p) => (
            <div key={p.title} className="bg-background p-8 md:p-12 space-y-4 group">
              <div className="flex items-end gap-4">
                <span className="font-display text-5xl md:text-6xl group-hover:text-accent transition-colors duration-500">
                  {p.stat}
                </span>
                <span className="archive-mono text-muted-foreground pb-2">{p.label}</span>
              </div>
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
