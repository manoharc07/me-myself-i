import Mail from "../../assets/mail.svg"
import Connect from "../../assets/connect.svg"
import Medium from "../../assets/medium.svg"
import Linkedin from "../../assets/linkedin.svg"
import Git from "../../assets/git.svg"
import "./Footer.css"

const Footer = () => {
    return <div className="footer">
        <div className="contactMe">
            <span>
                Contact Me
                <img className="headerIcon" src={Mail} alt="" />
            </span>
            <span>manoharc07@gmail.com</span>
        </div>
        <div className="connect">
            <span>
                Let's Connect
                <img className="headerIcon" src={Connect} alt="" />
            </span>
            <span>
                <img className="subHeaderIcon" src={Medium} alt="" />
                <img className="subHeaderIcon" src={Linkedin} alt="" />
                <img className="subHeaderIcon" src={Git} alt="" />
            </span>
        </div>
        <div className="copyright">
            <span>
                Made with ❤
            </span>
            <span>&copy; 2023 Manohar C</span>
        </div>
    </div>
}
export default Footer
