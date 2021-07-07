import { memo } from "react";
import { AddToCalender } from "../../Common/AddToCalender/add-to-calender.component";
import { Container } from "../../Common/Container/container.component";
export const TicketDetails = memo(() => {
  return (
    <Container className="flex text-center flex-col items-center">
      <AddToCalender className="mb-5" />
      <h2> For more updates join our Discord Community! You will receive confirmation email soon. </h2>
      <h2> Don't forget to checkout Schedule </h2>

      <a href="https://discord.gg/BxY2z4WHP8" rel="noreferrer"  target="_blank">
        <img
          src="/assets/svgs/discord.svg"
          alt="nxt.tech on Discord"
          className="w-11 my-5"
        />
      </a>

      <p className="text-hl text-grey">
        Be part of Community, Learn together, Grow Together!
      </p>
    </Container>
  );
});
