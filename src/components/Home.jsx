import React, { Component } from 'react'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import { Container, Row , Col,Table } from 'react-bootstrap'

import { Button } from '@material-ui/core';
import './css/Home.css'
class Home extends Component {
    render() {
        return (
        <Container>
            <Row className='home'>
                <Col className='background-img 'xs={12}  md={8}>
      <h3>Bootcamp Quality at 1/10 of the Cost</h3>
       <p>Lernov is the world’s fastest, most efficient way to master the skills tech companies want.
            100% online, part-time & self-paced.</p>
            <Button className='bg__button'>Know More </Button>                    
                </Col>
                <Col className='lornov-feature'xs={12} md={4}>
                       <Table striped bordered hover className='home__table' > 
                       <thead>
                           <tr className='table_tr row__header'>
                              <td></td>
                               <td className='table_td1'>Lernov</td>
                               <td className='table_td2'>Others</td>
                           </tr>
                           </thead> 

                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr>
                          
                          
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                           <tr className='table_tr'>
                               <td className='table_td0'>Learn by Doing</td>
                               <td className='table_td1'><DoneIcon /> </td>
                               <td className='table_td2'><ClearIcon  /></td>
                           </tr> 
                          
                       </Table>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Home
