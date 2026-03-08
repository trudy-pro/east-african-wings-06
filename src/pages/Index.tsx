import HeroSection from '@/components/HeroSection';
import SpeciesGrid from '@/components/SpeciesGrid';
import ArchiveZones from '@/components/ArchiveZones';
import ResearchSection from '@/components/ResearchSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SpeciesGrid />
      <ArchiveZones />
      <ResearchSection />
      <Footer />
    </div>
  );
};

export default Index;
