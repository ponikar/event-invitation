import { Mail, Linkedin } from "react-feather"

const IconProps = {
    className: "text-grey cursor-pointer mx-2",
    size:16
}

export const Member = ({ last }) => {
  return (
    <div className={`w-full flex flex-col items-center text-center p-2 ${last && "sm:col-span-1 col-span-2"}`}>
     <img src="/assets/svgs/circle.svg" className="w-32 object-cover my-2" />
      <h2 className=""> Name </h2>
      <p className="mx-2 text-sm text-primary"> Android Developer </p>
      <div className="flex text-grey text-sm justify-center w-full items-center">
        <Mail {...IconProps}  /> |
        <Linkedin {...IconProps}  /> 
      </div>
    </div>
  );
};
