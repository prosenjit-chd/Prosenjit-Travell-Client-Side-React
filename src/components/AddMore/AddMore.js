import axios from 'axios';
import ReactLoading from 'react-loading';
import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import './AddMore.css';
import swal from 'sweetalert';

const AddMore = () => {
    // Use Ref import here for taking input value
    const titleRef = useRef('');
    const priceRef = useRef('');
    const deadlineRef = useRef('');
    const locationRef = useRef('');
    const descriptionRef = useRef('');
    const imgRef = useRef('');

    // Use handler for create tour event 
    const handleEvent = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const deadline = deadlineRef.current.value;
        const location = locationRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;
        const data = { title, price, deadline, location, description, img }
        axios.post('https://prosenjit-enterprise-server-side-node-5mwf.onrender.com/tourcollection', data)
            .then(res => {
                swal({
                    title: "Thank you Sir",
                    text: "You tour event added successfully",
                    icon: "success",
                    button: "Go back!",
                  });
                e.target.reset();
            })
    }
    // Use USe State here 
    const [tour, setTour] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('https://prosenjit-enterprise-server-side-node-5mwf.onrender.com/tourcollection')
            .then(res => res.json())
            .then(data => setTour(data.tours))
    }, [tour]);

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        {
                            !tour.length ? <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                                <ReactLoading type={"bars"} color={"#7ea0ff"} height={100} width={100} />
                            </div>
                                :
                                <div>
                                    {/* Recent posted event show this section  */}
                                    <h2 style={{ color: "#e6520e" }}>Recently Added</h2>
                                    {
                                        tour.slice(tour.length - 4).map(s => <div className="d-flex justify-content-between flex-row border border-3 p-2 mb-3 bg-light  p-2">
                                            <img style={{ width: 100 }} className="img-fluid" src={s.img} alt="das" />
                                            <div>
                                                <h5 className="text-success">{s.title}</h5>
                                                <h6>Price: {s.price}BDT</h6>
                                            </div>
                                        </div>)
                                    }
                                </div>
                        }
                    </Col>
                    <Col lg="8">
                        {/* Event information taking form */}
                        <Form onSubmit={handleEvent} className=" border border-2 p-4 bg-light shadow">
                            <h3 className="text-primary mb-3">Add More tour</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control ref={titleRef} type="text" placeholder="Coxbazar sea beach" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control ref={priceRef} type="text" placeholder="25000" />
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
                                    <Form.Control ref={locationRef} type="text" placeholder="Bangladesh" />
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
