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
                    <Label for="courseName" sm={2}>Course Name</Label>
                    <Col sm={10}>
                      <Input type="text" name="courseName" placeholder="Name" value={getcourseName} onChange={handleChangecourseName}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="courseImage" sm={2}>Course Image</Label>
                    <Col sm={10}>
                      <Input type="text" name="courseImage" placeholder="Image" value={getcourseImage}  onChange={handleChangecourseImage}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="courseDetail" sm={2}>Text Editer</Label>
                    <Col sm={10}>
                      <DynamicReactQuill 
                        value={getcourseDetail}
                        modules={adminDashBoardCourse.modules}
                        formats={adminDashBoardCourse.formats}
                        onChange={handleChangecourseDetail}/>
                    </Col>
                  </FormGroup>
                </Form>
                <ul class="weekdays">
                <li>Sunday</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
            </ul>
            <ul class="days" ng-repeat="(weekIndex, week) in weeks">
              <li class="day" ng-repeat="(dayIndex, day) in week.days" ng-class="(day.month-1 != commonData.filteredMonth) ? 'other-month' : '' ">
                  <div class="header">
                      <small class="text-muted"> oo</small>
                      <span title="Create Event" class="icon-button float-right" data-toggle="modal" data-target="#createEventModal" ng-show="day.month-1 == commonData.filteredMonth" ng-click="addEvent(day.year, day.month, day.date, weekIndex, dayIndex)"><i class="ion ion-plus-round"></i></span>
                  </div>
                  <div class="event" ng-repeat="(eventIndex, event) in day.events">
                      <div class="event-title">
                          <span class="float-right">
                                <i class="ion ion-eye" title="View Event" data-toggle="modal" data-target="#viewEventModal" ng-click="viewEvent(event.title, event.description)"></i>
                                <i class="ion ion-edit" title="Edit Event" data-toggle="modal" data-target="#editEventModal" ng-click="editEvent(day.year, day.month, day.date, weekIndex, dayIndex, eventIndex, event._id, event.title, event.description)"></i>
                                <i class="ion ion-ios-trash" title="Delete Event" ng-click="deleteEvent(weekIndex, dayIndex, eventIndex, event._id)"></i>
                          </span>
                      </div>
                  </div>
              </li>
            </ul>
            <h5 class="modal-title">Create Event</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

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
