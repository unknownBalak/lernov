import React, { Component } from 'react'
import { Container, Row , Col, Button } from 'react-bootstrap'
import Description from './Description'; 
import './css/Home.css'
import Cards from './Cards';
import img1 from './resources/2.jpg'
import img2 from './resources/3.jpg'
import backgroundimg from './resources/1(headway).jpg'
import { Link } from 'react-router-dom';
class Home extends Component {
    
    render() {
        return (
            <>
            <div className='background-data' >
             <img src={backgroundimg} className='background-img' alt="lernov-background" />
                   <div className='lernov__motto' >
                      <h3>education to everyone</h3>  
                  <Link to="/about"><Button >Know More</Button> </Link>

                   </div>
            </div>
        <Container>
            <Row className='home'>
                <Col className='background-img1 'xs={12}  md={7}  >
   
                </Col>
                <Col className='banner__info'xs={12} md={4}>
    <h4>Our primary vision is <strong style={{color:"black"}} >Education to Everyone </strong> and we as a StartUp
are keen to provide a core concept with webinar and live workshops. 
We choose students to give them world-class Education. </h4>
                </Col>
            </Row>
        </Container>


<Container className=' lernov__events'  id='events'> 
     <h1  >Our Events </h1>
<div className='lernov__card' md={3} sm={2} xs={12} >
  <Cards src={img1}  />   
   <Cards src={img2} />   
   <Cards src={img1} />  
   <Cards src={img2} />  
    </div>
    </Container>
    <Description />
<Container className=' lernov__team' id='team' > 
    
    </Container>

</>
        )
    }
}

export default Home
