import { Logo } from "../Logo/logo.component";

export const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col border-t border-gr py-2  container justify-between items-center">
      <Logo />
      <div className="sm:my-0 my-2">
        <h5 className="text-center text-hl"> Join Discord </h5>
        <a href="https://discord.gg/BxY2z4WHP8" target="_blank">
          <img src="/assets/svgs/discord.svg" className="w-10 mx-auto" />
        </a>
      </div>
    </footer>
  );
};
