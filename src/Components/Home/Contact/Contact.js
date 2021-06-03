import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="p-5">
                <h3 className="text-center text-white">You can leave your message here</h3>
                <div className="">
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter Your Number" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Any Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Your Message" />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Contact;