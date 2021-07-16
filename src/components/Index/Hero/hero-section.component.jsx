import { AddToCalender } from "../../Common/AddToCalender/add-to-calender.component";
import { HeaderTitle } from "../../Common/Typography/header-title.component";
export const HeroSection = () => {
  return (
    <section
      data-testid="main-header"
      className="flex flex-col justify-center mt-24 p-5 items-center"
    >
      <HeaderTitle title="Virtual Event to Explore Extraordinary stuff." />
      <AddToCalender className="my-12" />
      <img
        data-testid="main-image"
        alt="Event"
        loading="lazy"
        src="/assets/svgs/hero.svg"
        className="lg:w-4/12 w-11/12 my-8"
      />
    </section>
  );
};
