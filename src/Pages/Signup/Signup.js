import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Signup() {
    return (
       <>
            <Container>
            <Row>
                    <Col>
                        <p style={{textAlign:'center', fontSize:'50px'}}> Welcome back! </p>
                        {/* <p style={{textAlign:'center', fontSize:'14px'}}>Login to manage your account.</p> */}
                    </Col>
                    
                </Row>
                <Row>
                <Col md={6}> <h2>Covid-19 precaution</h2>
                    <ul>
                        <li>Wear mask</li>
                        <li>Use sanitiser</li>
                        <li>2m distance</li>
                        <li>etc</li>
                        <li>etc</li>
                    </ul>
                 </Col>
                    <Col md={6}>
                    <h2>Sign In / Sign Up</h2>
                        <Form>
                            <Form.Group controlId="username">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="password">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form>
                        <a href="#forgotpassword" style={{textDecoration:'none', textAlign:'right'}}><p style={{color:'gray', fontSize:'12px'}} >Forgot Password ?</p> </a>
                        <Button className="w-100" variant="warning"> Login </Button>
                    </Col>
                </Row>
            </Container>
       </>
    )
}

export default Signup
