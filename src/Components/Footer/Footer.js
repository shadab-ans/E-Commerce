import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {logo} from "../../Components/Header/data";
import "./Footer.css"

function Footer() {
    return (
        <>
            <Container fluid className="Footer mt-4">
                <Container>
                    <Row>
                        <Col md={3}> 
                                <div> {logo} </div>
                                <p><strong>Contact info</strong> <span style={{fontSize:'14px', color:'rgb(110, 110, 110)'}}>+91 89938383</span> </p>
                                <p style={{fontSize:'14px', color:'rgb(110, 110, 110)'}}>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                         </Col>
                        <Col md={3} >
                        
                           <h2>Find it Fast</h2>
                            <ul>
                                {
                                    ['Laptop & Computers', 'Camera & Photography',
                                     'Smart Phone & Tablets', 'Video Games & Consoles', 
                                     'TV & Audio', 'Gadgets', 'Car Electronic & GPS'].map((value,id)=>{
                                         return(
                                             <li key={id}> {value} </li>
                                         )
                                     })
                                }
                            </ul>
                         
                        </Col>
                        <Col md={3}>
                        <h2>Products</h2>
                            <ul>
                                {
                                    ['Laptop & Computers', 'Camera & Photography',
                                     'Smart Phone & Tablets', 'Video Games & Consoles', 
                                     'TV & Audio', 'Gadgets', 'Car Electronic & GPS'].map((value,id)=>{
                                         return(
                                             <li key={id}> {value} </li>
                                         )
                                     })
                                }
                            </ul>
                        </Col>
                        <Col md={3}>
                        <h2>Customer Care</h2>
                            <ul>
                                {
                                    ['My Account', 'Order Tracking',
                                     'Wish List', 'Customer Service', 
                                     'Returns / Exchange', 'FAQs', 'Product Support'].map((value,id)=>{
                                         return(
                                             <li key={id}> {value} </li>
                                         )
                                     })
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid style={{background:'rgb(218,218,218'}}>
                <Container>
                <Row className="pt-2 pb-2">
                        <Col md={9} style={{color:'gray', fontSize:'14px', margin:'0%', display:'flex', alignItems:'center'}}> © Shopper Square - Abhishek, Shadab and Altamash </Col>
                        <Col md={3}>
                            <div className="Footer-pay-img">
                            {
                                ['https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img1.jpg',
                                'https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img2.jpg',
                                'https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img3.jpg',
                                'https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img4.jpg',
                                'https://transvelo.github.io/electro-html/2.0/assets/img/100X60/img5.jpg'].map((val, id)=> {
                                    return(
                                        <div key={id}> <img width="100%"  src={val} alt="..."/> </div>
                                    )
                                })
                            }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer;
