import "./benifit.scss"
import delivery from "../../assets/images/delivery.svg"
import truck from "../../assets/benefit/truck.svg"
import rupee from "../../assets/benefit/rupee.svg"
import lock from "../../assets/benefit/lock.svg"
import time from "../../assets/benefit/time.svg"

const Benefits = () => {
    return (
        <section className="benefit">
            <div className="container-fluid">

                <div className="  d-flex justify-content-between align-items-center benefitBox">
                    <div className="ImageBox">
                        <img src={delivery} alt="delivery boy" />
                    </div>
                    <div className="TextData">
                        <h2>Take a look at the benefits we offer for you</h2>
                        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ratione?</p>
                        <div className="row ">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={truck} alt="benefits" />
                                        <h3>Free Home Delivery</h3>
                                        <p className="para">For All Order Over 500 rupee</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={rupee} alt="benefits" />
                                        <h3>Return & Refund</h3>
                                        <p className="para">Money Back Guarantee</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* next grid  */}
                        <div className="row ">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={lock} alt="benefits" />
                                        <h3>Secure Payment</h3>
                                        <p className="para">100% Secure Payment Getways</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={time} alt="benefits" />
                                        <h3>Quality Support</h3>
                                        <p className="para">Always Online 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits