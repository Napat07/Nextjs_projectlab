import React from 'react'
import Formm from '../../Component/form.js'
import Head from '../../Component/head.js';
import Router from 'next/router';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container,Button,Input,Form,FormGroup,Label } from 'reactstrap';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function courseregisform(props) {
  function HandleClick (){
    Router.push({
      pathname: '/Course/paymentCourse',
  })
  }
    return (
        <div>
             <Head title="Course - Regisform" />
            <Formm >
            <br/>
            <HeadTitle Name={"APPLICATION FORM (MOJOBOT)"}/>
            <br/>
{/* ####################### Main-Content Start Here.. ####################### */}
            <Container>
                <Nav>
                    <NavItem>
                        <NavLink href="/Course">Our Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Course/courseInformation" >{props.url.query.name} Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">{props.url.query.name} Course register form</NavLink>
                    </NavItem>
                </Nav>
                <div style={{backgroundColor:"Gray",height:"12px",width:"100%"}}/>
                <br/> 

                <h3 style={{fontWeight:"bolder",padding:"5px"}}>APPLICATION FEE</h3>
                <div style={{color:"LightSeaGreen"}}>
                    <h6 style={{fontWeight:"500"}}>COURSE : MOJOBOT</h6>
                    <h6 style={{fontWeight:"500"}}>Total Amount: 7,200 THB</h6>
                </div>
    {/* ####################### STUDENT INFORMATION Start Here.. ####################### */}
                <div style={{backgroundColor:"LightSeaGreen",height:"2px",width:"100%"}}/>
                <h3 style={{fontWeight:"bolder",padding:"5px",marginTop:"20px"}}>STUDENT INFORMATION</h3>

                <Form style={{fontWeight:"bolder",color:"LightSeaGreen"}}>
                  <FormGroup row>
                    <Label  for="studentName" sm={2}>NAME :</Label>
                    <Col sm={3}>
                      <Input type="firstName" name="studentName" placeholder="Name" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label  for="studentSurname" sm={2}>SURNAME :</Label>
                    <Col sm={3}>
                      <Input type="lastName" name="studentSurname" placeholder="Surname" v  />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label  for="studentGender" sm={2}>GENDER :</Label>
                    <Col sm={2}>
                      <Input type="select" name="studentGender" placeholder="Gender" v  >
                        <option>Male</option>
                        <option>Female</option>
                        {/* <option>Bisexual</option>
                        <option>Transgender</option>
                        <option>Intersex</option> */}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label  for="studentMobile" sm={2}>MOBILE NO. :</Label>
                    <Col sm={3}>
                      <Input type="phoneNumber" name="studentMobile" placeholder="Mobile" v  />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label  for="studentEmail" sm={2}>EMAIL :</Label>
                    <Col sm={3}>
                      <Input type="email" name="studentEmail" placeholder="Email" v  />
                    </Col>
                  </FormGroup>
                </Form>
                <div style={{backgroundColor:"LightSeaGreen",height:"2px",width:"100%"}}/>
    {/* ####################### STUDENT INFORMATION END Here.. ####################### */}

    {/* ####################### STUDENT CLASS SCHEDULE Start Here.. ####################### */}
                <h3 style={{fontWeight:"bolder",padding:"5px",marginTop:"20px"}}>CLASS SCHEDULE</h3>
                <div className="d-flex justify-content-start">
                    <h6 style={{fontWeight:"500"}}>COURSE TYPE : </h6>
                    &nbsp;
                    &nbsp; 
                    <h6 style={{fontWeight:"700",color:"LightSeaGreen"}}>FIXED SCHEDULE</h6>
                </div> 
                <Row>
                    <Col sm ={2}>
                        <h6 style={{fontWeight:"500"}}>DAY :</h6>
                    </Col>
                    <Col sm ={3}>
                        <h6 style={{fontWeight:"400"}}>SUNDAY</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm ={2}>
                        <h6 style={{fontWeight:"500"}}>TIME :</h6>
                    </Col>
                    <Col sm ={3}>
                        <h6 style={{fontWeight:"400"}}>10:00 - 12:00</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm ={2}> 
                        <h6 style={{fontWeight:"500"}}>COURSE START :</h6>
                    </Col>
                    <Col sm ={3}>
                        <h6 style={{fontWeight:"400"}}>4 AUGUST 2019</h6>
                    </Col>
                </Row>
               
    {/* ####################### STUDENT CLASS SCHEDULE END Here.. ####################### */}
            <div className="text-center" > 
                <img src="https://ugcorigin.s-microsoft.com/100/76a5c0d8-dc90-4f9d-9a22-28c2d169b1c2/200/v1/image.jpg"/>
                <br/>
                <Button onClick={HandleClick} color="primary">SEND APPLICATION</Button>
            </div>
            
            </Container>
{/* ####################### Main-Content End Here.. ####################### */}
            </Formm>
        </div>
    )
}
