import { PrimaryButton } from "../../Common/Button/button.component";
import { Container } from "../../Common/Container/container.component";
import { Link } from "react-router-dom"
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
          This event give you lot of new knowledge and this learning influence
          you to change.There is a vast gap between knowledge & skills you get
          from University and the skills & knowledge which are required in
          industry .
          <Link to="/about">
            <PrimaryButton className="my-3">Take a look!</PrimaryButton>
          </Link>
        </p>
      </div>
    </Container>
  );
};
