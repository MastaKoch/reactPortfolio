import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import base64 from '../imgs/converterPg.PNG';
import dayPlan from '../imgs/dayPlanner.PNG';
import moldy from '../imgs/moldymelon.PNG';
import pass from '../imgs/password.PNG';
import pinPoint from '../imgs/ppImg.PNG';
import weather from '../imgs/weatherDash.PNG';
import '../index.css';


const projectBg= {
  background: "grey"
}
const carouselBg= {
  height: "40%",
  width: "40%",
};


const linkStyle={color: "red"};




class Projects extends Component {

    render() {
        return (
           
<div style=
{projectBg} className="project">
    <h1 className="projectText">Projects</h1>
    <Carousel fluid className="carousel">
   
  <Carousel.Item className="itemCarousel">
  <Carousel.Caption classname="captions">
      <h3>Base64 Encoder</h3>
      <p>Link to deployed application: <span><a href="https://mastakoch.github.io/base64Encoder/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/MastaKoch/base64Encoder" style={linkStyle}>Click Me!</a></span></p>
    </Carousel.Caption>
  <img src={base64} alt="base64 encoder" style={carouselBg} className="pic"/>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={dayPlan}
      alt="Workday scheduler"
      style= {carouselBg}
      className="pic"
    />

    <Carousel.Caption>
      <h3>Day Planner</h3>
      <p>Link to deployed application: <span><a href="https://mastakoch.github.io/workdayscheduler/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/MastaKoch/workdayscheduler" style={linkStyle}>Click Me!</a></span></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={moldy}
      alt="Moldy Melons"
      style= {carouselBg}
      className="pic"
    />

    <Carousel.Caption>
      <h3>Moldy Melons</h3>
      <p>Link to deployed application: <span><a href="https://mouldy-melons.herokuapp.com/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/Asieger75/Mouldy-Melons" style={linkStyle}>Click Me!</a></span></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <img src={pass} alt="random password generator" style={carouselBg} fluid className="pic"/>
    <Carousel.Caption>
      <h3>React Random Password Generator</h3>
      <p>Link to deployed application: <span><a href="https://mastakoch.github.io/reactRandomPasswordGenerator/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/MastaKoch/reactRandomPasswordGenerator" style={linkStyle}>Click Me!</a></span></p>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      src={pinPoint}
      alt="PinPoint"
      style= {carouselBg}
      className="pic"
    />

    <Carousel.Caption>
      <h3>PinPoint</h3>
      <p>Link to deployed application: <span><a href="https://mastakoch.github.io/PinPointProject1/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/MastaKoch/PinPointProject1" style={linkStyle}>Click Me!</a></span></p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <img src={weather} alt="weather Dashboard" style={carouselBg} className="pic"/>
    <Carousel.Caption>
      <h3>Weather Dashboard</h3>
      <p>Link to deployed application: <span><a href="https://mastakoch.github.io/weatherDash/" style={linkStyle}>Click Me!</a></span></p>
      <p>Link to Github page: <span><a href="https://github.com/MastaKoch/weatherDash" style={linkStyle}>Click Me!</a></span></p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
</div>

         
        )

    }
    
    
  }

  export default Projects;