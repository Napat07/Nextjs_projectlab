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

    function HandleClick() {
        Router.push({
            pathname: '/User/orderHistory/historyCourse',
            
        })
    }

       return (
            <div>
            <div>
            <Head title="ORDER HISTORY - COURSE" />
                <Formm>
                    <br/>
                    <HeaderTitle Name={"ORDER HISTORY - COURSE"}/>
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
                           <NavLink href="/User/orderHistory/orderShop" style={{color:"#9b9e93"}} >คำสั่งซื้อสินค้า</NavLink>
                           <NavLink href="/User/orderHistory/orderCourse" active >คำสั่งซื้อคอร์ส</NavLink>    
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
                        <h3 style={{marginTop:"25px",marginLeft:"15px",color:"#525f81"}}>COURSE ORDER HISTORY:</h3>
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