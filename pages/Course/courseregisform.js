import React from 'react'
import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import Router from 'next/router';
import './CourseStyle.css';
import { Nav, NavItem, NavLink,Row,Col,Container,Button } from 'reactstrap';
import HeadTitle from "../../Component/DashBoard/HeaderTitle"
export default function courseregisform(props) {
    return (
        <div>
             <Head title="Education - Project Lab" />
            <Form >
            <br/>
            <HeadTitle Name={"APPLICATION FORM (MOJOBOT)"}/>
            <br/>
{/* ####################### Main-Content Start Here.. ####################### */}
            <Container>
                <Nav>
                    <NavItem>
                        <NavLink href="#">Our Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink  href="#">{props.url.query.name} Course </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">{props.url.query.name} Course register form</NavLink>
                    </NavItem>
                </Nav>
                <div style={{backgroundColor:"Gray",height:"12px",width:"100%"}}/>
                <br/>
                <div style={{color:"LightSeaGreen"}}>
                    <h3 style={{fontWeight:"500"}}>APPLICATION FEE</h3>
                    <h6 style={{fontWeight:"500"}}>COURSE : MOJOBOT</h6>
                    <h6 style={{fontWeight:"500"}}>Total Amount: 7,200 THB</h6>
                </div>
                
            </Container>
{/* ####################### Main-Content End Here.. ####################### */}
            </Form>
        </div>
    )
}
