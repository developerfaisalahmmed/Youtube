import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../header/Header.css'
import logo from ".././images/youtube.png"
import profileLogo from ".././images/profile.png"
import {Navbar,Dropdown,Overlay,OverlayTrigger,Popover,Container, Nav,NavDropdown,Form,Button,FormControl, Row, Col } from 'react-bootstrap';

import {useState,useRef} from "react";

function Header(){

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  


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


    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" className="camera">
  <i class="fa fa-video-camera" aria-hidden="true"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Uploads Video </Dropdown.Item>
    <Dropdown.Item href="#/action-2"> <i class="fa fa-home" aria-hidden="true"></i> Go Live </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" className="tasks">
  <i class="fa fa-camera" aria-hidden="true"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube TV </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube Music </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube Kids </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube for Artists </Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" className="bell">
  <i class="fa fa-bell" aria-hidden="true"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu className="notification">
  <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube TV </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube Music </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube Kids </Dropdown.Item>
    <Dropdown.Item href="#/action-1"> <i class="fa fa-home" aria-hidden="true"></i> Youtube for Artists </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


    {/* <Button  className="camera"> <i class="fa fa-video-camera" aria-hidden="true"></i> </Button>
    <Button  className="tasks"> <i class="fa fa-tasks" aria-hidden="true"></i> </Button>
    <Button  className="bell">  <i class="fa fa-bell" aria-hidden="true"></i> </Button> */}
    <a onClick={handleClick} className="profileLogoBtn">  <img className="profileLogo" src={profileLogo} />  </a>

  </Container>
</Navbar>

<div ref={ref}>
<Overlay
  show={show}
  target={target}
  placement="bottom"
  container={ref}>
  <Popover id="popover-contained" className="popover-contained">
        <ul>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Create a channel </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Purchases and memberships </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> YouTube Studio </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Switch account </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Sign out </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Appearance: Device theme </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Language: </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> English </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Location </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Bangladesh </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Settings </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Your data in YouTube </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Help </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Send feedback </a> </li>
          <li> <a href="" variant="secondary"> <i class="fa fa-home" aria-hidden="true"></i> Keyboard Shortcuts </a> </li>

        </ul>
  </Popover>
</Overlay>
</div>

        </Row>
        </Container>


);
}
export default Header;