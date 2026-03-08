import { useState } from 'react';
import { species, families, type ButterflySpecies, type EvolutionaryTrait, traitLabels } from '@/data/species';
import SpecimenDetail from './SpecimenDetail';

const traits: EvolutionaryTrait[] = ['mimicry', 'camouflage', 'aposematism', 'sexual-dimorphism', 'seasonal-variation', 'migration'];

const SpeciesGrid = () => {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);
  const [activeTrait, setActiveTrait] = useState<EvolutionaryTrait | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<ButterflySpecies | null>(null);

  const filtered = species.filter((s) => {
    if (activeFamily && s.family.toLowerCase() !== activeFamily) return false;
    if (activeTrait && !s.evolutionaryTraits.includes(activeTrait)) return false;
    return true;
  });

  return (
    <section id="species" className="py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="archive-mono text-muted-foreground mb-2 block">Archive Collection</span>
            <h2 className="archive-heading text-5xl md:text-7xl">
              Specimen<br /><span className="italic">Index</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
            Each specimen is documented with taxonomic classification, geographic origin, 
            wing color spectrum, pattern geometry, and morphological measurements.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Family filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="archive-mono text-muted-foreground mr-2 w-20">Family</span>
            <button
              onClick={() => setActiveFamily(null)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                !activeFamily ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {families.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFamily(activeFamily === f.id ? null : f.id)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                  activeFamily === f.id ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Trait filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="archive-mono text-muted-foreground mr-2 w-20">Trait</span>
            <button
              onClick={() => setActiveTrait(null)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                !activeTrait ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {traits.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTrait(activeTrait === t ? null : t)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase border transition-all ${
                  activeTrait === t ? 'bg-foreground text-background border-foreground' : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {traitLabels[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="mb-8 flex items-center gap-4">
          <span className="font-display text-4xl">{filtered.length}</span>
          <span className="archive-mono text-muted-foreground">specimens found</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {filtered.map((s, idx) => (
            <SpecimenCard
              key={s.id}
              species={s}
              index={idx}
              onClick={() => setSelectedSpecies(s)}
            />
          ))}
        </div>

        {/* Detail modal */}
        {selectedSpecies && (
          <SpecimenDetail
            species={selectedSpecies}
            onClose={() => setSelectedSpecies(null)}
          />
        )}
      </div>
    </section>
  );
};

const SpecimenCard = ({
  species: s,
  index,
  onClick,
}: {
  species: ButterflySpecies;
  index: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="specimen-card bg-background p-6 cursor-pointer group"
      onClick={onClick}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Dot pattern (Kunsthalle style) */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {s.dotPattern.map((active, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active
                ? 'bg-foreground group-hover:bg-accent'
                : 'bg-border'
            }`}
          />
        ))}
      </div>

      {/* Image */}
      {s.imageUrl ? (
        <div className="aspect-[4/3] overflow-hidden mb-4 bg-muted">
          <img
            src={s.imageUrl}
            alt={`${s.commonName} specimen`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] mb-4 bg-muted flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-2">
              {s.wingColorHex.map((c, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-border" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="archive-mono text-muted-foreground">Digital scan pending</span>
          </div>
        </div>
      )}

      {/* Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl leading-tight">{s.commonName}</h3>
          <span className="archive-mono text-muted-foreground shrink-0">{s.specimenCount} sp.</span>
        </div>
        <p className="font-mono text-xs italic text-muted-foreground">{s.scientificName}</p>
        
        {/* Color swatches */}
        <div className="flex items-center gap-1.5 pt-2">
          {s.wingColorHex.map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-sm border border-border"
              style={{ backgroundColor: color }}
              title={s.wingColors[i]}
            />
          ))}
          <span className="ml-2 archive-mono text-muted-foreground">{s.wingspan}</span>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-1 pt-1">
          {s.evolutionaryTraits.map((t) => (
            <span key={t} className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 bg-secondary text-secondary-foreground">
              {traitLabels[t]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeciesGrid;
