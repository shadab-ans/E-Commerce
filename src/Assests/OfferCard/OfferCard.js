import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cardData from "../../Assests/Data/data"
import MyCard from '../../Assests/Card/Card'

const OfferCard = () => {
    return (
        <Container className="mt-4">
                <Row className="">
                   <Col className="card-col d-flex justify-content-between align-items-center ">
                   {
                     cardData.map((val, id)=>{
                       return(
                        <MyCard key={id} image={val.img} text1={val.text1} text2={val.text2} strongText={val.strongText}></MyCard>
                       )
                     })
                   }
                   </Col>
                </Row>
            </Container>
    )
}

export default OfferCard
