import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


class Navigate extends Component {

  render() {
    return (
      <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Welcome to Alex Koch's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="For Employers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Resume</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
          )
  }
}


  export default Navigate;