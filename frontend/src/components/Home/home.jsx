import React from 'react';
import { useNavigate  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


/* Home Component */
const Home = () => {
    const navigate = useNavigate(); /* define hook to navigate to other pages */

    /* function that navigate to the logIn page */
    const handleClickHome = () => {
        navigate('/Home');
    };
    return (
        <div id='home' className='backgroundimg'>
            <div className='container'>
                <div className="footer">
                    <h5>Home</h5>
                </div>
                
            </div>
        </div>
    );
};

export default Home;