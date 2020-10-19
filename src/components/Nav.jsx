import React, { Component } from 'react'
import { Nav,Form,NavDropdown,Navbar, FormControl, Button } from 'react-bootstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import 'bootstrap/dist/css/bootstrap.min.css'

import './css/Nav.css'
class Header extends Component {
    render() {
        return (
            <div className='fluid'>
 <div className='container'>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Lernov</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Why Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#">
          <AccountCircleIcon className='sign-in' /> Sign-in</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
          <PersonIcon className='sign-in'/>
        Sign-Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</div>
        )
    }
}
export default Header

