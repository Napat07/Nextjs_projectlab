import React from 'react'
import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import Router from 'next/router';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container,Button } from 'reactstrap';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function courseInformation(props) {

  function HandleClick () {
    Router.push({
      pathname: '/Course/courseregisform',
      query: {
          name: props.url.query.name
      },
  })
  }
    return (
        <div>
            <Head title="Education - Project Lab" />
            <Form >
            <br/>
            <HeadTitle Name={"Robotics Courses (in House)"}/>
            <br/>
{/* ####################### Banner Start Here.. ####################### */}
            <header style={{
                height: "100vh",
                minHeight: "500px",
                backgroundImage: "url('https://www.techtalkthai.com/wp-content/uploads/2019/04/IMG_2173.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
              <div class="container h-100">
                <div class="row h-100 align-items-center">
                  <div class="col-12 text-center">
                  </div>
                </div>
              </div>
            </header>
{/* ####################### Banner End Here.. ####################### */}

{/* ####################### Main-Content Start Here.. ####################### */}
        <Container>
        <Nav>
          <NavItem>
            <NavLink href="#">Our Course</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">MoJo Course</NavLink>
          </NavItem>
        </Nav>
        <div style={{backgroundColor:"rgb(169, 169, 169)",border:"5px solid ",borderColor:"rgb(169, 169, 169)"}}>
        </div>
        <Row style={{marginTop:"20px"}}>
            <Col>
            <h2 style={{fontWeight:"bold"}}>{props.url.query.name} COURSE</h2>
            <Row>
                <Col sm="10">
                    <h5 style={{color:"LightSeaGreen",fontWeight:"bold"}}>Ace : 4 to 7 </h5>  <p>Computational Thinking :: Programming :: Innovative Thinking</p>
                </Col>
            </Row>
            </Col>
            <Col > 
               <Button onClick={HandleClick} color="primary">Sign up Now</Button>
            </Col>
        </Row>

        <div className="d-flex justify-content-start">
            <h6 style={{color:"LightSeaGreen",fontWeight:"900"}}>CLASS SIZE : </h6>
            &nbsp;
            &nbsp; 
            <h6 style={{fontWeight:"bolder"}}>4 STUDENTS</h6>
        </div>
        
        <div className="d-flex justify-content-start">
            <h6 style={{color:"LightSeaGreen",fontWeight:"900"}}>DURATION : </h6>
            &nbsp;
            &nbsp;
            &nbsp;  
            <h6 style={{fontWeight:"bolder"}}>8 HOURS ( 2 HOURS / CLASS )</h6>
        </div> 

        <div className="d-flex justify-content-start">
            <h6 style={{color:"LightSeaGreen",fontWeight:"900"}}>FEE / STUDENT : </h6>
            &nbsp;
            &nbsp; 
            <h6 style={{fontWeight:"bolder"}}>7,200 THB</h6>
        </div> 

        <div className="d-flex justify-content-start">
            <h6 style={{color:"LightSeaGreen",fontWeight:"900"}}>COURSE DETAIL : </h6>
            &nbsp;
            &nbsp; 
            <h6 style={{fontWeight:"bolder"}}>Kids code virtual 3D robots in an engaging online environment, making this an easy, ecient and
            exciting way to learn both coding and robotics!</h6>
        </div> 
        <br/>
        <br/>

        <h6 style={{color:"LightSeaGreen",fontWeight:"900"}}>CLASS SCHEDULE : FIXED SCHEDULE*</h6>
        <div className="d-flex justify-content-start">
          <h6 style={{fontWeight:"500"}}>DAY :</h6>
          <h6>SUNDAY</h6>
        </div>

        <h6 style={{fontWeight:"500"}}>TIME :</h6>
        <h6 style={{fontWeight:"500"}}>COURSE START:</h6>
{/* #######################  Main-Content End Here.. #######################  */}   

{/* #######################  Text Editor Display Start Here... #######################  */}
<h5 className="text-center">Text Editor Display Here....</h5>
{/* #######################  Text Editor Display End Here... #######################  */}
        </Container>
        <div className="text-center">
          <Button  color="primary" onClick={HandleClick}>sign up now</Button>
        </div>
        
        </Form>
        </div>
    )
}
