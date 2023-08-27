import React, { useState } from 'react'
import Logo from "../../assets/logo/logo.svg"
import { Link } from 'react-router-dom'
import { TbSearch } from 'react-icons/tb';
import { FiShoppingBag } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import "./nav.scss"




const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="container-fluid">
            <nav className='nav ' >
                <img src={Logo} alt="Logo" />

                <ul className={navOpen ? "active scale-up-top " : null}>
                    <li> <Link to={"/"} className='text-decoration-none'>Home</Link> </li>
                    <li> <Link to={"/"} className='text-decoration-none'>About</Link> </li>
                    <li> <Link to={"/"} className='text-decoration-none'>Food</Link> </li>
                    <li> <Link to={"/"} className='text-decoration-none'>Recipe</Link> </li>
                    <li> <Link to={"/"} className='text-decoration-none'>Contact</Link> </li>
                </ul>

                <div className='extra' >
                    <div className='searchBox'>
                        <input type="search" name="" id="" placeholder='Search Food' />
                        <button><TbSearch /></button>
                    </div>
                    <div className='CartBox'>
                        <FiShoppingBag className='fs-3' />
                        <small className='' >12</small>
                    </div>

                    <Link to={"/"} className='signInBtn' >Sign In</Link>

                    <div className="NavOperner" onClick={() => setNavOpen(!navOpen)}>
                        {navOpen ? <VscChromeClose /> : <HiMenu />}
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Nav