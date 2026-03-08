import { type ButterflySpecies, traitLabels, wingShapeLabels } from '@/data/species';
import { X } from 'lucide-react';

interface Props {
  species: ButterflySpecies;
  onClose: () => void;
}

const SpecimenDetail = ({ species: s, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
      <div
        className="relative bg-background border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image + dots */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-border">
            {s.imageUrl ? (
              <div className="aspect-square overflow-hidden mb-6 bg-muted">
                <img src={s.imageUrl} alt={s.commonName} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="aspect-square mb-6 bg-muted flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="flex justify-center gap-2">
                    {s.wingColorHex.map((c, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-border" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="archive-mono text-muted-foreground">Specimen illustration</span>
                </div>
              </div>
            )}

            {/* Kunsthalle dot pattern */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Trait Encoding</span>
              <div className="flex flex-wrap gap-2">
                {s.dotPattern.map((active, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all ${
                      active ? 'bg-foreground' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="p-8 space-y-6">
            <div>
              <span className="archive-mono text-accent mb-1 block">{s.family}</span>
              <h2 className="font-display text-4xl leading-tight mb-1">{s.commonName}</h2>
              <p className="font-mono text-sm italic text-muted-foreground">{s.scientificName}</p>
            </div>

            <div className="divider-line" />

            {/* Taxonomic classification */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Taxonomic Classification</span>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <span className="text-muted-foreground">Family</span><span>{s.family}</span>
                {s.subfamily && <><span className="text-muted-foreground">Subfamily</span><span>{s.subfamily}</span></>}
                <span className="text-muted-foreground">Genus</span><span className="italic">{s.genus}</span>
              </div>
            </div>

            {/* Geographic origin */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Geographic Origin & Habitat</span>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <span className="text-muted-foreground">Countries</span>
                <span>{s.countries.join(', ')}</span>
                <span className="text-muted-foreground">Habitat</span>
                <span>{s.habitat}</span>
                {s.elevation && <><span className="text-muted-foreground">Elevation</span><span>{s.elevation}</span></>}
              </div>
            </div>

            {/* Wing color spectrum */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Wing Color Spectrum</span>
              <div className="flex items-center gap-2">
                {s.wingColorHex.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-sm border border-border" style={{ backgroundColor: color }} />
                    <span className="text-[10px] font-mono text-muted-foreground">{s.wingColors[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pattern & morphology */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Pattern Geometry & Morphology</span>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <span className="text-muted-foreground">Pattern</span>
                <span>{s.patternType.join(', ')}</span>
                <span className="text-muted-foreground">Wing shape</span>
                <span>{wingShapeLabels[s.wingShape]}</span>
                <span className="text-muted-foreground">Wingspan</span>
                <span>{s.wingspan}</span>
                <span className="text-muted-foreground">Specimens</span>
                <span>{s.specimenCount}</span>
              </div>
            </div>

            {/* Evolutionary traits */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Evolutionary Traits</span>
              <div className="flex flex-wrap gap-1">
                {s.evolutionaryTraits.map((t) => (
                  <span key={t} className="text-[10px] font-mono tracking-wider uppercase px-2 py-1 bg-secondary text-secondary-foreground">
                    {traitLabels[t]}
                  </span>
                ))}
              </div>
            </div>

            {/* Natural selection note */}
            <div className="space-y-2">
              <span className="archive-mono text-muted-foreground">Natural Selection</span>
              <p className="text-sm leading-relaxed">{s.naturalSelectionNote}</p>
            </div>

            {/* Archive zone */}
            <div className="pt-4 border-t border-border flex items-center gap-3">
              <div
                className="zone-indicator"
                style={{
                  backgroundColor:
                    s.archiveZone === 'collection'
                      ? 'hsl(var(--emerald))'
                      : s.archiveZone === 'comparative'
                      ? 'hsl(var(--amber))'
                      : 'hsl(var(--foreground))',
                }}
              />
              <span className="archive-mono text-muted-foreground">
                {s.archiveZone === 'collection'
                  ? 'Collection & Preservation Zone'
                  : s.archiveZone === 'comparative'
                  ? 'Comparative Study Zone'
                  : 'Interpretation & Exhibition Zone'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecimenDetail;
