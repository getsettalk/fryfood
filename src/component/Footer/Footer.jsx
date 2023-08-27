import "./footer.scss"
import logo from "../../assets/logo/logo.svg"
import { Link } from "react-router-dom"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footerMain">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6-col-md-4 col-lg-3">
                            <img src={logo} alt="log" />
                            <div className="para">
                                Retail food delivery is a courier
                                service in which a restaurant, store,
                                or independent food delivery
                            </div>
                        </div>
                        <div className="col-6 col-sm-6-col-md-4 col-lg-3">
                            <div className="footerMain">Company</div>
                            <ul>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Payment</li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-6-col-md-4 col-lg-3">
                            <div className="footerMain">Service</div>
                            <ul>
                                <li>Order tracking</li>
                                <li>Wish List</li>
                                <li>My account</li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-6-col-md-4 col-lg-3">
                            <div className="footerMain">Support</div>
                            <ul>
                                <li>FAQ </li>
                                <li>Policy</li>
                                <li>Support Carrer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerSec">
                <p>Copyright &copy; {currentYear}</p>
                <Link to={"https://github.com/getsettalk"}>Developed By Sujeet</Link>
            </div>
        </footer>
    )
}

export default Footer