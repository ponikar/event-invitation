import { DISCORD_URL } from "../../../globals";
import { Logo } from "../Logo/logo.component";

export const Footer = () => {
  return (
    <footer className="flex sm:flex-row flex-col border-t border-gr py-2  container justify-between items-center">
      <Logo />
      <div className="sm:my-0 my-2">
        <h5 className="text-center text-hl"> Join Discord </h5>
        <a  rel="noreferrer" href={DISCORD_URL} target="_blank">
          <img alt="Nxt.tech on Discord" src="/assets/svgs/discord.svg" className="w-10 mx-auto" />
        </a>
      </div>
    </footer>
  );
};
