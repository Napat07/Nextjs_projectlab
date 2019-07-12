import React, { useState,useContext } from 'react'
import Auth from '../Navbar/LoginMenuNavbar'
import { GlobalContext } from "../../hook/GlobalHook";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Input, InputGroupAddon,Button,InputGroupButtonDropdown } from 'reactstrap';
export default function RenderUserDropDown() {
    const GlobalHook = useContext(GlobalContext);
    const [getisUserDropDownOpen, setisUserDropDownOpen] = useState(false);
 

    return (
        <Dropdown isOpen={getisUserDropDownOpen} toggle={() => setisUserDropDownOpen(!getisUserDropDownOpen)}>
            <DropdownToggle  tag="div" style={{background:"white",padding:0,margin:0,border:"none"}}>
                {GlobalHook.getglobalToken?
               <div className="avatar-circle">
                   <span className="initials">{GlobalHook.getglobalUser.name.toUpperCase().slice(0, 1)}</span>
               </div>
                :<Button outline color="secondary">Login / SignUp</Button>
                
            }
           </DropdownToggle>
           
            <DropdownMenu right>
               <Auth setisUserDropDownOpen={setisUserDropDownOpen}/>
            </DropdownMenu>
            <style jsx>
                {
                    `
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
                        font-size: 22px; 
                        line-height: 22px; 
                        color: #fff;
                       
                        font-weight: bold;
                      }
                    `
                }
            </style>
        </Dropdown>
    )
}
