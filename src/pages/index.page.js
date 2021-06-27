// Index Page

import { Header } from "../components/Common/Header/header.component";
import BlockCollections from "../components/Index/Blocks/block-collections.component";
import { HeroSection } from "../components/Index/Hero/hero-section.component";
import { ScheduleSection } from "../components/Index/Schedule/schedule-section.component";
import { TeamSection } from "../components/Index/Team-Section/team-section.component";

export const Index = () => {
  return (
    <>
    <Header />
    <main>
      <HeroSection />
      <BlockCollections />
      <TeamSection />
      <ScheduleSection />
    </main>
    </>
  );
};
