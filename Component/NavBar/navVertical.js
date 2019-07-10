import React, {useState} from 'react';
import {    
    Nav,
    NavLink,
    NavItem

 } from 'reactstrap';
 import axios from "axios";
 import Link from 'next/link';


function NavVertical (props) {

    async function ClickType (type) {
        console.log("ProductType:"+type);
        const protype = {"protype":type}
        await axios
        .post("/api/product/pdType", protype)
        .then(res => {
            props.ClickTypeOrBrand(res.data)
            })
            .catch(err => {
              console.log(err);
            });
    }

    async function ClickBrand (brand) {
        console.log("ProductBrand:"+brand);
        const probrand = {"probrand":brand}
        await axios
        .post("/api/product/pdBrand", probrand)
        .then(res => {
            props.ClickTypeOrBrand(res.data)
            })
            .catch(err => {
              console.log(err);
            });
    }

    async function ClickAll () {
        console.log("AllProduct");
        await axios
        .get("/api/product/")
        .then(res => {
            props.ClickTypeOrBrand(res.data)
            })
            .catch(err => {
              console.log(err);
            });
    }

    return (
        <div>
            <NavLink onClick = {ClickAll} href="#">All Product</NavLink>
            <h4>Product Type</h4>
            <Nav vertical>
                <NavItem>
                    <NavLink onClick = {(event) =>ClickType("Educational Kits")} href="#">Educational Kits</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick = {(event) =>ClickType("Electronic Parts")} href="#">Electronic Parts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick = {(event) =>ClickType("Mechanical Parts")} href="#">Mechanical Parts</NavLink>
                </NavItem>
            </Nav>
            <hr />
            <h4>Product Brand</h4>
            <Nav vertical>
                <NavLink onClick = {(event) =>ClickBrand("Project Lab")} href="#">Project Lab</NavLink> 
                <NavLink onClick = {(event) =>ClickBrand("UFactory")} href="#">UFactory</NavLink> 
                <NavLink onClick = {(event) =>ClickBrand("SparkFun")} href="#">SparkFun</NavLink> 
                <NavLink onClick = {(event) =>ClickBrand("Seeed Studio")} href="#">Seeed Studio</NavLink>
                <NavLink onClick = {(event) =>ClickBrand("ROBOTIS")} href="#">ROBOTIS</NavLink> 
                <NavLink onClick = {(event) =>ClickBrand("IRONBOY")} href="#">IRONBOY</NavLink> 
                <NavLink onClick = {(event) =>ClickBrand("Makeblock")} href="#">Make Block</NavLink>
            </Nav>
        </div>
      );
    }
  
  export default NavVertical;