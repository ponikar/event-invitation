export const Member = () => {
  return (
    <div className="w-full text-center p-2">
     <img src="/assets/svgs/circle.svg" className="sm:w-full w-8/12 mx-auto object-cover my-2" />
      <h2> Name </h2>
      <div className="flex text-grey text-sm w-full border items-center justify-between">
        <p> Role </p> |
        <p> Email </p> |
        <p> Linkedin </p>
      </div>
    </div>
  );
};
