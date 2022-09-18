import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import "./Card.css";

const dropArrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg>;


function Card(props) {
    return (
        <>
           
           <div className="Card d-flex align-items-center mb-1">
                <div className="Card-img "> <img width="100%" src={props.image} alt=""/> </div>
                <div className="Card-text text-center p-3"> {props.text1}<span style={{fontFamily:"'Roboto', sans-serif"}}> {props.strongText} </span> {props.text2}
                
                <span>
                    <p id="Card-shop-now">Shop now <span id="dropArrow"> {dropArrow} </span> </p>
                </span>
                </div>
                
            </div>
           
        </>
    )
}

export default Card
