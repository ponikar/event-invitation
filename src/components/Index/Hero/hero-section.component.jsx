import { PrimaryButton } from "../../Common/Button/button.component";
import { Calendar } from "react-feather";
import { HeaderTitle } from "../../Common/Typography/header-title.component";
export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center mt-24 p-5 items-center">
      <HeaderTitle title="This will be a tagline which address people nicely" />
      <PrimaryButton className="my-12">
        Add to Calender <Calendar size={18} className="text-black ml-2" />{" "}
      </PrimaryButton>
      <img
        alt="Event"
        loading="lazy"
        src="/assets/svgs/hero.svg"
        className="lg:w-4/12 w-11/12 my-8"
      />
    </section>
  );
};
