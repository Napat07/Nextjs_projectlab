import React,{useState}  from 'react';
import styled from 'styled-components';
import Formm from '../../../Component/form'
import Head from '../../../Component/head.js';
import HeaderTitle from "../../../Component/DashBoard/HeaderTitle"
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
           
                   <h2>หมวดหมู่</h2>
                   <h4 style={{marginLeft:"10px",marginTop:"20px"}}>Shop</h4>
                   <Nav vertical pills>
                       <NavItem>
                           <NavLink href="/AdminDashBoard/adminDashBoardShop"  >เพิ่มสินค้า</NavLink>
                           <NavLink href="/AdminDashBoard/showItemShop"> แก้ไข/แสดงสินค้า </NavLink>
                           <NavLink href="/AdminDashBoard/order/orderShop"> Order </NavLink>
                       </NavItem>
                       <NavItem>
                       <hr />
                       <h4 style={{marginLeft:"10px"}}>Course</h4>
                           <NavLink href="/AdminDashBoard/adminDashBoardCourse" >เพิ่ม Course</NavLink>
                           <NavLink href="/AdminDashBoard/showItemCourse" >แก้ไข/แสดง Course</NavLink>
                           <NavLink href="/AdminDashBoard/order/orderCourse"> Order </NavLink>
    
                       </NavItem>
                       <NavItem>
                       <hr />
                       <h4 style={{marginLeft:"10px"}}>USER PROFILE</h4>
                           <NavLink href="/AdminDashBoard/userProfile/userProfile"active>แก้ไข</NavLink>
    
                       </NavItem>
                       <NavItem>
                       <hr />
                       <h4 style={{marginLeft:"10px"}}>ADMIN CONSOLE</h4>
                           <NavLink href="/AdminDashBoard/adminConsole/adminConsole" >จัดการข้อมูล</NavLink>
    
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

                <Row>
                <button style={{
                        display:" inline-block",
                        fontSize: "1em",
                        margin: "0 auto",
                        padding: "0.5em 1.5em",
                        border: "2px solid palevioletred",
                        borderRadius: "3px",
                        display: "block",        
                        color: "#FFFFFF",
                        borderColor: "#42afd6",
                        backgroundColor:" #27c5ea"
                        }}> 
                        
                        SAVE </button>
                </Row>
                </div>       
    
                </div>
                </div>    
                </Formm>
            </div>
            </div>
        )
    
}
