import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {logo} from "../../Components/Header/data"
import "./StoreLocator.css"

function StoreLocator() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p style={{textAlign:'center', fontSize:'50px'}}>Search <span>{logo} </span> Store Near You </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Enter Your Country</Form.Label>
                              <Form.Control type="text" placeholder="Enter Your Country" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Select State</Form.Label>
                              <Form.Control as="select">
                                <option>Delhi</option>
                                <option>Mumbai</option>
                                <option>Kolkata</option>
                                <option>Banglore</option>
                                <option>Jharkhand</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2">
                              <Form.Label>Enter Your District</Form.Label>
                              <Form.Control type="text" placeholder="Enter Your District" />
                            </Form.Group>
                   </Form>
                   <Button variant="light mb-4">GO</Button>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col> <div>List of Store near you...</div>
                        <div className="StoreLocator-list bg-light"></div>
                     </Col>
                </Row>
            </Container>
        </>
    )
}

export default StoreLocator
