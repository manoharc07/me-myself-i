import Footer from "../footer/Footer"
import Greetings from "../greetings/Greetings"
import Navbar from "../navbar/Navbar"
import "./AppLayout.css"

const AppLayout = () => {
    return <div className="appLayout">
        <Navbar />
        <Greetings />
        <div className="footer">
            <Footer />
        </div>
    </div>
}

export default AppLayout
