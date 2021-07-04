import { Hexagon } from "react-feather";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <Link to="/">
      <header className="text-xl items-center flex">
        <Hexagon className="mr-1 text-primary" size={18} />
        NXT.Tech
      </header>
    </Link>
  );
};
