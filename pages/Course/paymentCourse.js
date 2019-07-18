import React from 'react'
import Formm from '../../Component/form.js'
import Head from '../../Component/head.js';
import Router from 'next/router';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container,Button,Input,Form,FormGroup,Label } from 'reactstrap';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function paymentCourse() {
    return (
        <div>
            <Head title=" Payment - Course" />
            <Formm >
            <br/>
            <HeadTitle Name={"REGISTERATION FORM (MOJOBOT)"}/>
{/* ####################### Main-Content Start Here.. ####################### */}
            <Container>
                <Nav>
                    <NavItem>
                        <NavLink href="/Course">Our Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Course/courseInformation" >mojobot Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="#">mojobot Course register form</NavLink>
                    </NavItem>
                </Nav>
                <div style={{backgroundColor:"Gray",height:"12px",width:"100%"}}/>

        {/* ####################### Border Start Here.. ####################### */}

                <div style={{
                            borderStyle: "solid",borderWidth: "1px",
                            borderColor:"#c2c2a3",marginTop:"100px",
                            

                            }}>
                    <div style={{padding:"25px"}}>
                        <h3 style={{color:"#69cde5",fontWeight:"500"}}>Thank You for registered our course</h3>
                        <div style={{backgroundColor:"#69cde5",height:"2px",width:"100%"}}/>
                        
                        <div className="d-flex justify-content-start">
                            <h6 style={{color:"#69cde5",fontWeight:"900",marginTop:"15px"}}>NAME : </h6>
                            &nbsp;
                            &nbsp;
                            &nbsp;  
                            <h6 style={{fontWeight:"bolder",marginTop:"15px"}}>XXXXXX</h6>
                        </div><br/>
                        
                        <div className="d-flex justify-content-start">
                            <h6 style={{color:"#69cde5",fontWeight:"900"}}>SURNAME : </h6>
                            &nbsp;
                            &nbsp;
                            &nbsp;  
                            <h6 style={{fontWeight:"bolder"}}>XXXXXX</h6>
                        </div><br/>

                        <div className="d-flex justify-content-start">
                            <h6 style={{color:"#69cde5",fontWeight:"900"}}>MOBILE NO. : </h6>
                            &nbsp;
                            &nbsp;
                            &nbsp;  
                            <h6 style={{fontWeight:"bolder"}}>XXXXXX</h6>
                        </div><br/>

                        <div className="d-flex justify-content-start">
                            <h6 style={{color:"#69cde5",fontWeight:"900"}}>Total Amount : </h6>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                            <div style={{border:"solid",borderWidth: "1px"}}>
                                <h6 style={{fontWeight:"700",color:"#69cde5",padding:"5px 10px 2px 10px"}}>7,200</h6> 
                            </div>  
                            &nbsp;
                            &nbsp;
                            <h6 style={{fontWeight:"bolder",color:"#69cde5"}}>THB</h6>
                        </div>
                    </div> 
                </div>
        {/* ####################### Border End Here.. ####################### */}
                <div className="text-center">
                    <h6 style={{color:"#69cde5",fontWeight:"900",marginTop:"30px"}}>Please make payment via company bank account, and send the payment slip to our Line @ or email</h6>
                    <br/>
                    <img src="https://www.designs4theweb.com/wp-content/themes/wp-understrap/img/default.png"/>
                    <br/><br/>
                    <img src="http://via.placeholder.com/640x360"/>
                </div>
               
                </Container>
{/* ####################### Main-Content End Here.. ####################### */}
            </Formm>
        </div>
    )
}
