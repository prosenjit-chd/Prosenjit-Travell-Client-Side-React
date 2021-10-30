import React from 'react';
import { Card, Col, Button, } from 'react-bootstrap';
import { Calendar2DateFill, CheckCircleFill, GeoAltFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router';
import './Tour.css';

const Tour = (props) => {
    const { _id, title, price, deadline, img, location, description } = props.s;
    // use use History function 
    const history = useHistory();
    // use handaler 
    const handleRegistration = (id) => {
        history.push(`/tourregistration/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className="h-100 cart-font">
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Body>
                        <Card.Title className="card-title" style={{ color: "#e6520e" }}>{title}</Card.Title>
                        <Card.Text className="cart-text">
                            <b className="text-primary">Cost Per Person: </b>{price} BDT
                        </Card.Text>
                        <Card.Text className="text-dark">
                            {description.slice(0, 100)}                      
                        </Card.Text>
                        <div className="card-details">
                            <Calendar2DateFill /> Deadline: {deadline} <span className="card-md-icon-1"> </span><GeoAltFill /><b>{location}</b>
                        </div>
                        <Button
                            // Workable button this is
                            className="float-end"
                            variant="info"
                        onClick={()=> handleRegistration(_id)}
                        ><CheckCircleFill /> Confirm</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Tour;