import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FAQs.css';

const faqsData = [
    {
        ques:'What Shipping Methods Are Available?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
    {
        ques:'How Long Will it Take To Get My Package?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
    {
        ques:'How Do I Track My Order?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
    {
        ques:'Do I Need A Account To Place Order?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
    {
        ques:'Do I Need A Account To Place Order?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
    {
        ques:'How Do I Track My Order?',
        ans:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien lorem, consectetur et turpis id, blandit interdum metus. Morbi sed ligula id elit mollis efficitur ut nec ligula. Proin erat magna, pellentesque at elementum at, eleifend a tortor.'
    },
]

function FAQs() {
    return (
       <>
            <Container>
            <Row style={{height:'300px'}} className="d-flex justify-content-center align-items-center" >
                    <Col>
                        <p style={{textAlign:'center', fontSize:'50px'}}>Frequently Asked Question </p>
                        <p style={{textAlign:'center', fontSize:'17px', color:'gray'}}>This Agreement was last modified on 18th february 2019</p>
                    </Col>
                </Row>
                
                <Row>
                   {
                       faqsData.map((val, id) =>{
                           return(
                            <Col md={6} key={id}>
                               <p id="faqsQuestion"> {val.ques} </p>
                               <p id="faqsAnswer"> {val.ans} </p>
                            </Col>
                           )
                       })
                   }
                </Row>
            </Container>
       </>
    )
}

export default FAQs
