import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "./Contact.css";
// Monday:

// Tuesday:
// 12-6 PM
// Wednesday:
// 12-6 PM
// Thursday:
// 12-6 PM
// Friday:
// 12-6 PM
// Saturday:
// 12-6 PM
// Sunday
// Closed

const time = [
  {
    day: "Monday",
    time: "12-6 PM",
  },
  {
    day: "Tuesday",
    time: "12-6 PM",
  },
  {
    day: "Wednesday",
    time: "12-6 PM",
  },
  {
    day: "Thurusday",
    time: "12-6 PM",
  },
  {
    day: "Friday",
    time: "12-6 PM",
  },
  {
    day: "Saturday",
    time: "12-6 PM",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} className="d-grid">
            <h4>Leave us a Message</h4>
            <hr />
            <Form style={{display:'unset'}}>
              <Form.Group controlId="firstname">
                <Form.Label>
                  First Name <span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group controlId="lastname">
                <Form.Label>
                  Last Name <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <h4>Our Store</h4>
            <hr />
            <p>
              121 King Street,
              <br />
              Melbourne VIC 3000,
              <br />
              Australia
            </p>

            <p id="p2">Hours of Operation</p>
            <Table striped bordered hover size="sm">
              {time.map((val, id) => {
                return (
                  <>
                    <thead key={id}>
                      <tr>
                        <td> {val.day} </td>
                        <td>{val.time}</td>
                      </tr>
                    </thead>
                  </>
                );
              })}
            </Table>
          </Col>
        </Row>
        <Button variant="warning">Send Message</Button>
      </Container>
    </>
  );
}

export default Contact;
