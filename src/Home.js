import React from 'react';
import link from '../src/image/home.jpg'
import './Home.css';
 
import Common from './Common';


const Home = () => {
    return(
        <>
           <Common 
           title="Grow your business with"
           brandName="Ratina Touch Mobile"
           buttonText="Get Started"
           imgsrc={link}
           tagLine="We Provide the Work to improve your productivty"
           To="/service"
            />
        </>
    );
}

export default Home;