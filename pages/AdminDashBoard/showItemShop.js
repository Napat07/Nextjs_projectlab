import React, { useState,useEffect } from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import axios from 'axios';
import Search from '../../Component/DashBoard/search';
import Displayshopitem from '../../Component/ShopItem/displayshopitem' ;
import {
  NavLink,
  Nav,
  NavItem,
  Row
} from 'reactstrap'
export default function ShowItemShop (props) {
    const[rows,setrows] =useState([])
    useEffect(() => {
        setrows(props.ProductListData)
      }, [])

      
    async function search (keyword) {
    console.log(keyword)
      const pushSearchData = {"keyword":keyword}    
      await axios
      .post(`http://localhost:3000/api/product/search`, pushSearchData)
      .then(res => {
      console.log(res.data)
      setrows(res.data)
      })
      .catch(err => {
        console.log(err);
      });
    }
    return(
        <div>
            <Head title="Shop - Project Lab" />
            <Formm>
            <br/>
            <br/>
            <br/>
            <br/>

            <input
             onChange={(event) =>search(event.target.value)}
            style={{paddingLeft:'8px',fontSize:24,display: 'block',width:'50%'}} 
            placeholder="Enter your Item"
            />
            
            <div className="container">
            <div className="row">
              <div className="col-sm-2">
              <div>
                    <h2>หมวดหมู่</h2>
                    <h4 style={{marginLeft:"10px",marginTop:"20px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop"  >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop"active> แก้ไข/แสดงสินค้า </NavLink>
                            <NavLink href="/AdminDashBoard/order/orderShop"> Order </NavLink>
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
                            <NavLink href="/AdminDashBoard/adminConsole/adminConsole">จัดการข้อมูล</NavLink>

                        </NavItem>
                    </Nav>
                </div>
              </div>
              <div className="col-lg-10" >
                <div className="row" >
                {
                    rows.map(item =>(
                        <Search movie={item}/>
                    )) }
                </div>
              </div>
            </div>
          </div>    
                </Formm>>
            </div>
        );
}
ShowItemShop.getInitialProps = async function() {
    const res = await axios.get(`http://localhost:3000/api/product`)
    return {
      ProductListData: res.data
    }
  }
