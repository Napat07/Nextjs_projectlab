import React from 'react'
import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container } from 'reactstrap';
export default function courseInformation() {
    return (
        <div>
            <Head title="Education - Project Lab" />
            <Form >
        <header className="masthead">
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
            <h2 >mojobot Course</h2>
            <Row>
                <Col sm="3">
                    <h5>Ace:4-7</h5> 
                </Col>
                <Col sm="9">
                    <p>Computational Thinking :: Programming :: Innovative Thinking</p>
                </Col>
            </Row>
            </Col>
            <Col> 
               <button>Sign up Now</button>
            </Col>
        </Row>
        CLASS SIZE : 4 STUDENTS<br/>
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
