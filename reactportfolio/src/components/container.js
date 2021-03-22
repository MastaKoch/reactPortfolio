import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel';
import alexRest from '../imgs/alexRestaurant.jpeg';
import alexHanky from '../imgs/alexHankPup.jpeg';
import couple from '../imgs/alexClaudia.jpeg';
import '../index.css';


const contStyle = {
    color: 'white',
    background: 'grey'
};

const pic= {
    height: "30%",
    width: "30%"
};





class AboutMe extends Component {



    render() {
        return (
            <div>

                
            <Jumbotron fluid style={contStyle} >
                <Container>
                    <h1 className="abtMe">About Me</h1>
                    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {alexRest}
      alt="First slide"
      style={pic}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={alexHanky}
      alt="Second slide"
      style={pic}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={couple}
      alt="Third slide"
      style = {pic}
    />

  </Carousel.Item>
</Carousel>

                    <code className="codeClass">Hello World</code>
                    <p>
                    After completing the CCMSI-U internship program upon graduation from Clemson University, I was ready to navigate the world of Workers' Comp and Insurance Claims. I immersed myself in claims, all while helping set up our start-up office in the Queen City. I set up computers, phone lines, internet servers, desks and seating arrangements all while training to become an adjuster. During my time as an adjuster-in-training, I became the non-official IT "go-to" guy. With the help of the IT team, I learned the ropes when it came to helping the office with their technology challenges, all while preparing for the world of insurance. I took great pride in assisting the office with technology despite working as an adjuster.
                    </p>
                    
                    <p>After about 10 months of limited training due to COVID-19, I had to quickly adapt to a new working reality. However, in early October 2020 I stumbled across an advertisement for a virtual Full Stack Web Development Boot Camp through the University of North Carolina at Charlotte. I decided to use COVID as an opportunity to really grow and push myself outside of my comfort zone in my professional life/career. A couple of phone calls and emails later and I was starting class the following week.
                    Now, after a year of learning the world of the insurance and claims language, I picked up a new language: programming.
                    I am currently training and working as a Service Developer for CCMSI, and I will graduate from Boot Camp in April 2021.
                    Nobody said that the path was going to be easy, and that's why I fell in love with the challenge.
                    </p>
       
                </Container>
            </Jumbotron>

            
            </div>
        )

    }
    
    
  }

  export default AboutMe;