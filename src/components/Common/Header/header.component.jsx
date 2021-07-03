import { memo, useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button/button.component";
import { MobileHeader } from "./mobile-header.component";
import { Logo } from "../Logo/logo.component";
import { FirebaseAuth } from "../../../firebase/firebase.config";
import { setUserId } from "../../../helpers/storage.helpers";
import { SignOutButton } from "./sign-out.component";

export const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
     const unsubscribe = FirebaseAuth.onAuthStateChanged(user => {
          if(user) return setUserId(user.uid);
          return setUserId(null);
      });
      return () => unsubscribe();
  }, []);

  return (
    <>
      <nav style={{ height: "-10px" }} className="w-full border-b border-gr">
        <section className="flex my-4 container items-center justify-between">
          <Logo />
          <div className="sm:flex hidden w-10/12 justify-end items-center">
            <Link to="/" className="text-sm mx-5">
              Home
            </Link>
            <Link to="/about" className="text-sm mx-5">
              About
            </Link>
            <Link to="/#schedule" className="text-sm mx-5">
              Schedule
            </Link>
            <SignOutButton className="text-sm mx-5" />
            <TicketButton />
          </div>
          <div className="sm:hidden flex">
            <TicketButton />
            {!menuToggle ? (
              <Menu
                onClick={(_) => setMenuToggle(true)}
                size={22}
                className="mt-2 block"
              />
            ) : (
              <X
                onClick={(_) => setMenuToggle(false)}
                size={22}
                className="mt-2 block"
              />
            )}
          </div>
        </section>
      </nav>
      <MobileHeader menuToggle={menuToggle} />
    </>
  );
};

const TicketButton = memo(() => {
  return (
    <Link to="/register-event">
      <PrimaryButton className="text-xs mr-4">Get your Ticket</PrimaryButton>
    </Link>
  );
})
