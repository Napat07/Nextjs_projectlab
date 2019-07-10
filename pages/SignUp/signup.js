import React from 'react';
import { Button, Form, FormGroup, Row, Input, Col } from 'reactstrap';
import Formm from '../../Component/form.js'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import { sign } from 'crypto';
import axios from 'axios';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
function AddUser() {

  const { inputs, handleInputChange } = useInput({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    Username: '', 
    password: '',
    CFpassword:'',
    phoneNumber:''
   });
  function handleSubmit () {

      if(inputs.firstName === ''){
        alert("Firsrname is invalid");
        console.log("Firsrname is invalid")
        return 0 ;
        }
      if(inputs.lastName === ''){
          alert("LastName is invalid");
          console.log("LastName is invalid")
          return 0 ;
        }
      if(inputs.email === ''){
            alert("Email is invalid");
            console.log("Email is invalid")
            return 0 ;
        }
      if(inputs.Username === ''){
              alert("Username is invalid");
              console.log("Username is invalid")
              return 0 ;
        }
      if(inputs.phoneNumber === ''){
          alert("PhoneNumber is invalid");
          console.log("PhoneNumber is invalid")
          return 0 ;
        }
      if(inputs.Password === ''){
                alert("Password is invalid");
                console.log("Password is invalid")
                return 0 ;
        }
      if(inputs.CFpassword === ''){
                  alert("ConfirmPassword is invalid");
                  console.log("ConfirmPassword is invalid")
                  return 0 ;
        }

            
      if(inputs.password != inputs.CFpassword ){
      alert("Your password and confirmation password do not match");
      console.log("Your password and confirmation password do not match")
      }

    else{
    console.log(inputs)
    axios
    .post("/api/user", inputs)
    .then(res => {
      console.log(res)
      
    })
    .catch(err => {
      console.log(err);
      
    }) 
    alert("Success Signup");
      location.reload(true);
  }
  }

function  Signup ()  {
    return (
      <div>
        <Head title="Signup - Project Lab" />
        <Formm >
        <div >
          <Form  action="/index" className="login-form">
            <h1 className = "text-center" >
              <span className="font-weight-bold" >SIGN UP</span>
            </h1>
          <AvForm>
            <Row>
              <Col mb="6">
                <FormGroup>
                  <Input  type ="firstName" placeholder="Firstname" name="firstName" onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                  <Input type ="lastName" placeholder="Lastname" name="lastName" onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>
            </Row>
        
            <FormGroup>
              <AvField  type ="email" placeholder="Email" name="email" onChange={handleInputChange}  required/>
            </FormGroup>

            <Row>
              <Col mb="6">
                <FormGroup>
                <Input type ="Username" placeholder="Username" name="Username"onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                <Input type ="phoneNumber" placeholder="Phone Number" name="phoneNumber" onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col mb="6">
                <FormGroup>
                <Input type ="password" placeholder="Password" name="password" onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>

              <Col mb="6">
                <FormGroup>
                <Input type ="password" placeholder="ConfirmPassword" name="CFpassword" onChange={handleInputChange}  required/>
                </FormGroup>
              </Col>
            </Row>
        <Button className="btn-lg btn-block" color="primary" onClick={() => handleSubmit()}>Register</Button>
        </AvForm>
      </Form>
      <br/>
      <style jsx>{`

      `}</style>
      </div>
      </Formm>
      
      </div>
    );
  
}
return(
    <div>
      {Signup()}
    </div>
)
   

}

export default AddUser;