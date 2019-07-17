import React from 'react'
import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container } from 'reactstrap';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function courseInformation(props) {
    return (
        <div>
            <Head title="Education - Project Lab" />
            <Form >
            <br/>
            <HeadTitle Name={"Robotics Courses (in House)"}/>
            <br/>
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
            <h2 >{props.url.query.name} COURSE</h2>
            <Row>
                <Col sm="10">
                    <h5>Ace:4-7 </h5>  <p>Computational Thinking :: Programming :: Innovative Thinking</p>
                </Col>
            </Row>
            </Col>
            <Col > 
               <button>Sign up Now</button>
            </Col>
        </Row>
        CLASS SIZE : 4 STUDENTS
        DURATION : 8 HOURS ( 2 HOURS / CLASS )<br/>
        FEE / STUDENT : 7,200 THB<br/>
        COURSE DETAIL : Kids code virtual 3D robots in an engaging online environment, making this an easy, ecient and
        exciting way to learn both coding and robotics!<br/>
        CLASS SCHEDULE : <br/>
        DAY :<br/>
        TIME : <br/>
        COURSE START:<br/>
        Mojobot คืออะไร<br/>
        
        </Container>
        </Form>
        </div>
    )
}
