import React, { useState } from 'react'
import './NavbarHomeStyles.css'
import { Link } from 'react-scroll/'
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
     <div className={color ? "navbar-home navbar-bg-home" : "navbar-home"}>
        <div name="home" className={nav ? "navbar-home navbar-bg-home" : "navbar-home"}>
            <div className={nav ? "logo-home darkk" : "logo-home"}>
                <h2 className="logo-home">MOVIE BAZZAR</h2>
            </div>
            <ul className="nav-menu">
                <Link to="home" className="link-home" smooth="true" duration={500}><li>Home</li></Link>
                <Link to="films" className="link-films" smooth="true" duration={500}><li>Films</li></Link>
            </ul>
            <div className="nav-icons">
                <AiOutlineShoppingCart className="icon" />
            </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className="icon" style={{ color: "#ffff" }} />) : (<AiOutlineClose style={{ color: "#ffff" }} className="icon" />)}
            </div>
            <div className={nav ? "mobile-menu-1 active" : "mobile-menu-1"}>
                <ul className="mobile-nav">
                    <Link to="home" smooth="true" duration={500}><li>Home</li></Link>
                    <Link to="filmes" smooth="true" duration={500}><li>Filmes</li></Link>

                </ul>
                <div className="mobile-menu-botton">
                    <div className="menu-icons">
                        <Link>
                          <div >
                          <AiOutlineShoppingCart className="icon" style={{ color: "#050404"}} />
                          </div>
                       </Link>
                    </div>
                    <div className="social-icons-home">
                        <FaFacebook className="iconSocial" />
                        <FaInstagram className="iconSocial" />
                        <FaYoutube className="iconSocial" />
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>

    )
    
}

export default Navbar
