import React, { useState,useEffect } from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import axios from 'axios';
import Search from '../../Component/DashBoard/search';
import Displayshopitem from '../../Component/ShopItem/displayshopitem' ;
import {
  NavLink,
  Nav,
  NavItem,
  Row
} from 'reactstrap'
export default function ShowItemCourse (props) {
    return(
        <div>
            ShowItemCourse Page
            <p herf="/EditCourse">Clike here to Edit Course Page</p>
        </div>
    )
}