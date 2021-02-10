import React from 'react';
import Common from './Common';
import Link from '../src/image/home.png';


const About = () => {
    return(
        <>
           <Common
           title="Welcome to About Page"
        //    brandName="Ratina Touch Mobile"
           buttonText="Contact Now"
           imgsrc={Link}
        //    tagLine="We Provide the Work to improve your productivty"
           To="/contact"

            />
        </>
    );
}

export default About;