import React from 'react';
import {    
    Nav,
    NavLink,
    NavItem

 } from 'reactstrap'
function NavVertical () {
    return (
        <div>
            <h4>Product Type</h4>
            <Nav vertical>
                <NavItem>
                    <NavLink href="#">Educational Kits</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Electronic Parts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Mechanical Parts</NavLink>
                </NavItem>
            </Nav>
            <hr />
            <h4>Product Brand</h4>
            <Nav vertical>
                <NavLink href="#">Project Lab</NavLink> 
                    <NavLink href="#">UFactory</NavLink> 
                    <NavLink href="#">SparkFun</NavLink> 
                    <NavLink href="#">Seeed Studio</NavLink>
                    <NavLink href="#">ROBOTIS</NavLink> 
                    <NavLink href="#">IRONBOY</NavLink> 
                    <NavLink href="#">Make Block</NavLink>
            </Nav>
        </div>
      );
    }
  
  export default NavVertical;