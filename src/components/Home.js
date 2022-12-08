import React from 'react'
import {Button, Col, Container,Row} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import HomeImg from '../images/learnHome-img.png'
import {TfiVideoCamera} from "react-icons/tfi"
import {TfiMedall} from 'react-icons/tfi'
import {BiInfinite} from 'react-icons/bi'
import "./Home.css"

function Home() {
  return (
    <div>
    <div style={{backgroundColor:"#fff5eb",backgroundSize:"cover"}}>
    <Container>
    <Row style={{padding:"60px 0 80px 0"}}>
    <Col xs={12} lg={6}>
    <h1 style={{fontSize:"50px",color:"#242f65"}} className='pt-lg-5'>Start Learning With LearnUp Now</h1>
    <p style={{fontSize:"14px",color:"#4d5868"}}>Study any topic, anytime. Choose from thousands of expert-led expelio terms courses now.</p>
    <div style={{position:"relative"}}>
    <input type='text' className='form-control' placeholder='keyword' style={{paddingLeft:"60px",border:"0",height:'65px',boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}}/>
    <BsSearch style={{position:"absolute",width:"25px",height:"25px",top:'20px',left:"15px"}}/>
    <Button variant='danger' style={{position:"absolute",right:"0",top:"0",height:'65px',width:"60px"}}>Go</Button>
    </div>
    </Col>
    <Col xs={8} lg={6}>
    <img src={HomeImg} alt='home-img' style={{position:"relative",maxHeight:"650px",width:"100%"}}/>
    </Col>
    </Row>
    </Container>
    </div>
    <div className='bg-danger'>
    <Container>
    <Row>
    <Col lg={4}>
    <div className='course'>
    <div className='icon'>
    <TfiVideoCamera className='icon-img'/>
    </div>
    <div className='content'>
    <h1 className="home-heading">100,000 Online Courses</h1>
    <p className='home-para'>Nor again is there anyone who loves or pursues or desires</p>
    </div>
    </div>
    </Col>
    <Col lg={4}>
    <div className='course'>
    <div className='icon'>
    <TfiMedall className='icon-img'/>
    </div>
    <div className='content'>
    <h1 className="home-heading">Expert Instruction</h1>
    <p className='home-para'>Nam libero tempore, cum soluta and nobis est eligendi optio</p>
    </div>
    </div>
    </Col>
    <Col lg={4}>
    <div className='course' id='border'>
    <div className='icon'>
    <BiInfinite className='icon-img'/>
    </div>
    <div className='content'>
    <h1 className="home-heading">Lifetime Access</h1>
    <p className='home-para'>These cases are perfectly simple and easy to distinguish</p>
    </div>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
    
  )
}

export default Home
