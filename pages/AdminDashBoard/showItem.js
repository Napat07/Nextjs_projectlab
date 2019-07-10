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
export default function ShowItem (props) {
    const[rows,setrows] =useState([])
    useEffect(() => {
        setrows(props.ProductListData)
      }, [])

      
function search (keyword) {
    console.log(keyword)
      const pushSearchData = {"keyword":keyword}    
      axios
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
            style={{paddingLeft:'8px',fontSize:24,display: 'block',width:'50%'}} placeholder="Enter your Item"/>
            
            <div className="container">
            <div className="row">
              <div className="col-sm-2">
              <div>
                    <h2>หมวดหมู่</h2>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop"  >Shop</NavLink>
                            <NavLink href="/AdminDashBoard/showItem" active> แสดงสินค้า </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse">Course</NavLink>
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
ShowItem.getInitialProps = async function() {
    const res = await axios.get(`http://localhost:3000/api/product`)
    return {
      ProductListData: res.data
    }
  }
