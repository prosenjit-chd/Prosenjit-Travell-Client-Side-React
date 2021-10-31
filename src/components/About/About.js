import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';
import './About.css';


const About = () => {
    return (
        <Container className="bg-light shadow-lg p-2 rounded" style={{ marginTop: 50 }}>
            <Row className="pt-5">
                <Col lg="6">
                    <img className="img-fluid rounded-1" src="https://i.ibb.co/bRNL4Kj/coastal-family-health-travel-clinic.jpg" alt="" />
                </Col>
                <Col lg="6">
                    <h1 className="custom-color-blue mt-3">Prosenjit Travel and tour guide agency</h1>
                    <h5 className="my-4 card-details">
                    Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Prosenjit Ch (CEO)
                    </h5>
                    <Row>
                        <Col lg="6">
                            <p><CheckCircleFill className="custom-text-color" /> Personal Schedule</p>
                            <p><CheckCircleFill className="custom-text-color" /> Highest Quality Provide</p>
                            <p><CheckCircleFill className="custom-text-color" /> Latest Service</p>
                        </Col>
                        <Col lg="6">
                            <p><CheckCircleFill className="custom-text-color" /> Led by Passionate Experts</p>
                            <p><CheckCircleFill className="custom-text-color" /> We Ensure Safe Tour</p>
                            <p><CheckCircleFill className="custom-text-color" /> Affordable Tour Packages</p>
                        </Col>
                    </Row>
                    <Button className="rounded-pill mt-4" style={{ backgroundColor: '#33D1CB' }}>LEARN MORE</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default About;