import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';



class Footer extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>For Employers...</h1>
                        <div className="mb-2">
                            <Button variant="primary" size="lg" target = "_blank" href="https://www.linkedin.com/in/alex-koch-309641184/" block>
                            LinkedIn
                            </Button>{' '}
                            <Button variant="secondary" size="lg" href="https://github.com/MastaKoch" block>
                            GitHub
                            </Button>
                        </div>
                        <div>
                            <Button variant="primary" size="lg" block>
                            Email: alexkoch1996@gmail.com
                            </Button>{' '}
                            <Button variant="secondary" size="lg" href="https://drive.google.com/file/d/117qVyWiVrD34et0vP4NBfhnZFcm1yExy/view?usp=sharing" target= "_blank" block>
                            Resume
                            </Button>
                        </div>
                    </Container>
                </Jumbotron>
  
            </div>
        )
    }
}
export default Footer;