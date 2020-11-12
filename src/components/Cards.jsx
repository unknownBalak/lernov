import React, { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./css/Card.css";

class Cards extends Component {
  render() {
    return (
      <Col className="lernov_courses" md={6} sm={6} xs={12} > 
       <Row>
        <Image className="image" src={this.props.src} roundedCircle alt="" />
     <div className='webinar__info'>
     <p> name:</p>
      <p> Date</p>
      <p> instructor</p>
     </div>
     </Row>
      </Col>
    );
  }
}

export default Cards;
