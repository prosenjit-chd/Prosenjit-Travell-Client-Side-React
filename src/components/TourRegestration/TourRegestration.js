import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Form, Button, Card, Row, Col, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import './TourRegestration.css';
import axios from 'axios';

const TourRegestration = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const { user } = useAuth();
    const dateRef = useRef('');
    const purposeRef = useRef('');
    useEffect(() => {
        axios.get(`http://localhost:5000/tourcollection/${id}`)
            .then(res => setEvent(res.data))
    }, [])


    const handleUser = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const title = event.title;
        const description = event.description;
        const img = event.img;
        const date = dateRef.current.value;
        const details = purposeRef.current.value;
        const data = { name, email, title, description, img, date, details }
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                alert("Tour added successfully");
                e.target.reset();
            })
    }

    return (
        <div className="mt-3">
            <Container>
                <Row>
                    <Col lg="5" className="d-flex justify-content-between flex-column">
                        <h3 className="text-primary">{event.title}</h3>
                        <h5 className="text-dark">Cost Per Person: {event.price} BDT</h5 >
                        <img style={{ height: 300, width: 450, borderRadius: 5 }} className="" src={event.img} alt="ad" />

                    </Col>

                    <Col lg="7" className="d-flex justify-content-between flex-column">
                        <Form onSubmit={handleUser} className="w-100 mx-auto border border-1 p-5">
                            <h3 className="text-dark mb-3">Kindly, fillup the form carefully</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control value={user.displayName} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Full Name" />
                                <Form.Control value={user.email} disabled className=" border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="email" placeholder="Username or Email" />
                                <Form.Control ref={dateRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="date" placeholder="Date" />
                                <Form.Control ref={purposeRef} className="border border-2 border-top-0 border-start-0 border-end-0 mb-4" type="text" placeholder="Details Information" />
                            </Form.Group>
                            <Button  variant="primary" type="submit" className="register-submit">
                                Registration
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default TourRegestration;