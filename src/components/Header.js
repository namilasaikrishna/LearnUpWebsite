import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal  from 'react-bootstrap/Modal';
import LearnUp from '../images/LearnUp-logo.png'
import {Link} from "react-router-dom"


function Header() {

  const [show, setShow] = useState(false);
  const [signUp,setSignUp] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signHandlerClose = () =>setSignUp(false)
  const signhandlerShow = () =>setSignUp(true)


  return (
    <Navbar style={{backgroundColor:"#fff5eb"}} expand="lg">
      <Container>
        <Navbar.Brand href="#"><img style={{maxWidth:"120px",position:"relative",top:0}} src={LearnUp} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to='/' style={{textDecoration:"none"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/Course' style={{textDecoration:"none"}}>Courses</Link></Nav.Link>
            <Nav.Link><Link to='Contact' style={{textDecoration:"none"}}>Contacts</Link></Nav.Link>
          </Nav>
          <div style={{marginRight:"20px"}}>
          <Button variant="danger" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter Password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
          <div>
          <Button variant="dark" onClick={signhandlerShow}>
        Sign Up
      </Button>
      <Modal show={signUp} onHide={signHandlerClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter full name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="dd/mm/yyyy"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Create Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="create password here"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="confirm password here"
            autoFocus
          />
        </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={signHandlerClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={signhandlerShow}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
