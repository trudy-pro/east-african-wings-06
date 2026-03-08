import butterflyIllustration from '@/assets/butterfly-illustration.jpg';

const zones = [
  {
    id: 'collection',
    number: '01',
    title: 'Collection & Preservation',
    subtitle: 'Zone',
    description:
      'Climate-controlled storage for physical specimens. Each specimen undergoes precise pinning, labeling, and archival preservation following international entomological standards.',
    color: 'var(--emerald)',
    details: ['Climate-controlled storage', 'Specimen preservation', 'Digital scanning', 'DNA sampling'],
  },
  {
    id: 'comparative',
    number: '02',
    title: 'Comparative Study',
    subtitle: 'Zone',
    description:
      'Research area for analyzing color variation, wing shape morphometrics, pattern geometry, and wing form evolution. Equipped with high-resolution imaging and spectrophotometry.',
    color: 'var(--amber)',
    details: ['Wing morphometrics', 'Color spectrophotometry', 'Pattern analysis', 'Phylogenetic mapping'],
  },
  {
    id: 'exhibition',
    number: '03',
    title: 'Interpretation & Exhibition',
    subtitle: 'Zone',
    description:
      'Public displays explaining evolutionary processes through curated specimen arrangements. Interactive displays reveal how natural selection drives biodiversity in East Africa.',
    color: 'var(--foreground)',
    details: ['Public exhibitions', 'Interactive displays', 'Educational programs', 'Guided tours'],
  },
];

const ArchiveZones = () => {
  return (
    <section id="zones" className="py-24 px-6 md:px-12 bg-secondary">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <span className="archive-mono text-muted-foreground mb-2 block">Spatial Organization</span>
            <h2 className="archive-heading text-5xl md:text-7xl">
              Archive<br /><span className="italic">Zones</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground leading-relaxed max-w-md">
              The archive acts as both a scientific repository and an educational space. 
              Storage and displays encourage visual comparison between species, revealing 
              how natural selection shapes biodiversity in East Africa.
            </p>
          </div>
        </div>

        {/* Zones grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-background p-8 space-y-6">
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl text-muted-foreground/30">{zone.number}</span>
                <div
                  className="zone-indicator mt-2"
                  style={{ backgroundColor: `hsl(${zone.color})` }}
                />
              </div>
              <div>
                <h3 className="font-display text-2xl leading-tight">{zone.title}</h3>
                <span className="font-display text-2xl italic text-muted-foreground">{zone.subtitle}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{zone.description}</p>
              <div className="pt-4 border-t border-border space-y-2">
                {zone.details.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    <span className="text-xs font-mono tracking-wider">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Illustration section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden">
            <img
              src={butterflyIllustration}
              alt="Scientific illustration of East African butterfly specimen"
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6">
            <span className="archive-mono text-muted-foreground">Documentation Process</span>
            <h3 className="font-display text-3xl">
              Every specimen tells<br />a <span className="italic">story of adaptation</span>
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Each specimen is documented with taxonomic classification, geographic origin 
                and habitat, wing color spectrum, pattern geometry and symmetry, and 
                morphological measurements.
              </p>
              <p>
                Physical specimens are supported by digital scanning and comprehensive databases, 
                enabling researchers worldwide to study how environmental pressures — predation, 
                climate, vegetation, and mimicry — drive the extraordinary diversity of butterfly 
                wing patterns across East Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchiveZones;
