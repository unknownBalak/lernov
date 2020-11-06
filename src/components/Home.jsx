import React, { Component } from 'react'
import { Container, Row , Col,Table } from 'react-bootstrap'
import Description from './Description'; 
import './css/Home.css'
import Cards from './Cards';
import img1 from './resources/2.jpg'
import img2 from './resources/3.jpg'
class Home extends Component {
    
    render() {
        return (
            <>
            <div>
             <img className='background-img 'xs={12}  md={8} />
               
            </div>
        <Container>
            <Row className='home'>
                <Col className='background-img1 'xs={12}  md={7}>
   
            {/* <Button className='bg__button'>Know More </Button>                     */}
                </Col>
                <Col className='banner__info'xs={12} md={4}>
    <h4>Our primary vision is <strong style={{color:"black"}} >Education to Everyone </strong> and we as a StartUp
are keen to provide a core concept with webinar and live workshops. 
We choose students to give them world-class facilities. </h4>
       <p>We believe in <strong>Lerning By Doing</strong>. And we as a eduTech StartUp believe in this Slogan.   </p>
                </Col>
            </Row>
        </Container>


<Container className=' lernov__events' id='events'> 
     <h1  >Our Events </h1>
<div className='lernov__card'>
  <Cards src={img1}/>   
   <Cards src={img2}/>   
   <Cards src={img1}/>  
   <Cards src={img2}/>  
    </div>
    </Container>
<Container className=' lernov__instructor'> 
     <h1  >Our Instructor </h1>
<div className='lernov__card'>
  <Cards src={img1}/>   
   <Cards src={img1}/>   
   <Cards src={img1}/>  
   <Cards src={img1}/>  
    </div>

     <Description />
    </Container>

</>
        )
    }
}

export default Home