import "./bestCard.scss"
import chickenLeg from "../../assets/images/chickenLeg.svg"
import biker from "../../assets/images/biker.svg"
import mobileApp from "../../assets/images/mobileApp.svg"

const BestCard = () => {
    return (
        <section className="container spefication">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-3 ">
                    <h2> Why We Are Best in Our Town</h2>
                    <p className="para">
                        whole grains and low fat dairy can
                        help to reduce your risk of heart
                        disease by maintaining blood
                        pressure and suger.
                    </p>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-image  d-flex justify-content-center align-items-center">
                            <img src={chickenLeg} alt="chickenLeg" />
                        </div>
                        <div className="card-body d-flex justify-content-end align-items-center flex-column">
                            <h3>Choose Your Favorite Food</h3>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-image  d-flex justify-content-center align-items-center">
                            <img src={biker} alt="biker" />
                        </div>
                        <div className="card-body d-flex justify-content-end align-items-center flex-column">
                            <h3>Get Delivery At Your Door Step</h3>
                        </div>
                    </div>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-3  d-flex justify-content-center align-items-center">
                    <div className="card">
                        <div className="card-image  d-flex justify-content-center align-items-center">
                            <img src={mobileApp} alt="mobileApp" />
                        </div>
                        <div className="card-body d-flex justify-content-end align-items-center flex-column">
                            <h3>We Have 200+ Review On Our App</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default BestCard