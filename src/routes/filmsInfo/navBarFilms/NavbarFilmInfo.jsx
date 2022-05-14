import React, { useState } from 'react'
import './NavbarFilmsinfoStyles.css'
import Logotipo from '../../home/components/assets/logotipo.gif'
import Search from '../../home/components/herobody/navbar/Search'
import { Link } from 'react-scroll/'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Shoppincarthover from '../../../components/Shoppingcarthover'





function Navbar() {

    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    // const [color, setColor] = useState(false)
    // const changeColor = () => {
    //     if (window.scrollY >= 100) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }

    // window.addEventListener(`scroll`, changeColor)

  return (
    //  <div className={color ? "navbar-home navbar-bg-home" : "navbar-home"}>
    <div className="navbar-home">
        <div name="home" className={nav ? "navbar-home navbar-bg-home" : "navbar-home"}>
            <div className={nav ? "logo-home darkk" : "logo-home"}>
               <img src={Logotipo} alt="Logo" width="20" height="20"/>
            </div>
            <div className="nav-menu">
                <NavLink to="/" className="link-home" smooth="true" duration={500}><li>Home</li></NavLink>
            </div>
            <div className="">
          <div className="kart">
            <Shoppincarthover />
          </div>
          <div className="search-container">{/* <Search/> */}</div>
        </div>

            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className="icon" style={{ color: "#ffff" }} />) : (<AiOutlineClose style={{ color: "#ffff" }} className="icon" />)}
            </div>
            <div className={nav ? "mobile-menu-1 active" : "mobile-menu-1"}>
                <ul className="mobile-nav">
                    <NavLink to="/" smooth="true" duration={500}><li>Home</li></NavLink>
                </ul>
                <div className="mobile-menu-botton">
                    <div className="menu-icons">
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


    )

}

export default Navbar
