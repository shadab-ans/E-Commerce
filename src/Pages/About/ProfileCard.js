import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

function ProfileCard(props) {
    return (
        <>
                            <Card style={{ width: '100%' }} className="about-profile-card">
                                    <Card.Img id="img" variant="top" src={props.img} />
                                <Card.Body>
                                    <Card.Title className="p-0 about-profile-card-title"> {props.name} </Card.Title>
                                    <Card.Text className="p-0 about-profile-card-content"> {props.job} </Card.Text>
                                </Card.Body>
                            </Card>
        </>
    )
}

export default ProfileCard
