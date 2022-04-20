import Navbar from './components/navbar/Navbar';
import { Link } from 'react-scroll/'
import HeroBody from './components/herobody/Herobody'





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
