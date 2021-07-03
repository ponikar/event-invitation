// Index Page
import { PageBase } from "../components/Common/Page-Base/page-base.component";
import BlockCollections from "../components/Index/Blocks/block-collections.component";
import { HeroSection } from "../components/Index/Hero/hero-section.component";
import { ScheduleSection } from "../components/Index/Schedule/schedule-section.component";
import { TeamSection } from "../components/Index/Team-Section/team-section.component";
import { useTitle } from "../hooks/useTitle.component";

const Index = () => {
  useTitle("NXT.Tech | Virtual Event");
  return (
     <>
     <PageBase>
      <HeroSection />
      <BlockCollections />
      <TeamSection />
      <ScheduleSection />
    </PageBase>
     </>
  );
};

export default Index;