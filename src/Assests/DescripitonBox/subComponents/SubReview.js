import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import RatedData from '../../Rating/RatedData'
import Rating from '../../Rating/Rating'

const SubReview = () => {
    return (
        <div className="Sub__description" >
            <Container>
                <Row>
                    <Col md={6}>
                        <p>Overall reviews</p>
                        <div>4.3/5 </div>
                        <RatedData />
                    </Col>
                    <Col md={6} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                    <p>Add a review</p>
                    <div className="d-flex align-items-center " > <span style={{color:'black', fontFamily:"'Open Sans', sans-serif", fontSize:'13px', marginRight:'40px'}}>Your Review</span> <Rating /> </div>
                    <div className="d-flex align-items-center " >
                    <p>Your Opinion on this product</p>
                    <input id="ratingInput" type="text"/>
                    </div>
                    <Button className="addReview" variant="warning" > Add Review</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SubReview
