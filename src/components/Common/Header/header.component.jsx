import { useState } from "react"
import { Menu, X } from "react-feather"
import { Link } from "react-router-dom"
import { PrimaryButton } from "../Button/button.component"
import { Container } from "../Container/container.component"
import { MobileHeader } from "./mobile-header.component"




export const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return <nav className="w-full border-b border-gr">
        <section className="flex my-4 container items-start justify-between">
            <header className="text-2xl"> Title </header>

            <div className="sm:flex hidden w-10/12 justify-end items-center">
                <Link to="/" className="text-sm mx-7"> Home </Link>
                <Link to="/" className="text-sm mx-7"> About </Link>
                <Link to="/" className="text-sm mx-7"> Schedule </Link>
                <PrimaryButton className="text-sm">
                    Register Now!
                </PrimaryButton>
            </div>
            { !menuToggle ? <Menu onClick={_ => setMenuToggle(true)} size={22} className="sm:hidden mt-1 block" /> : 
            <X  onClick={_ => setMenuToggle(false)} size={22} className="sm:hidden mt-1 block" /> }
        </section>
        <MobileHeader menuToggle={menuToggle} />
    </nav>
}