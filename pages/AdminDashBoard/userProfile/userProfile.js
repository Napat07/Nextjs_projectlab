import React,{useState}  from 'react';
import Formm from '../../../Component/form'
import Head from '../../../Component/head.js';
import axios from 'axios';
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
       <br/>
       <br/>
       <br/>
       
       <div className="container">
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
         <Form >
            <h1>Hello, Pear</h1>
            <h5>USERNAME: PIMCHANOK-THA</h5>
            
            <FormGroup row>
                <Col sm="4">
                    <Label for="Username">Name/ชื่อ:</Label>
                </Col>
                <Col>
                    <Input type="text" name="Username" />
                </Col> 
            </FormGroup>

              
            <FormGroup row>
                <Col sm="4">
                    <Label for="lastName">SURNAME/นามสกุล :</Label>
                </Col>
                <Col>
                    <Input type="text" name="lastName"  />      
                </Col>           
            </FormGroup>


            <FormGroup row>
                <Col sm="4">
                    <Label for="gender">GENDER/เพศ :</Label>
                </Col>
                <Col sm="4">
                    <Input type="select" name="gender">
                        <option>Male</option>
                        <option>Female</option>
                    </Input>
                 </Col>
            </FormGroup>


            <FormGroup row>
                <Col sm="4">
                    <Label for="phoneNumber" >MOBILE :</Label>
                </Col>
                <Col>
                    <Input type="text" name="phoneNumber" />
                </Col>          
            </FormGroup>


            <FormGroup row>
                <Col sm="4">
                    <Label for="email" >EMAIL/อีเมล์ :</Label>
                </Col>
                <Col>
                    <Input type="email" name="email" />
                </Col>          
            </FormGroup>


            <FormGroup row>
                <Col sm="4">
                    <Label for="address" >ADDRESS/ที่อยู่ :</Label>
                </Col>
                <Col>
                    <Input type="text" name="address" />
                </Col>          
            </FormGroup>

              
      </Form>
       </div>
     </div>    
           </Formm>>
       </div>
   </div>
    )
}
