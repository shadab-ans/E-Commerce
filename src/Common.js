import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = ({ title, brandName, buttonText, imgsrc ,tagLine ,To }) => {
    return (
        <>
           <section id="header" className="  ">
                <div className="container-fluid   ">
                    <div className="col-10 mx-auto">
                    <div className="row d-flex align-items-center ">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column  " >
                                <h1> {title} <br/> <strong className="brand-name" >  {brandName} </strong> </h1>
                                <p className="my-3" > {tagLine} </p>
                                <div className="mt-3">
                                    <NavLink to={To} className="btn-get-started"  > {buttonText} </NavLink>
                                </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img" >
                                <img src={imgsrc} alt="home" className="img-fluid animated mt-5" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;