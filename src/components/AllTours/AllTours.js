import axios from 'axios';
import React from 'react';
import ReactLoading from 'react-loading'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { ArchiveFill, Calendar2DateFill, CheckSquareFill, GeoAltFill } from 'react-bootstrap-icons';
import swal from 'sweetalert';
import './AllTours.css';

const AllTours = () => {
    // Use USe State here 
    const [events, setEvents] = useState([]);
    let updateUser = {};
    // Use Effect use here for fetching data 
    useEffect(() => {
        axios.get('https://prosenjit-enterprise-server-side-node-5mwf.onrender.com/users')
            .then(res => setEvents(res.data))
    }, [updateUser])

    // Delete Tour event button handler 
    const handleEventDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this event!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://prosenjit-enterprise-server-side-node-5mwf.onrender.com/users/${id}`)
                        .then(res => {
                            const remainingEvents = events.filter(e => e._id !== id);
                            setEvents(remainingEvents);

                        }).catch(err => console.log(err))
                    swal("The tour event order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your tour event order is safe!");
                }
            });
    }

    // Update Tour event button handler 
    const handleUserStatus = (id) => {
        updateUser = events.find(event => event._id === id)
        updateUser.status = !updateUser.status;
        axios.put(`https://prosenjit-enterprise-server-side-node-5mwf.onrender.com/users/${id}`, updateUser)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal({
                        title: "Thank you Sir",
                        text: "The tour status updated successfully",
                        icon: "success",
                        button: "Go back!",
                    });
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <Row>
                    {/* Next upcoming tour information shows here  */}
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
                        {
                            !events.length ?

                                <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                                    <ReactLoading type={"bars"} color={"#7ea0ff"} height={100} width={100} />
                                </div>
                                :

                                < Table className="custom-color shadow" striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>Num</th>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Registating date</th>
                                            <th>Travell place</th>
                                            <th>Status</th>
                                            <th>Update</th>
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
                                                <td className={!e.status ? "text-secondary" : "text-primary "} >{!e.status ? "Pending" : "Approved"}</td>
                                                <td onClick={() => handleUserStatus(e._id)} className={!e.status ? "text-danger text-center" : "text-success text-center"} role="button"><CheckSquareFill /></td>
                                                <td className="text-center text-danger" role="button" onClick={() => handleEventDelete(e._id)} > <ArchiveFill></ArchiveFill> </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </Table>
                        }

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default AllTours;