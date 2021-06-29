// Index Page

import { Footer } from "../components/Common/Footer/footer.component";
import { Header } from "../components/Common/Header/header.component";
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import BlockCollections from "../components/Index/Blocks/block-collections.component";
import { HeroSection } from "../components/Index/Hero/hero-section.component";
import { ScheduleSection } from "../components/Index/Schedule/schedule-section.component";
import { TeamSection } from "../components/Index/Team-Section/team-section.component";

export const Index = () => {
  return (
    <PageBase>
      <HeroSection />
      <BlockCollections />
      <TeamSection />
      <ScheduleSection />
    </PageBase>
  );
};
