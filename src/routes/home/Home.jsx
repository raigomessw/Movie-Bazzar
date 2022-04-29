import React from 'react';
import { Link } from 'react-scroll/';
import HerobodyHome from './components/herobody/HerobodyHome';
import Navbar from './components/herobody/navbar/Navbar';






const Home = () => {
    return (
        <Link to='/' className="home">
            <div>
                <Navbar/>
                <HerobodyHome />
            </div>
        </Link>
    )
}

export default Home;
