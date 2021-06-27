// Index Page

import BlockCollections from "../components/Index/Blocks/block-collections.component";
import { HeroSection } from "../components/Index/Hero/hero-section.component";
import { ScheduleSection } from "../components/Index/Schedule/schedule-section.component";
import { TeamSection } from "../components/Index/Team-Section/team-section.component";

export const Index = () => {
  return (
    <main>
      <HeroSection />
      <BlockCollections />
      <TeamSection />
      <ScheduleSection />
    </main>
  );
};
