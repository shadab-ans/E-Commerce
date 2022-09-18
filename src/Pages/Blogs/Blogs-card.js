import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./Blogs.css";


function BlogsCard(props) {
    return (
        <>
            <Card style={{ width: "95%"}} className="Blog-Card">
              <Card.Img variant="top" src={props.img} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="Blog-Card-text">{props.postdate}</Card.Text>
                <Card.Text className="Blog-Card-text">
                        {props.text}
                </Card.Text>
                <Button variant="light">Read More</Button>
              </Card.Body>
            </Card>
        </>
    )
}

export default BlogsCard
