import React,{useState}  from 'react';
import styled from 'styled-components';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import HeaderTitle from "../../Component/DashBoard/HeaderTitle"
import {  Col, 
          Button, 
          Form, 
          FormGroup, 
          Label, 
          Input, 
          FormText,
          Nav, 
          NavItem, 
          NavLink,
          Container,
          Row  } 
          from 'reactstrap';
      
    const B = styled.button`
        display: inline-block;
        font-size: 1em;
        margin: 0 auto;
        padding: 0.5em 1.5em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        display: block;
        `;

    const TomatoButton = styled(B)`
        color: #FFFFFF;
        border-color: #42afd6;
        background-color: #27c5ea;
        `;   

export default function userProfile() {

    //const {getUser, setUser} = useState("");  

        return (
            <div>
            <div>
            <Head title="UserProfile" />
                <Formm>
                    <br/>
                    <HeaderTitle Name={"USER PROFILE"}/>
                <div className="container" style={{marginTop:"10px"}}>
                <div className="row">
                  <div className="col-sm-2">
                  <div>
           
                   <h5 style={{marginLeft:"10px",marginTop:"20px",color:"#f0ab66"}}>USER PROFILE</h5>
                   <Nav vertical pills>
                       <NavItem>
                           <NavLink href="/User/userPage"active  >แก้ไข</NavLink>
                       </NavItem>
                       
                       <NavItem>
                    <hr />
                    <h5 style={{marginLeft:"10px",color:"#646595"}}>ORDER HISTORY</h5>
                           <NavLink href="/User/orderHistory/orderShop" style={{color:"#9b9e93"}}>คำสั่งซื้อสินค้า</NavLink>
                           <NavLink href="/User/orderHistory/orderCourse" style={{color:"#9b9e93"}} >คำสั่งซื้อคอร์ส</NavLink>    
                       </NavItem>
                    
                       <NavItem>
                    <hr />
                    <h5 style={{marginLeft:"10px",color:"#646595"}}>คำแนะนำ</h5>
                           <NavLink href="/User/advice/paymentInfo" style={{color:"#9b9e93"}}>ข้อมูลการชำระเงิน</NavLink>
                           <NavLink href="/User/advice/studyDate" style={{color:"#9b9e93"}}>การนัดเรียน</NavLink>
                       </NavItem>
                    </Nav>
                    </div>
                </div>
                             
                <div className="col-lg-10" >
                    <Row>
                        <h3 style={{marginTop:"25px",marginLeft:"15px",color:"#525f81"}}>Hello, Pear</h3>
                    </Row>
                    <Row>
                        <h6 style={{marginLeft:"10px",color:"#42afd6"}}>USERNAME: PIMCHANOK-THA</h6>
                    </Row>
                    <div style={{backgroundColor:"powderblue",height:"4px",marginTop:"5px"}}/>
                    <div style={{marginTop:"15px",marginLeft:"30px"}}/>
                    
                    <Row>
                        <h3 style={{marginTop:"25px",marginLeft:"15px",color:"#525f81"}}>PROFILE:</h3>
                    </Row>

                <FormGroup row>
                    <Col sm="2">
                        <Label for="firstName" style={{color:"#42afd6"}}>Name/ชื่อ:</Label>
                    </Col>
                    <Col sm="4">
                        <Input type="text" name="firstName" />
                    </Col> 
                </FormGroup>
                      
                <FormGroup row>
                    <Col sm="2">
                        <Label for="lastName" style={{color:"#42afd6"}}>SURNAME/นามสกุล :</Label>
                    </Col>
                    <Col sm="4">
                        <Input type="text" name="lastName"  />      
                    </Col>           
                </FormGroup>    
    
                <FormGroup row>
                    <Col sm="2">
                        <Label for="gender" style={{color:"#42afd6"}}>GENDER/เพศ :</Label>
                    </Col>
                    <Col sm="2">
                        <Input type="select" name="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </Input>
                     </Col>
                </FormGroup>    
    
                <FormGroup row>
                    <Col sm="2">
                        <Label for="phoneNumber" style={{color:"#42afd6"}}>MOBILE :</Label>
                    </Col>
                    <Col sm="4">
                        <Input type="text" name="phoneNumber" />
                    </Col>          
                </FormGroup>    
    
                <FormGroup row>
                    <Col sm="2">
                        <Label for="email" style={{color:"#42afd6"}}>EMAIL/อีเมล์ :</Label>
                    </Col>
                    <Col sm="4">
                        <Input type="email" name="email" />
                    </Col>          
                </FormGroup>    
    
                <FormGroup row>
                    <Col sm="2">
                        <Label for="address" style={{color:"#42afd6"}}>ADDRESS/ที่อยู่ :</Label>
                    </Col>
                    <Col sm="6">
                        <Input type="textarea" name="address" />
                    </Col>          
                </FormGroup>

                <br />

                <div style={{backgroundColor:"powderblue",height:"4px",marginTop:"5px"}}/>
                <div style={{marginTop:"15px",marginLeft:"30px"}}/>

                <br />

                <Row>
                    <TomatoButton> SAVE </TomatoButton>
                </Row>
                </div>       
                </div>
                </div>    
                <br />
                <br />
                <br />
                </Formm>
            </div>
            </div>
        )
    
}