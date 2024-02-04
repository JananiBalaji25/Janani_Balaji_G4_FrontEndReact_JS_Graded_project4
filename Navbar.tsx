import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import LiveSearchFilter from "./Common/LiveSearchFilter";
import ICommingSoon from "../models/ICommingSoon";
import { getMovies } from "../services/getMovies";
import { findByTitle } from "@testing-library/react";
import { getComingMoviesByTitle } from "../services/comingSoon";



const NavBar = () => {
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container className="my-2">
                    <Navbar.Brand to="/" as={NavLink}>
                        <FontAwesomeIcon icon={faVideo} className="me-2" />
                        Movie-Tips</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>Coming soon </Nav.Link>
                            <Nav.Link to="/Home" as={NavLink}>In Theaters</Nav.Link>
                            <Nav.Link to="/Hindi" as={NavLink}>Top Indian</Nav.Link>
                            {/* - coming soon
    - Movies in theaters
    - top rated Indian
    - top rated movies
 */}
                            <Nav.Link to="/TopMovies" as={NavLink}>Top Movies</Nav.Link>
                            <Nav.Link to="/Favourites" as={NavLink}>Favourites</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" >Search</Button>
                            
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;