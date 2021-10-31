import React from 'react';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Button, Accordion, Carousel } from 'react-bootstrap';
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import Tour from '../Tour/Tour';
import './Home.css';

const Home = () => {
    // Use USe State here 
    const [tour, setTour] = useState([]);

    // Use USe State here 
    useEffect(() => {
        fetch('https://prosenjittravel.herokuapp.com/tourcollection')
            .then(res => res.json())
            .then(data => setTour(data.tours))
    }, []);
    return (
        <>
            {
                !tour.length ? <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                    <ReactLoading type={"spokes"} color={"#7ea0ff"} height={100} width={100} />
                </div>
                    :
                    <div>
                        {/* Banner picture  */}
                        <Container fluid>
                            <section className="home-container-bg">
                                <Container id="home">
                                    <Row className="">
                                        <Col lg="12 text-center">
                                            <div className="" style={{ marginTop: 100 }}>
                                                <h1 className="mt-5 home-text custom-text-color" style={{ color: "#e6520eb6" }}>Prosenjit Travel Agency</h1>
                                                <h2 style={{ color: "#1F3B64" }}>Starts your journey from here</h2>
                                                <div className="my-5 fs-5">
                                                    <p className="home-details"><ArrowRightCircleFill className="custom-text-color" /> Led by Passionate Experts</p>
                                                    <p className="home-details"><ArrowRightCircleFill className="custom-text-color" /> Trustable and trusted</p>
                                                    <p className="home-details"><ArrowRightCircleFill className="custom-text-color" /> Affordable Tour Packages</p>
                                                </div>
                                                <Button
                                                    className="py-2 mb-4 home-btn"
                                                >Join with Us</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </Container>

                        {/* Data fetching  */}
                        <Container style={{ "marginTop": "80px" }}>
                            <h2 className="text-primary">Our Next Tours</h2>
                            <Row xs={1} md={2} lg={3} className="g-4">
                                {
                                    tour.map(s => <Tour key={s.id} s={s} />)
                                }
                            </Row>
                        </Container>

                        {/* Frequently Asked Questions Section */}
                        <section className="fetured-bike">
                            <div className="container">
                                <h1 className="mb-5">Frequently Asked <span className="customer-review-tittle">Questions</span></h1>
                                {/* cards */}
                                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
                                    <div className="col">
                                        <div>
                                            <img src="https://i.ibb.co/x3h0TQr/xabout2-png-pagespeed-ic-FKuxbsbrr-T.webp" className="card-img-top img-fluid" alt="..." />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>3 Night 4 Day Packages</Accordion.Header>
                                                <Accordion.Body>
                                                    The valley of Kashmir offers woody abyss which surrounds the steep mountainous terrain. Known around the world for its unparallel landscapes, the valley is located 300kms away from Jammu. Situated in the Himalayas, the clear blue skies reveal the snow capped peaks that birth the streams and rivers. Home to native flora like pine, deodar and chinar, it is a memory of a lifetime to preserve as you glide on a Shikara. The valley delights you with multi hues of nature communicated through lush green slopes, tender meadows and prairie of vibrant flowers. The capital city of Kashmir- Srinagar is world renowned for its handloom that produces woolen garments and Pashmina shawls. Srinagar also acquaints you with the local handicrafts and hand carved wooden furniture made out of walnut tree.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>How can I go to Kolkatta by train?</Accordion.Header>
                                                <Accordion.Body>
                                                    If you have to pick one destination in Kashmir for a honeymoon stay, then we would recommend Gulmarg. This hill station is one of the most romantic and scenic of the various Kashmir tourist places, and offers enchanting views everywhere you look. Couples can spend quality time with each other and also indulge in exciting activities like gondola ride, skiing, snowboarding, etc.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>What should I buy in Cox bazar?</Accordion.Header>
                                                <Accordion.Body>
                                                    Some of the best things to buy while you are on a Kashmir tour package are Kashmiri dry fruits, saffron, honey, and salt tea. In addition, you can buy locally produced woollen textile products like shawls, stoles, ponchos etc. The traditional Kashmiri embroidery is famous across the world and you can buy embroidered apparel as well from Kashmir. Some high-quality souvenirs to bring back from Jammu Kashmir include walnut wood products, silver ware, copper and brass utensils and more.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Achivement Slide Show Section */}
                        <section>
                            <div className="container mt-5 mb-5">
                                <h1 className="mb-5">Lets See Our <span className="customer-review-tittle">Achivements</span></h1>
                                <Carousel className="carousel-custom">
                                    <Carousel.Item>
                                        <Row>
                                            <Col className="col-lg-8">
                                                <img
                                                    className="d-block w-100 img-custom"
                                                    src="https://i.ibb.co/CsMf9PD/1.jpg"
                                                    alt="First slide"
                                                />
                                            </Col>
                                            <Col className="col-lg-4 mt-5">
                                                <div>
                                                    <h3 className="text-primary">Safest Traveller of the year</h3>
                                                    <h6 className="text-bold">Bangladesh Travell Corporation</h6>
                                                    <p > In 2021, this is  libero, a pharetra augue mollis interdum.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col className="col-lg-8">
                                                <img
                                                    className="d-block w-100 img-custom"
                                                    src="https://i.ibb.co/gmwTppD/2.jpg"
                                                    alt="First slide"
                                                />
                                            </Col>
                                            <Col className="col-lg-4 mt-5">
                                                <div>
                                                    <h3 className="text-primary">Best Tour Arranger</h3>
                                                    <h6 className="text-bold">Travell socity members</h6>
                                                    <p > In 2019, wa invented a pharetra augue mollis interdum.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row>
                                            <Col className="col-lg-8">
                                                <img
                                                    className="d-block w-100 img-custom"
                                                    src="https://i.ibb.co/RSC3p86/3.jpg"
                                                    alt="First slide"
                                                />
                                            </Col>
                                            <Col className="col-lg-4 mt-5">
                                                <div>
                                                    <h3 className="text-primary">Cheap price for every tour</h3>
                                                    <h6 className="text-bold">Bangladesh socity for Travellers</h6>
                                                    <p > In 2018, they give this elit libero, a pharetra augue mollis interdum.</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </section>
                    </div>
            }
        </>
    );
};

export default Home;