import { Mail, Linkedin } from "react-feather"

const IconProps = {
    className: "text-grey cursor-pointer mx-2",
    size:16
}

export const Member = () => {
  return (
    <div className="w-full flex flex-col items-center text-center p-2">
     <img src="/assets/svgs/circle.svg" className="w-28 object-cover my-2" />
      <h2 className="text-center"> Name </h2>
      <div className="flex text-grey text-sm justify-center w-full items-center">
        <p className="mx-2"> Role </p> |
        <Mail {...IconProps}  /> |
        <Linkedin {...IconProps}  /> 
      </div>
    </div>
  );
};
