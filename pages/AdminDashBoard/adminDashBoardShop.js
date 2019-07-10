import React,{useState,useContext,useEffect} from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import {GlobalContext} from '../../hook/GlobalHook'
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';

import {  Col, 
          Button, 
          Form, 
          FormGroup, 
          Label, 
          Input, 
          FormText,
          Nav, 
          NavItem, 
          NavLink,
          Container,
          Row  } 
          from 'reactstrap';

function AddProduct() {

  const { inputs, handleInputChange } = useInput({ 
    productUPC: 'no', 
    productName: 'no', 
    productBrand: 'no', 
    productType: 'no', 
    productImage: 'no',
    productPrice:'no',
    notax:'no',
    tax:'no',
    availability:'no',
    weight:'no' });

    async function handleSubmit () {
    console.log(inputs)
    await axios
    .post("/api/product", inputs)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
    alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
  }

  
   
  

  function adminDashBoardShop() {
      return (
        <div >
        <Head title="Add Shop - Project Lab" />
        <Formm>
        <br/>
        <Container style={{marginTop:"0px"}}>
            <Row>
            <Col sm= "2">
                <div>
                    <h2>หมวดหมู่</h2>
                    <h4 style={{marginLeft:"10px",marginTop:"20px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop" active >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop"> แก้ไข/แสดงสินค้า </NavLink>
                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>Course</h4>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse">เพิ่ม Course</NavLink>
                            <NavLink href="/AdminDashBoard/showItemCourse">แก้ไข/แสดง Course</NavLink>

                        </NavItem>
                    </Nav>
                </div>
            </Col>

            <Col className="margin-left">

            <Form >
            <h1>Shop</h1>
            
              
            <FormGroup row>
                <Label for="productImage" sm={2}>Product Image :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productImage"  onChange={handleInputChange} />
                  </Col>
              </FormGroup>

              
              <FormGroup row>
                <Label for="productUPC" sm={2}>Product UPC :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productUPC"  onChange={handleInputChange} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="productName" sm={2}>Product Name :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productName"  onChange={handleInputChange}  />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="productBrand" sm={2}>Product Brand : </Label>
                  <Col sm={10}>
                    <Input type="select" name="productBrand"  onChange={handleInputChange} >
                        <option>Select Product Brand</option>
                        <option>Project Lab</option>
                        <option>UFactory</option>
                        <option>SparkFun</option>
                        <option>Seeed Studio</option>
                        <option>ROBOTIS</option>
                        <option>IRONBOY</option>
                        <option>Make Block</option>
                    </Input>
                  </Col>
              </FormGroup>
              
              <FormGroup row>
                <Label for="productType" sm={2}>Product Type : </Label>
                  <Col sm={10}>
                    <Input type="select" name="productType" onChange={handleInputChange} >
                        <option>Select Product Type</option>
                        <option>Educational Kits</option>
                        <option>Electronic Parts</option>
                        <option>Mechanical Parts</option>
                    </Input>
                  </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="productPrice" sm={2}>Product Price :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productPrice"  onChange={handleInputChange} />
                  </Col>
              </FormGroup>
                      
              <FormGroup row>
                <Label for="tax" sm={2}>Tax :</Label>
                  <Col sm={10}>
                    <Input type="text" name="tax" onChange={handleInputChange}   />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="notax" sm={2}>Price (Excl. tax) :</Label>
                  <Col sm={10}>
                    <Input type="text" name="notax"  onChange={handleInputChange} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="availability" sm={2}>Availability :</Label>
                  <Col sm={10}>
                    <Input type="select" name="availability"onChange={handleInputChange}  >
                        <option>Select Availability</option>
                        <option>Available</option>
                        <option>Unavailable</option>
                    </Input>
                 </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="weight" sm={2}>Weight (g) :</Label>
                  <Col sm={10}>
                    <Input type="Tax" name="Weight" id="Weight" onChange={handleInputChange}  />
                  </Col>
              </FormGroup>


        <FormGroup row>
          <Label for="exampleText" sm={2} >Text Area</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" rows="6"  onChange={handleInputChange} />
            
          </Col>
          
        </FormGroup>
       

      </Form>
      <Button type="submit"  color="primary" onClick={() => handleSubmit()}>Submit</Button>

      
            </Col>
            
            </Row>
            
            
        </Container>

        

        <br/>
        </Formm>
        </div>
      );
    }
    return(
      <div >
        {adminDashBoardShop()}
        </div>
    )
  
  }



export default AddProduct;