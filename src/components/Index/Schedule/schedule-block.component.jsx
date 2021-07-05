import { ScheduleTimeLine } from "./timeline.component";

export const ScheduleBlock = () => {
  return (
    <div className="flex items-center">
      <ScheduleTimeLine type="end" />
      <section className="bg-white flex-1 mb-4 items-center shadow justify-between rounded-pm sm:px-8 px-4 py-4 flex">
        <img src="/assets/svgs/circle.svg" alt="svg_image" className="rounded-full w-10" />
        <div className="flex flex-1 ml-3 flex-col justify-center">
          <h4>Modern Web 2021</h4>
          <div className="flex w-full">
            <h5 className="text-xs">Darshan Ponikar</h5>
            <img src="/assets/svgs/time.svg" alt="svg_image" className="w-3 mx-1" />
            <span className="text-xs text-grey">10:00 to 11:00 </span>
          </div>
        </div>
      </section>
    </div>
  );
};
