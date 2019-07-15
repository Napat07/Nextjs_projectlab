import React,{useState}  from 'react';
import Formm from '../../../Component/form'
import Head from '../../../Component/head.js';
import HeaderTitle from "../../../Component/DashBoard/HeaderTitle"
import Router from 'next/router';
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
          Row,
          Table  } 
          from 'reactstrap';
         
export default function orderCourse() {
    function HandleClike(){
        Router.push({
            pathname: '/AdminDashBoard/order/orderCourseHistry',
            
        })
    }
    return (
        <div>
                    <div>
             <div>
            <Head title="COURSE - ORDER HISTRY" />
            <Formm>
            <br/>
            <HeaderTitle Name={"COURSE - ORDER HISTRY"}/>
            
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
              <Row>
                    <h2 style={{marginTop:"25px",marginLeft:"15px"}}>COURSE ORDER HISTRY</h2>
                </Row>
                    <div style={{backgroundColor:"powderblue",height:"4px",marginTop:"5px"}}/>
                <Row  style={{marginTop:"15px"}}>
                    <Col sm ="2" >
                        <h4 style={{marginLeft:"25px",marginTop:"5px"}}>SEARCH :</h4>
                    </Col>
                    <Col >
                        <Input placeholder="Search"></Input>
                    </Col>
                </Row>
                <Row style={{marginLeft:"25px",marginTop:"50px"}}>
                    <Col>
                        <Table striped bordered  className="text-center">
                            <thead>
                                <tr  style={{backgroundColor:"Silver"}} >
                                    <th>DATE</th>
                                    <th>User Name</th>
                                    <th>INVOICE NO.</th>
                                    <th>TOTAL</th>
                                    <th>STATUS</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">10/02/2019</th>
                                    <td onClick={HandleClike}>
                                        <a>
                                            Palatip
                                        </a>
                                    </td>
                                    <td>-</td>
                                    <td>50 thb</td>
                                    <td style={{color:"red"}}>unpaid</td>
                                </tr>
                                <tr>
                                    <th scope="row">11/01/2019</th>
                                    <td>Mark</td>
                                    <td>INV-00004</td>
                                    <td >750 thb</td>
                                    <td className="text-success">complete</td>
                                </tr>
                                <tr>
                                    <th scope="row">11/01/2019</th>
                                    <td>Pimchanak</td>
                                    <td>INV-00005</td>
                                    <td>7500 thb</td>
                                    <td className="text-success">complete</td>
                                </tr>
                                </tbody>
                        </Table>
                    </Col>
                </Row>
              </div>
            </div>
          </div>    
                </Formm>>
            </div>
        </div>
        </div>
    )
}
