import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import './AddMore.css';

const AddMore = () => {
    const titleRef = useRef('');
    const priceRef = useRef('');
    const deadlineRef = useRef('');
    const locationRef = useRef('');
    const descriptionRef = useRef('');
    const imgRef = useRef('');

    const handleEvent = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const deadline = deadlineRef.current.value;
        const location = locationRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const data = { title, price, deadline, location, description, img }
        axios.post('https://prosenjittravel.herokuapp.com/tourcollection', data)
            .then(res => {
                alert("Tour Event added successfully");
                e.target.reset();
            })
    }
    // Use USe State here 
    const [tour, setTour] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://prosenjittravel.herokuapp.com/tourcollection')
            .then(res => res.json())
            .then(data => setTour(data.tours))
    }, [tour]);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <h2 style={{ color: "#e6520e" }}>Recently Added</h2>
                        {
                            tour.slice(tour.length - 4).map(s => <div className="d-flex justify-content-between flex-row border border-3 p-2 mb-3">
                                <img style={{ width: 100 }} className="img-fluid" src={s.img} alt="das" />
                                <div>
                                    <h5 className="text-success">{s.title}</h5>
                                    <h6>Price: {s.price}BDT</h6>
                                </div>
                            </div>)
                        }
                    </Col>
                    <Col lg="8">
                        <Form onSubmit={handleEvent} className=" border border-2 p-4">
                            <h3 className="text-primary mb-3">Add More tour</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control ref={titleRef} type="text" placeholder="Enter tour place" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control ref={priceRef} type="text" placeholder="Enter Price Per Person" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control ref={imgRef} type="text" placeholder="https//:abc.jpg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control ref={descriptionRef} type="text" placeholder="This is located in a very popular place" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Deadline</Form.Label>
                                    <Form.Control ref={deadlineRef} type="date" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control ref={locationRef} type="text" placeholder="Kolkatta, India" />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit"><PlusCircleFill />  Add Tour </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default AddMore;
