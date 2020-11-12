import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "./css/Team.css";
import img1 from './resources/2.jpg'
// import img2 from './resources/3.jpg'

const team_memmber =[ 
    {"name":"Rishavh Rajpoot"},
    {"name": "Pushkar "},
    {"name":"Aman Kumar "},
    {"name": "Aaradhya kumar Singh"},
    {"name":"Nayan Deep"},
    {"name":"Akash Kumar " },
    {"name":"Avijeet Mishra"}
]

function Team({src }) {
    return (
       <Row className="lernov_courses"  > 
       
        {
               
      team_memmber.map((team)=> {
           <Col>
          <Image className="image" src={img1} roundedCircle alt="" />
               <div>{team.name}</div>
         
         
          </Col>
        })}
      
      </Row>
    );
  }

export default Team;

