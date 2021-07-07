import { ScheduleTimeLine } from "./timeline.component";

export const ScheduleBlock = ({ presenter_name, presenter_url, title, time, last, index  }) => {
  return (
    <div className="flex items-center">
      <ScheduleTimeLine type={index === 0 ? "start" : last ? "end" : undefined} />
      <section className="bg-white flex-1 mb-4 items-center shadow justify-between rounded-pm sm:px-8 px-4 py-4 flex">
        <img src={presenter_url} alt="svg_image" style={{ width: "45px", height: "45px"}} className="rounded-full border border-gr object-contain" />
        <div className="flex flex-1 ml-3 flex-col justify-center">
          <h4> {title} </h4>
          <div className="flex w-full">
            <h5 className="text-xs"> {presenter_name} </h5>
            <img src="/assets/svgs/time.svg" alt="svg_image" className="w-3 mx-1" />
            <span className="text-xs text-grey"> {time} </span>
          </div>
        </div>
      </section>
    </div>
  );
};
