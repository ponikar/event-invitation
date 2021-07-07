export const ScheduleTimeLine = ({ type = undefined }) => {
  return (
    <div className={`mx-2 flex-col flex ${type === "start" ? "justify-end" : type === "end" ? "justify-start" : "justify-center" } items-center h-24`}>
       { type !== "start" && <TimeLine />  }
            <TimeLinePoint />
      { type !== "end" && <TimeLine down /> }
    </div>
  );
};


const TimeLinePoint = () => {
    return <div className="p-1 border-2 relative border-primary bg-back rounded-full">
    <div className="p-1 rounded-full bg-primary" />
  </div>
}

const TimeLine = ({ down }) => {
    return  <div className={`border-2 bg-primary border-primary w-1 ${down ? "h-11": "h-8"}`} />
}