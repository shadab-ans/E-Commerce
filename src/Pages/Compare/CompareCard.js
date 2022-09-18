import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
// import "./Card.css";


function CompareCard(props) {
    
    return (
        <>
            <Container>
                <Row>
                    <Col  className="p-0 border-0">
                        <div className="">
                            
                            <div className="ShopCard-img"> <img src={props.imgSrc} alt=""/> </div>
                            <div className="ShopCard-bottom">
                                <a href="#catogery" className="text-center">Wireless Audio stream etc...</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CompareCard
