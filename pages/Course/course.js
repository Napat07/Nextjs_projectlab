import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {  
          Jumbotron,
          Button,
          Container,
          CardImg,
          NavItem,
          Nav,
          NavLink,
          Row,
          Col,
        
        } from 'reactstrap';
import './CourseStyle.css';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function Course () {
  return (
    <div>
      <Head title="Education - Project Lab" />
      <Form >
      <br/>
      <HeadTitle Name={"Robotics Courses (in House)"}/>
 
          <div className="jumbotron jumbotron-img" style={{marginTop:"20px"}}>
        </div>
        <Container>
          <Nav>
            <NavItem>
              <NavLink href="#">Our course</NavLink>
            </NavItem>
            <div style={{backgroundColor:"Gray",height:"12px",width:"100%"}}/>
          </Nav>
        
      
        <div  style={{marginTop:"40px"}}>
          <Row className="d-flex justify-content-between">
            <Col sm="4" >
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/MB3.png"/>
              <Button  color="primary" size="lg" block >mojobot</Button>
            </Col>
            <Col sm="4"  >
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/img001.png"/>
              <Button color="primary" size="lg" block >mojobot</Button>
            </Col>
            <Col sm="4"  >
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/course.jpg"/>
              <Button color="primary" size="lg" block >mojobot</Button>
            </Col>
          </Row>

          <Nav style={{marginTop:"50px"}}>
            <NavItem>
              <NavLink href="#">Our philisophy</NavLink>
            </NavItem>
            <div style={{backgroundColor:"Gray",height:"12px",width:"100%"}}/>
          </Nav>
        </div>

        <p style={{marginTop:"25px"}}>At Project Lab we affer project base. robotics STEM education course that are designed especially for children but
        recommended and available for all interested persons. STEM education is an interdisciplinary education combining Science</p>
        <Row >
          <Col className="d-flex justify-content-center align-items-center" >
            <img  src="http://projectlab.co.th/static/frontend/school/img/course.jpg" />
          </Col>
        </Row>

        </Container>
        
      </Form >

    </div>
      );
    
  }