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

export default function orderShop() {

       return (
            <div>
            <div>
            <Head title="PAYMENT" />
                <Formm>
                    <br/>
                    <HeaderTitle Name={"การชำระเงิน"}/>
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
                    <h5 style={{marginLeft:"10px",color:"#646595"}}>ORDER HISTORY</h5>
                           <NavLink href="/User/orderHistory/orderShop" style={{color:"#9b9e93"}}>คำสั่งซื้อสินค้า</NavLink>
                           <NavLink href="/User/orderHistory/orderCourse" style={{color:"#9b9e93"}} >คำสั่งซื้อคอร์ส</NavLink>    
                       </NavItem>
                    
                       <NavItem>
                    <hr />
                    <h5 style={{marginLeft:"10px",color:"#f0ab66"}}>คำแนะนำ</h5>
                           <NavLink href="/User/advice/paymentInfo" active >ข้อมูลการชำระเงิน</NavLink>
                           <NavLink href="/User/advice/studyDate" style={{color:"#9b9e93"}}>การนัดเรียน</NavLink>
                       </NavItem>
                    </Nav>
                    </div>
                </div>
                             
                <div className="col-lg-10" >
                    
                    <Row>
                        <h3 style={{marginTop:"25px",marginLeft:"15px",color:"#525f81"}}>ข้อมูลการชำระเงิน:</h3>
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