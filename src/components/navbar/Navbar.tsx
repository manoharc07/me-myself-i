import AnimatedText from "../animated-text/AnimatedText"
import "./Navbar.css"

const Navbar = () => {
    return <div className="navbar">
        <div className="navTitle"><AnimatedText targetText="Manohar C" /></div>
        <div className="navLinks">
            <div>Work</div>
            <div>About</div>
            <div>Resume</div>
        </div>
    </div>
}

export default Navbar
