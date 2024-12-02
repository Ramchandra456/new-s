import React from 'react'
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./News.css"
function Menu() {
  return (
    <>
     <Navbar className='nav  fixed-top'>
        <Container>          
          <Nav>
          <Link to="/" className='mylink'>Home</Link>
          <Link to="/sports" className='mylink'>Sports</Link>
          <Link to="/business" className='mylink'>Business</Link>
          <Link to="/technology" className='mylink'>Technology</Link>

          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Menu