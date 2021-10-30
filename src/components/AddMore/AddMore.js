import React from 'react';
import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';
import './AddMore.css';

const AddMore = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">
                        <h2>Recently Added</h2>
                        <div className="d-flex justify-content-between flex-row border border-1 p-2 mb-3">
                            <img style={{width: 100}} className="img-fluid" src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg" alt="das"/>
                            <div>
                                <h6>Rabin Readdy</h6>
                                <h4>Bali welcome resort</h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-row border border-1 p-2 mb-3">
                            <img style={{width: 100}} className="img-fluid" src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg" alt="das"/>
                            <div>
                                <h6>Rabin Readdy</h6>
                                <h4>Bali welcome resort</h4>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between flex-row border border-1 p-2">
                            <img style={{width: 100}} className="img-fluid" src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg" alt="das"/>
                            <div>
                                <h6>Rabin Readdy</h6>
                                <h4>Bali welcome resort</h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8">
                        <Form className=" border border-2 p-4">
                            <h3 className="text-primary mb-3">Add More tour</h3>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter tour place" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Price Per Person" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" placeholder="https//:abc.jpg" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Short Description</Form.Label>
                                <Form.Control type="text" placeholder="This is located in a very popular place" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Deadline</Form.Label>
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text" placeholder="Kolkatta, India" />
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