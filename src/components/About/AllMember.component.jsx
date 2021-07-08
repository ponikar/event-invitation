import { Members } from "../About/memberInfo";
import { Container } from "../Common/Container/container.component";
import { Member } from "../About/member.component";

export const AllMember = () => {
  return (
    <div className="collection">
      <Container className="grid lg:grid-cols-5 grid-cols-2 sm:w-9/12 w-full">
        {Members.map((member, index) => (
          <Member
            key={index}
            {...member}
          />
        ))}
      </Container>
    </div>
  );
};
