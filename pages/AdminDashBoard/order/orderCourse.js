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
         
export default function orderCourse() {
    return (
        <div>
                    <div>
             <div>
            <Head title="Shop - Project Lab" />
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
                            <NavLink href="/AdminDashBoard/order/orderCourse"active> Order </NavLink>

                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>USER PROFILE</h4>
                            <NavLink href="/AdminDashBoard/userProfile/userProfile">แก้ไข</NavLink>

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
                <div className="row" >
               orderCourse Page
                </div>
              </div>
            </div>
          </div>    
                </Formm>>
            </div>
        </div>
        </div>
    )
}
