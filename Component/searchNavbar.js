import React from 'react';
import {
    Navbar,
    Nav,
    UncontrolledDropdown,
    Button
 } from 'reactstrap'
function SearchNavbar () {
  
    return (
        <div classname="margin-top2 " >
        <Navbar color="primary" light expand="md" >
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <form class="form-inline my-2 my-lg-0 mb-3 ">
                <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                  <Button  color="success" type="submit">Search</Button>
              </form>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
      );
    }
  
  export default SearchNavbar;