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
                    <a onClick={handleEvent} class="btn btn-info pull-right" role="button">
                        <i class="fa fa-plus"></i> add event
                        </a>
                      <p id="demo"></p>
          
                      <table class="calendar">
  <tr>
    <th>Friday</th>
    <th>Saturay</th>
    <th>Sunday</th>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
    <th>Thursday</th>
  </tr>
  <tr>
    <td class="muted">28</td>
    <td class="muted">29</td>
    <td class="muted">30</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
  </tr>
  <tr>
    <td class="todo">5<div class="bubble">Mojobot Class</div></td>
    <td class="todoo">6<div class="bubbleo">mBot Class</div></td>
    <td class="todop">7<div class="bubblep">Tech Creator Class</div></td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>

  </tr>
  <tr>
    <td class="todo">12<div class="bubble">Mojobot Class</div></td>
    <td class="todoo">13<div class="bubbleo">mBot Class</div></td>
    <td class="todop">14<div class="bubblep">Tech Creator Class</div></td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td class="today">18</td>
  </tr>
  <tr>
    <td class="todo">19<div class="bubble">Mojobot Class</div></td>
    <td class="todoo">20<div class="bubbleo">mBot Class</div></td>
    <td class="todop">21<div class="bubblep">Tech Creator Class</div></td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
  </tr>
  <tr>
    <td class="todo">26<div class="bubble">Mojobot Class</div></td>
    <td class="todoo">27<div class="bubbleo">mBot Class</div></td>
    <td class="todop">28<div class="bubblep">Tech Creator Class</div></td>
    <td>29</td>
    <td>30</td>
    <td>31</td>
    <td class="muted">1</td>
  </tr>
</table>

          
<style>{`
        html, body { 
          font-family: arial, sans-serif;
          font-size: 15px;
        }
        *{
          box-sizing: border-box;
        }
        
        table{
          width: 100%;
        }
        tr{
        }
        th, td{
          text-align: center;
          padding: 30px;
          margin: 0;
        }
        
        th{
          border-bottom: 2px solid #dfdfdf;
        }
        
        th{
          font-weight: 600;
        }
        
        .calendar{
        }
        
        .calendar .muted{
          color: rgba(0,0,0,0.3);
        }
        
        .calendar .today{
          color: red;
        }
        
        .calendar .todo{
          border-bottom: solid #ccce77 3px;
          position: relative;
        }
        .calendar .todoo{
          border-bottom: solid #C70039 3px;
          position: relative;
        }
        .calendar .todop{
          border-bottom: solid #3339FF 3px;
          position: relative;
        }
        .calendar .todo > .bubble{
          position: absolute;
          padding: 25px 30px;
          background-color: #feffd8;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: block;
          opacity: 0;
          width: 200px;
          z-index: -1;
          transition: all .1s ease;
          top: 0;
        }
        .calendar .todo:hover > .bubble{
          opacity: 1;
          transition: all .2s ease;
          top: 70px;
          z-index: 999;
        }
        .calendar .todoo > .bubbleo{
          position: absolute;
          padding: 25px 30px;
          background-color: #feffd8;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: block;
          opacity: 0;
          width: 200px;
          z-index: -1;
          transition: all .1s ease;
          top: 0;
        }
        .calendar .todoo:hover > .bubbleo{
          opacity: 1;
          transition: all .2s ease;
          top: 70px;
          z-index: 999;
        }
        .calendar .todop > .bubblep{
          position: absolute;
          padding: 25px 30px;
          background-color: #feffd8;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          display: block;
          opacity: 0;
          width: 200px;
          z-index: -1;
          transition: all .1s ease;
          top: 0;
        }
        .calendar .todop:hover > .bubblep{
          opacity: 1;
          transition: all .2s ease;
          top: 70px;
          z-index: 999;
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

