import React from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
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


function AddCourse() {

            const { inputs, handleInputChange } = useInput({ 
              courseName: 'no', 
              courseImage:'no',
              courseActive:'no', 
              courseDetail:'no'
            });
          
              async function handleSubmit () {
              console.log(inputs)
              await axios
              .post("/api/course", inputs)
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err);
              })
              alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
          }
          
            
          
function adminDashBoardCourse () {
      return (
        <div style={{marginTop: '20px'}}>
        <Head title="Add Course - Project Lab" />
        <Formm>
        <br/>
        <Container>
            <Row>
            <Col sm ="2">
            <div>
                    <h2>หมวดหมู่</h2>
                    <h4 style={{marginLeft:"10px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop" >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop"> แก้ไข/แสดงสินค้า </NavLink>
                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>Course</h4>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse" active >เพิ่ม Course</NavLink>
                            <NavLink href="/AdminDashBoard/showItemCourse">แก้ไข/แสดง Course</NavLink>

                        </NavItem>
                    </Nav>
                </div>
            </Col>
            <Col>

            <Form>
              <h1>Add Course</h1>
        <FormGroup row>
          
          <Label for="courseName" sm={2}>Course Name</Label>
          <Col sm={10}>
            <Input type="text" name="courseName" placeholder="Name"  onChange={handleInputChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="courseImage" sm={2}>Course Image</Label>
          <Col sm={10}>
            <Input type="text" name="courseImage" placeholder="Image"  onChange={handleInputChange}/>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="courseDetail" sm={2}>Text Editer</Label>
          <Col sm={10}>
            <Input type="text" name="courseDetail" placeholder="Text Editer"  onChange={handleInputChange}/>
          </Col>
        </FormGroup>
      </Form>
      <FormGroup check row>
        <Col >
            <Button type="submit" color="primary" onClick={() => handleSubmit()} >Submit</Button>
          </Col>
      
        </FormGroup>
      
            </Col>
            </Row>
        </Container>
        </Formm>
        </div>
      );
  }

  return(
    <div>
      {adminDashBoardCourse()}
    </div>
  )

  }
export default AddCourse;