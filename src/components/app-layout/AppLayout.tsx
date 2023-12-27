import Footer from "../footer/Footer"
import Greetings from "../greetings/Greetings"
import Navbar from "../navbar/Navbar"
import "./AppLayout.css"

const AppLayout = () => {
    return <div className="appLayout">
        <Navbar />
        <div className="greetings">
            <Greetings />
        </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
}

export default AppLayout
