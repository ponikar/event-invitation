import { Container } from "../../Common/Container/container.component";
import SectionTitle from "../../Common/Typography/section-title.component";
import { ScheduleBlock } from "./schedule-block.component";



export const ScheduleSection = () => {
    return <Container id="schedule">
        <SectionTitle title="Schedule" />
        <div className="flex sm:w-9/12 mx-auto border justify-center items-center sm:flex-row flex-col gap-5">
          <ScheduleCol>
            <ScheduleBlock />
            <ScheduleBlock />
          </ScheduleCol>
          <ScheduleCol>
            <ScheduleBlock />
            <ScheduleBlock />
          </ScheduleCol>
        </div>
    </Container>
};


export const ScheduleCol = ({ children }) => {
    return  <div className="sm:w-11/12">
      { children }
    </div>
}