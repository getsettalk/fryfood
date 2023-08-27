import React from 'react'
import { motion } from "framer-motion"
import Nav from '../Nav/Nav'
import "./Header.scss"
import kfc from "../../assets/images/kfc.svg"
import openDoor from "../../assets/images/openDoor.svg"


const Header = () => {
    const container = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };



    return (
        <motion.div className='header'
            variants={container}
            initial="hidden"
            animate="visible">
            <Nav />
            <div className="container-fluid header-banner">
                <div className="textContent">
                    <motion.div className="smallTag" variants={item}>
                        <p>More than Faster</p>
                        <img src={kfc} alt="kfc like" />
                    </motion.div>
                    <h1>Get Your Fry Food Delivered Right To <span>Your Door</span></h1>
                    <p>Food that is delivered at the right time. The trendy food
                        delivery partner. Good food is what we deliver. Your
                        hunger companion. </p>
                    <motion.button className='btn-primary' variants={item}>Explore Food</motion.button>
                </div>
                <div className="ImageContent">
                    <img src={openDoor} alt="Delivery Boy" />
                </div>
            </div>
        </motion.div>

    )
}

export default Header