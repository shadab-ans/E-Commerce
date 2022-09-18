
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function OrderTrack() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p style={{textAlign:'center', fontSize:'50px'}}>Track Your <span style={{color:'#fed700'}}> Order </span> </p>
                        <p style={{textAlign:'center', fontSize:'14px'}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={6} >
                    <Form>
                        <Form.Group controlId="order_id">
                          <Form.Label>Order ID</Form.Label>
                          <Form.Control type="email" placeholder="Found in your order in your confirmation email." />
                        </Form.Group>
                   </Form>
                    </Col>
                    <Col md={6}>
                    <Form>
                        <Form.Group controlId="billing_email">
                          <Form.Label>Billing Email</Form.Label>
                          <Form.Control type="email" placeholder="Email can used during checkout." />
                        </Form.Group>
                   </Form>
                   
                    </Col>
                </Row>
                <Button variant="light">Track</Button>
            </Container>
        </>
    )
}

export default OrderTrack
