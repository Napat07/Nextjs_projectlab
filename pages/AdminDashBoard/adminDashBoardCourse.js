import React,{useState}  from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const DynamicReactQuill = dynamic(() => import('react-quill'));
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
          
export default function adminDashBoardCourse() {




  const[getcourseName,setcourseName] = useState("") ;
  const[getcourseImage,setcourseImage] = useState("") ;
  const[getcourseActive,setcourseActive] = useState("") ;
  const[getcourseDetail,setcourseDetail] = useState("") ;

function handleChangecourseName(inputName) {
  setcourseName(inputName.target.value)
  console.log(inputName.target.value)
}


function handleChangecourseImage(inputImage) {
  setcourseImage(inputImage.target.value)
  console.log(inputImage.target.value)
}

function handleChangecourseDetail(inputDetail) {
  setcourseDetail(inputDetail)
  console.log(inputDetail)
}   
async function handleSubmit(){
  const inputs = {
    "courseName":getcourseName,
    "courseImage":getcourseImage,
    "courseActive":getcourseActive,
    "courseDetail":getcourseDetail,
  }
  console.log(inputs)
  await axios
          .post("/api/course", inputs)
          .then(res => {
            console.log(res)
            alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
          })
          .catch(err => {
            console.log(err);
          })

}  

async function handleEvent(){
  var txt;
  var event = prompt("Please add event:", "Event");
  if (event == null || event == "") {
    alert("ไม่มีข้อมูล");
  } else {
    txt = event;
  }
  document.getElementById("demo").innerHTML = txt;
}
  
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
                    <h4 style={{marginLeft:"10px",marginTop:"20px"}}>Shop</h4>
                    <Nav vertical pills>
                        <NavItem>
                            <NavLink href="/AdminDashBoard/adminDashBoardShop"  >เพิ่มสินค้า</NavLink>
                            <NavLink href="/AdminDashBoard/showItemShop"> แก้ไข/แสดงสินค้า </NavLink>
                            <NavLink href="/AdminDashBoard/order/orderShop"> Order </NavLink>
                        </NavItem>
                        <NavItem>
                        <hr />
                        <h4 style={{marginLeft:"10px"}}>Course</h4>
                            <NavLink href="/AdminDashBoard/adminDashBoardCourse" active>เพิ่ม Course</NavLink>
                            <NavLink href="/AdminDashBoard/showItemCourse">แก้ไข/แสดง Course</NavLink>
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
            </Col>
            <Col>
              <Form>
                <h1>Add Course</h1>
                  <FormGroup row>
                    <Label for="courseName" sm={2}>Course Name : </Label>
                    <Col sm={10}>
                      <Input type="text" name="courseName" placeholder="Name" value={getcourseName} onChange={handleChangecourseName}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="courseImage" sm={2}>Course Image : </Label>
                    <Col sm={10}>
                      <Input type="text" name="courseImage" placeholder="Image" value={getcourseImage}  onChange={handleChangecourseImage}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="courseDetail" sm={2}>Text Editer : </Label>
                    <Col sm={10}>
                      <DynamicReactQuill 
                        value={getcourseDetail}
                        modules={adminDashBoardCourse.modules}
                        formats={adminDashBoardCourse.formats}
                        onChange={handleChangecourseDetail}/>
                    </Col>
                  </FormGroup>
                </Form>
                <FormGroup row>
                    <Label for="courseImage" sm={2}>Calendar : </Label>
                    <Col sm={10}>
                      <Button color='info' onClick={handleEvent} >add event </Button>
                      <p id="demo"></p>
          
<style>{`
        html, body { 
          font-family: arial, sans-serif;
          font-size: 15px;
        }
        
        
        * {
          box-sizing: border-box;
        }
        
        *:before {
          box-sizing: border-box;
        }
        
        *:after {
          box-sizing: border-box;
        }
        
        $min-width: 320px;
        $number-of-days: 7;
        $column-width: percentage(1/$number-of-days);
        
        .container {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding-bottom: 1em;
        }
        
        .row:before {
          display: table;
          content: " ";
        }
        
        .grid-calendar {
          min-width: $min-width;
          .row {
            
            margin: 0;
            
          }
          
          .calendar-week .grid-cell {
            background-color: #f6f6f6;
            border: 1px solid #fff;
          }
        
          .calendar-week-header .grid-cell > div > div {
            padding-bottom: 10px;
            height: auto;
          }
          
          .grid-cell {
            display: inline-block;
            float: left;
            min-height: 1px;
            padding: 0;
            position: relative;
            width: $column-width;
        
            &.previous-month {
              color: #a6a6a6;
            }
            
            &.next-month {
              background-color: #e1e1e1;
            }
            
            > div {
              display: flex;
              justify-content: center;
              width: 100%;
        
              > div {
                height: 0;
                padding: 50% 0;
              }
            }
          }
        }
        
        
        
        
      `}</style>
 

                    </Col>
                  </FormGroup>
               
                  <FormGroup check row>
                    <Col >
                      <Button type="submit" color="primary" onClick={handleSubmit} >Submit</Button>
                    </Col>
                  </FormGroup>
                  
            </Col>
          </Row>
        </Container>
      </Formm>
    </div>
  )
}


adminDashBoardCourse.modules = {
  toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{'list': 'ordered'}, {'list': 'bullet'}],  
      ['link', 'image','video'],
      ['clean'],
      ['code-block']
      
    ]
}
adminDashBoardCourse.formats = [
  'bold','italic','underline','strike','size','color','background','list','indent','link','image','video','clean','code-block'
]

