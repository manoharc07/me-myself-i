import AnimatedText from "../animated-text/AnimatedText"
import "./Navbar.css"

const Navbar = () => {
    const handleResumeClick = () => {
        const url = import.meta?.env?.VITE_RESUME_URL ? import.meta.env.VITE_RESUME_URL : "https://drive.google.com/file/d/1Sw0waE4uhEt9ry4h-mllUrtp32XipnYN/view" 
        window.open(url, '_blank');
    }
    return <div className="navbar">
        <div className="navTitle"><AnimatedText targetText="Manohar C" /></div>
        <div className="navLinks">
            {/* <div>Work</div>
            <div>About</div> */}
            <div onClick={handleResumeClick}>Resume</div>
        </div>
    </div>
}

export default Navbar
