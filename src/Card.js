import React from 'react'
import { NavLink } from 'react-router-dom';
import link from '../src/image/home.jpg';



export default function Card({para , title ,imgsrc}) {
    return (
        < >
                                <div className="col-md-4 col-10 mx-auto  " >
                                    <div className="card" >
                                        <img src={imgsrc} class="card-img-top" alt="..." />
                                        <div className="card-body  text-center ">
                                          <h3 className="card-text  " >{title}</h3>
                                          <p className="card-text ">{para}</p>
                                          <NavLink to="/" className="click-to-join" > Click To Join </NavLink>
                                        </div>
                                      </div>
                                    </div>
        </ >
    )
}
