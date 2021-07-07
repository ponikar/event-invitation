import { firstBlock, secondBlock } from "../../../data/schedule.data";
import { Container } from "../../Common/Container/container.component";
import SectionTitle from "../../Common/Typography/section-title.component";
import { ScheduleBlock } from "./schedule-block.component";



export const ScheduleSection = () => {
    return <Container name="schedule" id="schedule">
        <SectionTitle title="Schedule" />
        <div className="flex sm:w-9/12 mx-auto justify-center items-center sm:flex-row flex-col gap-5">
          <ScheduleCol title="17th July, Saturday">
            { firstBlock.map((block, index) => <ScheduleBlock last={index === firstBlock.length - 1} index={index} key={index} {...block} />) }
          </ScheduleCol>
          <ScheduleCol title="18th July, Sunday">
          { secondBlock.map((block, index) => <ScheduleBlock last={index === secondBlock.length - 1} index={index} key={index} {...block} />) }
          </ScheduleCol>
        </div>
    </Container>
};


export const ScheduleCol = ({ children, title }) => {
    return  <div className="sm:w-11/12">
      <h2 className="text-center my-2"> {title} </h2>
      { children }
    </div>
}