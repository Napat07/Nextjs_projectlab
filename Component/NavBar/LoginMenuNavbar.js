import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavLink 

} from "reactstrap";
import jwt_decode from "jwt-decode";
import Router from 'next/router';
import { GlobalContext } from "../../hook/GlobalHook";
import useInput from "../../hook/custom-hook.js";
import axios from "axios";
import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.div`
 min-width:300px;
 max-width:300px;
 min-height:350px;
 max-height:350px;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
align-items:center;
`;



function Auth(props) {
    
  const GlobalHook = useContext(GlobalContext);
  const[getErr,setErr] = useState("")
  const[modal,setmodal] =useState(false)

  function toggle() {
      setmodal(!modal)
    }

  const { inputs, handleInputChange } = useInput({
    Username: "",
    email: "",
    password: ""
  });
   useEffect(() => {
     if (localStorage.getItem("globalToken")) {
       const token = localStorage.getItem("globalToken");
       const user = JSON.parse(localStorage.getItem("globalUser"));
       
    GlobalHook.setglobalToken(token)
         GlobalHook.setglobalUser(user)
       const currentTime = Date.now() / 1000;
       const decoded = jwt_decode(token);
   if (decoded.exp < currentTime) {
     handleLogoutSubmit()
     Router.push({
       pathname: '/'
     })
   }

     }
   }, []);


  const handleLoginSubmit = evt => {
    evt.preventDefault();
    const userData = {
      email: inputs.email,
      password: inputs.password
    };
    LoginFN(userData)
   
  };
  function LoginFN(userData){
    axios
    .post("/api/user/login", userData)
    .then(res => {
      const { token, user } = res.data;
      props.setisUserDropDownOpen(false)
      GlobalHook.setglobalToken(token)
      GlobalHook.setglobalToken(user)
      

        localStorage.setItem("globalToken", token);
        localStorage.setItem("globalUser", JSON.stringify(user));
      
    })
    .catch(err => {
      setmodal(true) ;
    }
      );
    
    

  }

  ///////
  const handleLogoutSubmit = evt => {
    
    localStorage.removeItem("globalToken");
    localStorage.removeItem("globalUser");
    GlobalHook.setglobalUser({});
    GlobalHook.setglobalToken();
    props.setisUserDropDownOpen(false)

  };
if(modal){
  return(
    <div>
      <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Opps!</ModalHeader>
          <ModalBody>
          Email Or Password incorrect
          </ModalBody>
          <ModalFooter>
            <Button  color="red" onClick={toggle}>Ok</Button>
          </ModalFooter>
        </Modal>
    </div>
  );
}
if(!GlobalHook.getglobalToken){
    return (
      <div>
        
      <Form  className="text-center  p-5">
          <p className="h4 mb-4">Sign in</p>
          <Input 
              type="email" 
              name="email" 
              id="email" 
              className="form-control mb-4" 
              placeholder="E-mail" 
              onChange={handleInputChange}/>
          <Input 
              type="password" 
              name="password" 
              id="password" 
              className="form-control mb-4" 
              placeholder="Password" 
              onChange={handleInputChange}/>
          <div className="d-flex justify-content-around">
            <Link href="/ForgetPage/forgetpage">
              <a className="text-primary" href="/ForgetPage/forgetpage" >Forget password?</a>
            </Link>
          </div>
          <Button className="btn btn-info btn-block my-4" color ="primary" onClick={handleLoginSubmit}>Sign in</Button>
          <p>
            Not a member?
          </p>
          <Link href="/SignUp/signup">
            <a className="text-primary">Register</a>
          </Link>
        </Form>
        </div>
    );
  } 
  else {
      console.log(GlobalHook.getglobalUser)
    return (
      <div>
        
        <Wrapper>
        <p>Hello:{GlobalHook.getglobalUser.Username}</p>
        {console.log("Role:"+GlobalHook.getglobalUser.role)}
        
        {GlobalHook.getglobalUser.role=="admin"? <Link href="/AdminDashBoard/adminDashBoardShop" >
          Admin Page
        </Link>:
        <div>User</div>}
       
       
        <Button  color="red" onClick={() => handleLogoutSubmit()}>
          LogOut
            </Button>
      </Wrapper>

      </div>

);
  }




}



export default Auth;
