import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { headerAnimatedProps } from "./mobile-header-animated.props"

const AnimatedLink = motion(Link)

export const MobileHeader = ({ menuToggle }) => {
    return <div className="w-full sm:hidden flex flex-col items-center">
        <AnimatedLink  animate={menuToggle ? "opened" : "closed"} {...headerAnimatedProps} to="/" className="w-full my-2 text-center">Home</AnimatedLink> 
        <AnimatedLink  animate={menuToggle ? "opened" : "closed"} {...headerAnimatedProps} to="/" className="w-full my-2 text-center">Home</AnimatedLink> 
        <AnimatedLink  animate={menuToggle ? "opened" : "closed"} {...headerAnimatedProps} to="/" className="w-full my-2 text-center">Home</AnimatedLink> 
    </div>
}

