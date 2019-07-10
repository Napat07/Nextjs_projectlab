import React,{useState,useEffect} from 'react';
import Form from '../../Component/form';
import NavVertical from '../../Component/NavBar/navVertical';
import Banner from '../../Component/ShopItem/shopBanner'
import Head from '../../Component/head.js';
import Displayshopitem from '../../Component/ShopItem/displayshopitem' ;
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  Row
} from 'reactstrap'
import axios from 'axios';

export default function Shop (props) {
const[rows,setrows] =useState([])
const[all,setall] =useState([])

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
      return (
        <div>
          <Head title="Shop"/>
          <Form>
          <Banner/>
          <div  >
          

        <Navbar color="primary" light expand="md" >
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <form className="form-inline my-2 my-lg-0 mb-3 ">
                <input onChange={(event) =>search(event.target.value)} className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
          <br/>
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                    <NavVertical />
              </div>
              <div className="col-lg-10" >
                <Row>
                  <h1>Total = {all}</h1>
                  </Row>
                <div className="row" >
                {
                    rows.map(item =>(
                        <Displayshopitem movie={item}/>
                    )) }
                </div>
              </div>
            </div>
          </div>
      </Form>
      </div>
      );
  }
  Shop.getInitialProps = async function() {
    const res = await axios.get(`http://localhost:3000/api/product`)
    return {
      ProductListData: res.data
    }
  }