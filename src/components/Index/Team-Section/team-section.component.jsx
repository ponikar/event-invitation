import { PrimaryButton } from "../../Common/Button/button.component";
import { Container } from "../../Common/Container/container.component";

export const TeamSection = () => {
  return (
    <Container className="grid mt-40 sm:grid-cols-2 gap-8">
      <img
        src="/assets/svgs/team.svg"
        alt="svg_Image"
        className="w-8/12 mx-auto object-contain"
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2 w-10/12 bold text-left text-2xl mt-2">
        Community for All
        </h3>
        <p className="w-10/12 mx-auto text-sm text-justify">
        This event is organized by the Group of Students of GEC Dahod to share their experience and knowledge what they gain in 4 years of engineering Career.
Some of the students are expert in freelancing , development , further studies , networking and entrepreneurship
Some expert from the industry , teaching field joined this event to give brief information about thir journey and experience.
</p>

<p className="w-10/12 mx-auto text-sm text-justify">
This is the first event of its type in this tuff period to think and express information in new way using technical way .
By attending this event is one of the fastest way to boost your knowledge in technical world .
If you are still doubting wheather to attend this upcoming event then you loose the opportunity.



          <PrimaryButton className="my-3">
            Take a look!
        </PrimaryButton>
        </p>
      </div>
    </Container>
  );
};
