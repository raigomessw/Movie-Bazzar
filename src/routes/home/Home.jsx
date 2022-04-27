import React from 'react';
import { Link } from 'react-scroll/';
import HeroBody from './components/herobody/Herobody';
import Navbar from './components/navbar/Navbar';





const Home = () => {
    return (
        <Link to='/' className="home">
            <div>
                <Navbar/>
                <HeroBody />
            </div>
        </Link>
    )
}

export default Home;
