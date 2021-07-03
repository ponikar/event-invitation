import { memo } from "react";
import { TicketCard } from "./ticket-card.component";
import { TicketDetails } from "./Ticket-details.component";
import "./ticket.style.css";

export const Ticket = memo(({ ...props }) => {
  return (
    <section>
      <div className="sm:w-8/12 w-full mx-auto">
        <TicketCard {...props} />
      </div>
      <TicketDetails />
    </section>
  );
});
