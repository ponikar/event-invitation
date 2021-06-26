import { PrimaryButton } from "../../Common/Button/button.component";
import { Calendar } from "react-feather"
export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center mt-24 p-5 items-center">
      <h1 className="lg:w-5/12 w-11/12 lg:text-5xl text-xl bold text-center">
        This will be a tagline which address people nicely
      </h1>
      <PrimaryButton className="my-12">Add to Calender <Calendar size={18} className="text-white ml-2" />  </PrimaryButton>
      <img alt="Event" loading="lazy" src="/assets/svgs/hero.svg" className="lg:w-4/12 w-11/12 my-8" />
    </section>
  );
};
