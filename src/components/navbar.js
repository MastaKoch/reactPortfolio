import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Tooltip from 'react-bootstrap/Tooltip';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Button from 'react-bootstrap/Button';
import { SocialIcon } from 'react-social-icons';

// const renderTooltip = (props) => (
//   <Tooltip id="button-tooltip" {...props}>
//     alexkoch1996@gmail.com
//   </Tooltip>
// );


  

class Navigate extends Component {

  render() {
    return (
      <div>

        
      <Navbar bg="light" expand="lg" color='white'>
        <Navbar.Brand href="#home">Welcome to Alex Koch's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="For Employers" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/alex-koch-309641184/"target="_blank"><SocialIcon network="linkedin" style={{ height: 25, width: 25, margin: 10 }} />LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/MastaKoch"target="_blank"><SocialIcon network="github" style={{ height: 25, width: 25, margin: 10 }} />GitHub</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://drive.google.com/file/d/117qVyWiVrD34et0vP4NBfhnZFcm1yExy/view?usp=sharing" target= "_blank"><SocialIcon network="google" style={{ height: 25, width: 25, margin: 10 }} />Resume</NavDropdown.Item>
              <NavDropdown.Item>
             <SocialIcon network="email" style={{ height: 25, width: 25, margin: 10 }} /><a href="/" title="alexkoch1996@gmail.com" className="aTag">Email</a>


              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
          )
  }
}


  export default Navigate;