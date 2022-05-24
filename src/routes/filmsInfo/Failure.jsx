import React from 'react';
import { Link } from 'react-router-dom';
import "../filmsInfo/Failure.css"

const Failure = () => {

    //Used if failures occures due to reloading page

    return (
        <div className='fail-container'>
            <div className='fail-card'>
                <div className='err-msg'>
                    <p>Page could not be loaded. Please go back to home.</p>
                </div>
                <div className='button-link'>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Failure;