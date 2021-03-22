import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import '../index.css';
const grey= {background: "grey"};

const white= {color: "white"};



class Footer extends Component {
    render() {
        return (
            <div className="jumbotron" style={grey}>
                <Jumbotron fluid className="jumboColor"  style={grey}>
                    <Container>
                        <div className="footerDiv">
                        <h1 style={white}>For Employers...</h1>
                        <div>
                            <Button variant="primary" size="lg" target = "_blank" href="https://www.linkedin.com/in/alex-koch-309641184/">
                            LinkedIn
                            </Button>{' '}
                            <Button variant="primary" size="lg" href="https://github.com/MastaKoch" >
                            GitHub
                            </Button>{' '}
                            <DropdownButton as={ButtonGroup} title="Email" id="bg-vertical-dropdown-3" variant="secondary" size="lg">
                                <Dropdown.Item eventKey="1">alexkoch1996@gmail.com</Dropdown.Item>
                            </DropdownButton>{' '}
                            <Button variant="secondary" size="lg" href="https://drive.google.com/file/d/117qVyWiVrD34et0vP4NBfhnZFcm1yExy/view?usp=sharing" target= "_blank">
                            Resume
                            </Button>

                            
                        </div>
                        </div>
                    </Container>
                </Jumbotron>
  
            </div>
        )
    }
}
export default Footer;