import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyTour.css';

const MyTour = () => {
    const { user } = useAuth();
    const [myEvents, setMyEvents] = useState([]);
    useEffect(() => {
        axios.get('https://prosenjittravel.herokuapp.com/users/')
            .then(res => filterMyEvent(res.data))
    }, [])

    const filterMyEvent = (data) => {
        setMyEvents(data.filter(event => event.email === user.email))
    }



    const handleEventDelete = (id) => {
        const access = window.confirm("Are you want to sure delete this?");
        if (access) {
            axios.delete(`https://prosenjittravel.herokuapp.com/users/${id}`)
                .then(res => {
                    const remainingEvents = myEvents.filter(e => e._id !== id);
                    setMyEvents(remainingEvents);
                }).catch(err => console.log(err))
        }

    }

    return (
        <div className="container">
            <Row xs={1} md={2} lg={2} className="g-4 mb-4">
                {
                    myEvents.map(e => <Col>
                        <Card className="border-0 d-flex flex-row bg-light p-4">
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