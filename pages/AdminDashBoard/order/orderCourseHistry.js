import React,{useState}  from 'react';
import Formm from '../../../Component/form'
import Head from '../../../Component/head.js';
import axios from 'axios';
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
    Row,
    Table  } 
    from 'reactstrap';

export default function orderShopHistry() {
    return (
        <div>
            <div>
            <Head title="ORDER HISTRY - COURSE" />
            <Formm>
                <br/>
                <HeaderTitle Name={"ORDER HISTRY - COURSE"}/>
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
                            <NavLink href="/AdminDashBoard/order/orderShop" active> Order </NavLink>
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
                    <h3 style={{marginTop:"25px",marginLeft:"15px"}}>COUSER ORDER HISTRY</h3>
                </Row>
                    <div style={{backgroundColor:"powderblue",height:"4px",marginTop:"5px"}}/>
                <div style={{marginTop:"15px",marginLeft:"30px"}}>
                    <Row  >
                        <h6>CREATE DATE :</h6>
                        <h6 style={{marginLeft:"10px"}}>01/01/2019</h6>
                    </Row>
                    <Row  >
                        <h6>PAYMENT DATE :</h6>
                        <h6 style={{marginLeft:"10px"}}>11/01/2019</h6>
                    </Row>
                    <Row  >
                        <h6>INVOICE NO. :</h6>
                        <h6 className="text-success" style={{marginLeft:"10px"}}>INV-00001</h6>
                    </Row>
                    <Row className="text-success" >
                        <h6 >CUSTOMER :</h6>
                        <h6 style={{marginLeft:"10px"}}>PIMCHANOK THAVIPOKE</h6>
                    </Row>
                    <Row  >
                        <h6>TOTAL :</h6>
                        <h6 style={{marginLeft:"10px"}}>2000 thb</h6>
                    </Row>
                    <Row  >
                        <h6>STATUS :</h6>
                        <h6 className="text-success" style={{marginLeft:"10px"}}>complete</h6>
                    </Row>
                </div>

                    <Row style={{marginLeft:"2px",marginTop:"40px"}}>
                        <Col>
                            <Table striped bordered className="text-center">
                                <thead>
                                <tr  style={{backgroundColor:"Silver"}} >
                                    <th>ITEM CODE</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                    <th>Discount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">MBM0001</th>
                                    <td>
                                        MBOT
                                    </td>
                                    <td>1000 thb</td>
                                    <td>1</td>
                                    <td>1000 thb</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th scope="row">MBM0002</th>
                                    <td>Text Editer</td>
                                    <td>5000 thb</td>
                                    <td >12</td>
                                    <td >5000 thb</td>
                                    <td>-</td>

                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row style={{marginTop:"20px"}}>
                        <Col sm="3">
                            <h6 style={{color:"#69cde5"}}>SHIPPING ADDRESS / ที่อยู่ :</h6 >
                        </Col>
                        <Col>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </Row>
                    

              </div>
            </div>
          </div>    
                </Formm>
            </div>
        </div>
    )
}
