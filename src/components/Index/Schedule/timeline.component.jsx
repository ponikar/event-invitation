export const ScheduleTimeLine = ({ type = undefined }) => {
  return (
    <div className={`mx-2 flex-col flex ${type === "start" ? "justify-start" : type === "end" ? "justify-start" : "justify-center" } items-center h-24`}>
       { type !== "start" && <TimeLine /> }
            <TimeLinePoint />
      { type !== "end" && <TimeLine down /> }
    </div>
  );
};


const TimeLinePoint = () => {
    return <div className="p-1 border-2 relative border-info bg-back rounded-full">
    <div className="p-1 rounded-full bg-info" />
  </div>
}

const TimeLine = ({ down }) => {
    return  <div className={`border-2 border-info w-1 ${down ? "h-11": "h-8"}`} />
}