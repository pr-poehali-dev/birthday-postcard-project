import HeroSection from "@/components/HeroSection";
import WalkingSection from "@/components/WalkingSection";
import ElementSchoolSection from "@/components/ElementSchoolSection";
import CreativeSection from "@/components/CreativeSection";
import NostalgiaSection from "@/components/NostalgiaSection";
import MemeSection from "@/components/MemeSection";
import QuizSection from "@/components/QuizSection";
import RaccoonGameSection from "@/components/RaccoonGameSection";
import MusicSection from "@/components/MusicSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WalkingSection />
      <MemeSection />
      <ElementSchoolSection />
      <QuizSection />
      <CreativeSection />
      <RaccoonGameSection />
      <NostalgiaSection />
      <MusicSection />
    </div>
  );
};

export default Index;
