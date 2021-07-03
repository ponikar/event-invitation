import { memo } from "react";
import { Calendar } from "react-feather";
import { PrimaryButton } from "../Button/button.component";
import { eventURL } from "./add-to-calender.helpers";

export const AddToCalender = memo(({ className }) => {
  return (
    <a
      href={eventURL}
      target="_blank"
      className={className}
    >
      <PrimaryButton>
        Add to Calender <Calendar size={18} className="text-black ml-2" />{" "}
      </PrimaryButton>
    </a>
  );
});
