import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import './MyTour.css';

const MyTour = () => {
    // Use useAuth here 
    const { user } = useAuth();
    // Use UseState here 
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('https://prosenjittravel.herokuapp.com/users/')
            .then(res => filterMyEvent(res.data))
    }, [])

    // Filter user indivudiual data 
    const filterMyEvent = (data) => {
        setMyEvents(data.filter(event => event.email === user.email))
    }


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
                    axios.delete(`https://prosenjittravel.herokuapp.com/users/${id}`)
                        .then(res => {
                            const remainingEvents = myEvents.filter(e => e._id !== id);
                            setMyEvents(remainingEvents);
                        }).catch(err => console.log(err))
                    swal("Your tour event order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your tour event order is safe!");
                }
            });


    }

    return (
        <div className="container">
            <Row xs={1} md={2} lg={2} className="g-4 mb-4">
                {/* Self tour card  */}
                {
                    myEvents.map(e => <Col>
                        <Card className="border-0 d-flex flex-row bg-light p-4 h-100 shadow-lg rounded">
                            <Card.Img variant="left" className="enroll-img" src={e.img} />
                            <Card.Body className="text-center mt-5">
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>
                                    <b> Status: {!e.status ? "Pending" : "Approved"} </b>
                                </Card.Text>
                                <Card.Text>
                                    {e.description.slice(0, 50)}
                                </Card.Text>
                                <Card.Text>
                                    <b>{e.date}</b>
                                </Card.Text>
                                <Button onClick={() => handleEventDelete(e._id)} variant="danger">Cancle</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default MyTour;