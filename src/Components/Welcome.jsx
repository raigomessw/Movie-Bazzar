import './welcome.css';
import react from 'react';
import {Link} from 'react-router-dom';




const Welcome = ({fetchData}) => {



    return (
        <div className="welcomeScreen">
            <img src={'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/SHOW/5102/15102/15102-h'} alt="LOGO" className="logo"/>

            <br></br>

           


            <Link to="/movies">
                <button className="buttons" onClick={fetchData}>Movies</button>
            </Link>

           

           <div className="wel">

               <h2> Welcome to our shop </h2>

               <div class="boo">
                  
                  <img src={'https://www.clipartmax.com/png/middle/218-2183821_pin-film-roll-clipart-white-movie-camera-png.png'} alt="GOD" className="box"/>

                  </div>
         
                  <div class="boo1">
                  
                  <img src={'https://www.clipartmax.com/png/middle/218-2183821_pin-film-roll-clipart-white-movie-camera-png.png'} alt="GOD" className="box1"/>
                  
                  </div>

           </div>
         
        </div>
    );
}

export default Welcome; 



