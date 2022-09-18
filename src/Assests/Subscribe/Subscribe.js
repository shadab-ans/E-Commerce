import {React, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./Subscribe.css"

const svg = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>;

function Subscribe() {
    const[input, setInput] = useState('');
    return (
        <>
            <Container fluid className="Subscribe mt-4">
                <Container>
                    <Row>
                        <Col md={4} className="d-flex align-items-center justify-content-between">
                            <span > {svg} </span>
                            <h3 style={{margin:'0px'}}>Sign up to Newsletter</h3>
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-between">
                            <p> ...and receive  <strong>$20 coupon for first shopping.</strong>  </p>
                        </Col>
                        <Col md={4} className="d-flex align-items-center justify-content-between">
                            <form action="" className="Subscribe-form">
                                <input placeholder="Subscribe with email" type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
                                <label htmlFor="email" onClick={()=>window.alert(`You have sign in successfully with ${input}`)}>Sign Up</label>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Subscribe
