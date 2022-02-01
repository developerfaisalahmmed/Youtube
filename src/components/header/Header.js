import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../header/Header.css'
import logo from ".././images/youtube.png"
import profileLogo from ".././images/profile.png"
import {Navbar,Container, Nav,NavDropdown,Form,Button,FormControl, Row, Col } from 'react-bootstrap';

function Header(){
return(

    <Container fluid>
        <Row>

        <Navbar bg="light" expand="lg" fixed="top">
  <Container fluid>
    <Navbar.Brand href="#">  <i class="fa fa-bars" aria-hidden="true"></i>   <img className="logo" src={logo} />   </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="ms-2 navber-search"
          aria-label="Search"
        />
        <Button variant="outline-success search-btn "> <i class="fa fa-search" aria-hidden="true"></i> </Button>
      </Form>
      <Button className="microphone"> <i class="fa fa-microphone" aria-hidden="true"></i> </Button>

      </Nav>

    </Navbar.Collapse>
    <Button className="camera"> <i class="fa fa-video-camera" aria-hidden="true"></i> </Button>
    <Button className="tasks"> <i class="fa fa-tasks" aria-hidden="true"></i> </Button>
    <Button className="bell">  <i class="fa fa-bell" aria-hidden="true"></i> </Button>
    <a className="profileLogoBtn">  <img className="profileLogo" src={profileLogo} /> </a>

  </Container>
</Navbar>
        </Row>
        </Container>

);
}
export default Header;