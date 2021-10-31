import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#165aee",
        borderBottom: "solid 2px #165aee"
    }
    // use auth use here 
    const { user, logOut } = useAuth();

    return (
        <>
            {/* Bootstrap Tag use here  */}
            <Navbar variant="light" expand="lg" className="border border-bottom-2 fixed-top bg-light" style={{ "backgroundColor": "rgba(0, 0, 0, 0)" }}>
                <Container fluid>
                    <NavLink style={{ color: "#165aee" }} className="navbar-brand fw-bold" to="/home"> <img style={{ height: 60, width: 60 }} src="https://i.ibb.co/KxCFhwL/travel-icon-png-4962-1.png" alt="banner" />Prosenjit Travel</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/aboutus">About Us</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/mytour">My Travels</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/alltours">See All Tours</NavLink>
                            <NavLink className="nav-link" activeStyle={activeStyle} to="/addmore">Add More</NavLink>
                            {
                                user?.email ?
                                    <div>
                                        <img style={{ height: 30, width: 30, borderRadius: "50%" }} src={user.photoURL} alt="user" />
                                        <span> {user.displayName}</span>
                                        <Button className="ms-2" onClick={logOut} variant="danger">LogOut</Button>
                                    </div>
                                    :
                                    <NavLink className="nav-link" activeStyle={activeStyle} to="/signin">Signin</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 100}}>

            </div>
        </>
    );
};

export default Header;