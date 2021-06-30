import { PrimaryButton } from "../../Common/Button/button.component";
import { Container } from "../../Common/Container/container.component";

export const TeamSection = () => {
  return (
    <Container className="grid mt-40 sm:grid-cols-2 gap-8">
      <img
        src="/assets/svgs/team.svg"
        className="w-8/12 mx-auto object-contain"
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-2 w-10/12 bold text-left text-2xl mt-2">
        Community for All
        </h3>
        <p className="w-10/12 mx-auto text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,

          <PrimaryButton className="my-3">
            Take a look!
        </PrimaryButton>
        </p>
      </div>
    </Container>
  );
};
