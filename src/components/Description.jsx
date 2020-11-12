import React from 'react'
import {Row,Col, Container, Image } from 'react-bootstrap'
import './css/description.css'
const Description = ()=> {
    return (
        <Container className='description' >
            <div className="des__heading">Why Lernov! </div>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <Image roundedCircle src="https://media.giphy.com/media/nB9cJ9IGEAUXL60HPK/giphy.gif" alt='logo' /> </Col>
                <Col className='des_imgInfo'> To learn Something like minded people plays keys role. And here At lernov We will provide that facilities that helps you reach you target with enjoyment.</Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <Image roundedCircle src="https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif" alt='logo' width="200px" height="200px"  /> </Col>
                <Col className='des_imgInfo'>This is an era where computerized aids are widely used by students for education purposes and the more knowledge and understanding of a subject, the wider your skill set is, the more are the chances for you to land your dream job.
                </Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <Image roundedCircle src="https://media.giphy.com/media/NXp9HM6YeuS0U/giphy.gif" alt='logo'   width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Here at Lernov you can find couses pertaining to your requirements provided with engaging content and an interactive atmosphere shaped to facilitate your every need. </Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <Image roundedCircle src="https://media.giphy.com/media/l2Je2WpVLRbXciO4M/giphy.gif" alt='logo'  width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Our teacher encourage students to embrace the change. And workshop based learning is main motive of our education system. </Col>
            </Row>
            <Row className='des__row'>
                <Col className='des__img' xs={12} md={6} > <Image roundedCircle src="https://media.giphy.com/media/jWJK4JJiMLYCyPZgPx/giphy.gif" alt='logo'  width="200px" height="200px" /> </Col>
                <Col className='des_imgInfo'> Here you will <strong>Learn To Earn</strong>. And with the help of knowledge you can start your journey as a freelancer  </Col>
            </Row>
        </Container>
    )
}

export default Description
