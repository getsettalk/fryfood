import React from 'react'
import "./ourapp.scss"
import AppImg from "../../assets/App/our app.svg"
const OurApp = () => {
    return (
        <section className=' ourApp'>
            <div className='container'>

                <img src={AppImg} alt="AppImg" />
            </div>
        </section>
    )
}

export default OurApp