export const InputBox = ({ label, ...rest }) => {
  return (
    <div className="my-4 text-sm">
      <label>{label}</label>
      <input
        className="border-b-2 w-full  
          focus:outline-none border-pc placeholder-pc py-2  
          font-light"
        {...rest}
        required
      />
    </div>
  );
};
