export const HeaderTitle = ({ title, className }) => {
  return (
    <h1
      className={`${className} xl:w-5/12 lg:w-6/12 mx-auto w-11/12 xl:text-5xl lg:text-4xl text-xl bold text-center`}
    >
      {title}
    </h1>
  );
};
