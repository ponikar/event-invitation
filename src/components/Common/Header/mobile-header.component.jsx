import { Link } from "react-router-dom";

export const MobileHeader = ({ menuToggle }) => {
  return menuToggle && <nav className="px-5 py-4 border-b border-gr flex flex-col">
  <Link to="/" className="text-sm my-1"> Home </Link>
  <Link to="/about" className="text-sm my-1"> About </Link>
  <Link to="/#schedule" className="text-sm my-1"> Schedule </Link>
  <Link to="/blog" className="text-sm my-1"> Blog </Link>
</nav>
};
