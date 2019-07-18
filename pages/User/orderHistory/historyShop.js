import React,{useState}  from 'react';
import Formm from '../../../Component/form'
import Head from '../../../Component/head.js';
import HeaderTitle from "../../../Component/DashBoard/HeaderTitle"
import Router from 'next/router';
import {  Col, 
          Button, 
          Form, 
          FormGroup, 
          Label, 
          Input, 
          Nav, 
          NavItem, 
          NavLink,
          Row,
          Table  } 
          from 'reactstrap';

export default function historyShop() {

    function HandleClick() {
        Router.push({
            pathname: '/User/orderHistory/orderShop',
            
        })
    }

       return (
            <div>
            <div>
            <Head title="ORDER HISTORY - SHOP" />
                <Formm>
                    <br/>
                    <HeaderTitle Name={"ORDER HISTORY - SHOP"}/>
                <div className="container" style={{marginTop:"10px"}}>
                <div className="row">
                  <div className="col-sm-2">
                  <div>
           
                   <h5 style={{marginLeft:"10px",marginTop:"20px",color:"#646595"}}>USER PROFILE</h5>
                   <Nav vertical pills>
                       <NavItem>
                           <NavLink href="/User/userPage" style={{color:"#9b9e93"}} >แก้ไข</NavLink>
                       </NavItem>
                       
                       <NavItem>
                    <hr />
                    <h5 style={{marginLeft:"10px",color:"#f0ab66"}}>ORDER HISTORY</h5>
                           <NavLink href="/User/orderHistory/orderShop" active>คำสั่งซื้อสินค้า</NavLink>
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
                        <h3 style={{marginTop:"25px",marginLeft:"15px",color:"#525f81"}}>SHOP ORDER HISTORY:</h3>
                    </Row>

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
                    <Row  >
                        <h6>TOTAL :</h6>
                        <h6 style={{marginLeft:"10px"}}>2000 thb</h6>
                    </Row>
                    <Row  >
                        <h6>STATUS :</h6>
                        <h6 className="text-success" style={{marginLeft:"10px"}}>complete</h6>
                    </Row>

                    <Row style={{marginLeft:"25px",marginTop:"50px"}}>
                        <Col>
                            <Table striped bordered  className="text-center">
                                <thead>
                                <tr  style={{backgroundColor:"Silver"}} >
                                    <th>ITEM CODE</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">MBM0001</th>
                                    <td>SERVO MOTOR</td>
                                    <td>1000 thb</td>
                                    <td>1</td>
                                    <td>1000 thb</td>
                                </tr>
                                <tr>
                                    <th scope="row">MBM0002</th>
                                    <td>SERVO MOTOR</td>
                                    <td>500 thb</td>
                                    <td>2</td>
                                    <td>1000 thb</td>
                                </tr>  
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <h6>Total (before VAT 7%)</h6>
                        <h6 style={{marginLeft:"10px"}}>2000 thb</h6>
                    </Row>
                    <Row>
                        <h6>VAT 7%</h6>
                        <h6 style={{marginLeft:"10px"}}>140 thb</h6>
                    </Row>
                    <Row>
                        <h6>Total (after VAT 7%)</h6>
                        <h6 style={{marginLeft:"10px"}}>2140 thb</h6>
                    </Row>

                    <br />

                    <Row style={{marginTop:"20px"}}>
                        <Col sm="3">
                            <h6 style={{color:"#69cde5"}}>SHIPPING ADDRESS / ที่อยู่ :</h6 >
                        </Col>
                        <Col>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </Row>

                <br />
                <br />

                <Row>
                    
                        <button style={{
                        display:" inline-block",
                        fontSize: "1em",
                        marginLeft: "300px",
                        padding: "0.5em 1.5em",
                        border: "2px solid palevioletred",
                        borderRadius: "3px",
                        display: "block",        
                        color: "#FFFFFF",
                        borderColor: "#42afd6",
                        backgroundColor:" #27c5ea"
                        }} onClick={HandleClick}> 
                        
                        BACK </button>
                    
                        <button style={{
                        display:" inline-block",
                        fontSize: "1em",
                        marginLeft: "50px",
                        padding: "0.5em 1.5em",
                        border: "2px solid palevioletred",
                        borderRadius: "3px",
                        display: "block",        
                        color: "#FFFFFF",
                        borderColor: "#42afd6",
                        backgroundColor:" #a3a3a4"
                        }}> 
                        
                        CANCEL </button>
                    
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