import { PrimaryButton } from "../../Common/Button/button.component";
import { Calendar } from "react-feather"
export const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center mt-24 p-5 items-center">
      <h1 className="lg:text-5xl bold md:text-3xl text-xl lg:w-5/12 md:w-7/12 sm:w-11/12 text-center">
        This will be a tagline which address people nicely
      </h1>
      <PrimaryButton className="my-12"> Add to Calender <Calendar size={18} className="text-white ml-2" />  </PrimaryButton>
      <img src="/assets/svgs/hero.svg" className="lg:w-4/12 w-11/12 my-8" />
    </section>
  );
};
