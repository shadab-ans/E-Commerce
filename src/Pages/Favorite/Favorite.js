import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Favorite.css';




function Favorite() {
    return (
        <>
            <Container className="Favorite">
                <Row>
                    <Col>
                        <h3 className="Favorite-h3">My Wishlist on Electro</h3>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Favorite;
