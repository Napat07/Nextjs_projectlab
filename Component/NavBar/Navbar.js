import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Dropdown,
  DropdownToggle,
  DropdownMenu
 } from 'reactstrap';
  import 'bootstrap-css-only/css/bootstrap.min.css';
  
  import 'mdbreact/dist/css/mdb.css';
  import LoginForm from './LoginMenuNavbar' ;
  import React,{useState,useContext,useEffect} from 'react';
  import { GlobalContext } from "../../hook/GlobalHook";

  export default function Example (props) {
    const GlobalHook = useContext(GlobalContext);
    const[isOpen ,setOpen]=useState(false);
    const [getisUserDropDownOpen, setisUserDropDownOpen] = useState(false);
    function toggle (){
      setOpen(!isOpen)
    }

    useEffect(() => {
      if (localStorage.getItem("globalToken")) {
        const token = localStorage.getItem("globalToken");
        const user = JSON.parse(localStorage.getItem("globalUser"));
          GlobalHook.setglobalToken(token)
          GlobalHook.setglobalUser(user)
  
      }
    }, []);
      return (
        <div>
          <Navbar color="white" light expand="md" className ="fixed-top navbar-expand-lg show-for-large"  >
            <li>
              <NavbarBrand href="/">
                <img
                  src="/static/pjl-logo.png"
                  alt="Project Lab"
                  width="120"
                  height="50"
                />
              </NavbarBrand>
           </li>
           <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <div className="d-flex align-items-center">


                <NavItem>
                  <NavLink  href="/" >Home</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink  href="/Course/course" >Course</NavLink>
                </NavItem>


                  <NavItem>
                      <NavLink href="/Shop/shopPage" >Shop</NavLink>
                  </NavItem>


                <NavItem>
                    <NavLink href="#footer" >Contact</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/AboutUs/aboutus" >Aboutus</NavLink>
                </NavItem>
                <ul  class="nav navbar-nav navbar-right" >
                <li><a href="/Shop/shopping-cart" class="fa fa-shopping-cart" aria-hidden="true"> Shopping Cart </a></li>
                
              </ul>
              </div>
              <Dropdown nav inNavbar isOpen={getisUserDropDownOpen} 
              toggle={() => setisUserDropDownOpen(!getisUserDropDownOpen)}>
                <DropdownToggle nav  >
                  {GlobalHook.getglobalToken?
                    <div className="avatar-circle">
                      <span className="initials">{GlobalHook.getglobalUser.Username}</span>
                    </div>
                  :<div>Login</div>

                  }    
                </DropdownToggle>
                <DropdownMenu right>
                  <LoginForm setisUserDropDownOpen={setisUserDropDownOpen} />
                </DropdownMenu>
              </Dropdown>



            </Nav>
          </Collapse>
          </Navbar>
          <style jsx>{`
                li {
                  display: flex;
                  padding: 0.2px 1px;
                }

                a {
                  color: #067df7;
                  text-decoration: none;
                  font-size: 13px;
                }
                .avatar-circle {
                  width: 50px;
                  height: 50px;
                  background-color: gray;
                  text-align: center;
                  border-radius: 50%;
                  -webkit-border-radius: 50%;
                  -moz-border-radius: 50%;
                  cursor:pointer;
                }
                .initials {
                  position: relative;
                  top: 12.5px;
                  font-size: 15px; 
                  line-height: 22px; 
                  color: #fff;
                 
                  font-weight: bold;
                }
              `}</style>
        </div>
      );
  }