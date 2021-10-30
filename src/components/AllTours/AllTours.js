import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { ArchiveFill, Calendar2DateFill, CheckSquareFill, GeoAltFill } from 'react-bootstrap-icons';

const AllTours = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => setEvents(res.data))
    }, [])

    const handleEventDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(res => {
                alert("Successfully deleted");
                const remainingEvents = events.filter(e => e._id !== id);
                setEvents(remainingEvents);

            }).catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <h3 className="text-primary">Upcoming Tour </h3>
                        <Card className="">
                            <Card.Img variant="top" src="https://i.ibb.co/72xvPs6/new-york-en-famille-c-est-possible.jpg" />
                            <Card.Body>
                                <Card.Title className="card-title" style={{ color: "#e6520e" }}>New york, USA</Card.Title>
                                <Card.Text className="cart-text">
                                    <b className="text-primary">Cost Per Person: </b>500000 BDT
                                </Card.Text>
                                <div className="card-details">
                                    <Calendar2DateFill /> Starts from: 2 Jan, 22<span className="card-md-icon-1"> </span><GeoAltFill /><b> USA</b>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="9">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Num</th>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registating date</th>
                                    <th>Travell place</th>
                                    <th>Approve</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events.map((e, i) => <tr>
                                        <td>{i + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>{e.date}</td>
                                        <td>{e.title}</td>
                                        <td className="text-center" role="button"><CheckSquareFill /></td>
                                        <td className="text-center" role="button" onClick={() => handleEventDelete(e._id)} > <ArchiveFill></ArchiveFill> </td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllTours;