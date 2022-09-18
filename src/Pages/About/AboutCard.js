import React from 'react'
import { Card } from 'react-bootstrap'
import "./About.css"



function aboutCard(props) {
    return (
        <>
            <Card style={{ width: '98%', border:'none' }}>
              <Card.Img variant="top" src={props.img} />
              <Card.Body>
                <Card.Title className="aboutCard-title"> {props.title} </Card.Title>
                <Card.Text className="aboutCard-text"> {props.content} </Card.Text>
              </Card.Body>
            </Card>
        </>
    )
}

export default aboutCard
