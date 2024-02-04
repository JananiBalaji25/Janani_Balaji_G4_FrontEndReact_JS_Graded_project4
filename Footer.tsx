import { Container, Navbar } from "react-bootstrap";
import React from "react";
const Footer = () => {
    return ( 
       
            <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
              <Container className="d-flex justify-content-center text-sx">
                <Navbar.Brand href="#" className="text-sx">@CopyRight Anurag Deshmukh</Navbar.Brand>
              </Container>
            </Navbar>
     );
}
 
export default Footer;