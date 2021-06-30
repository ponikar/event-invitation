import { Logo } from "../Logo/logo.component"


export const Footer = () => {
    return <footer className="flex sm:flex-row flex-col border-t border-gr py-2  container justify-between items-center">
            <Logo />
        <p className="text-grey text-sm"> Created by GEC Dahod Students </p>
    </footer>
}