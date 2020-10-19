import React, { Component } from "react";
import "./css/Card.css";
import { Image, Container, Row, Col, Table } from "react-bootstrap";

class Cards extends Component {
  render() {
    return (
      <Col className="lernov_courses" md={3} sm={6} xs={12}>
        <Image className="image" src={this.props.src} thumbnail />
      </Col>
    );
  }
}

export default Cards;
