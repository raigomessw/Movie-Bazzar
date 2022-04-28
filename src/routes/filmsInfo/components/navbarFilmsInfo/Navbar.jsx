import React, { useState } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-scroll/';
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener(`scroll`, changeColor)

  return (
    <div className="">
     <div className={color ? "navbar navbar-bg" : "navbar"}>
        <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
            <div className={nav ? "logo dark" : "logo"}>
                <h2 className="logo">MOVIE BAZZAR</h2>
            </div>
            <ul className="nav-menu">
                <Link to="/" className="link-homee" smooth="true" duration={500}><li>Home</li></Link>
                <Link to="/filmsInfo" className="link-films" smooth="true" duration={500}><li>Films</li></Link>
            </ul>
            <div className="nav-icons">
                <AiOutlineShoppingCart className="icon" />
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className="icon" />) : (<AiOutlineClose style={{ color: "#000" }} className="icon" />)}
            </div>
            <div className={nav ? "mobile-menu active" : "mobile-menu"}>
                <ul className="mobile-nav">
                    <Link to="/" smooth="true" duration={500}><li>Home</li></Link>
                    <Link to="/filmsInfo" smooth="true" duration={500}><li>Films</li></Link>

                </ul>
                <div className="mobile-menu-botton">
                    <div className="menu-icons">
                        <Link>
                          <div >
                          <AiOutlineShoppingCart className="icon" />
                          </div>
                       </Link>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaYoutube className="icon" />
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>

    )
}

export default Navbar
