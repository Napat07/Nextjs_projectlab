import React,{useState,useContext,useEffect} from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';
//import ShowEdit from '../../Component/DashBoard/ShowEdit';
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


export default function EditShop (props){

    const {_id,name} = props.url.query

    /*
    const { inputs, handleInputChange } = useInput({ 
        _id: 'no',
        productUPC: 'no', 
        productName: 'no', 
        productBrand: 'no', 
        productType: 'no', 
        productImage: 'no',
        productPrice:'no',
        notax:'no',
        tax:'no',
        availability:'no',
        weight:'no' });
        */

    //const _id = Id;

    const [rows, setrows] = useState([])
    const [getMockName,setMockName] = useState("")
    const [getMockfullPrice,setMockfullPrice] = useState("")

	 useEffect(async() => {
		console.log(props.url.query.name)
		const pushId = {"keyword":_id}    
		await axios
		.post(`http://localhost:3000/api/product/SEdit`, pushId)
		.then(res => {
			console.log(res.data)
        // setrows(res.data)
        setMockName(res.data[0].productName)
        setMockfullPrice(res.data[0].fullPrice)
		})
		.catch(err => {
		  console.log(err);
    });
    }, [])
    
    async function Edit(){
      
      const inputs2 = {"_id":_id,"productName":getMockName,"fullPrice":getMockfullPrice}
      console.log(inputs2._id+" : "+inputs2.productName+" : "+inputs2.fullPrice)
      
      await axios
      .post("/api/product/edit", inputs2)
      .then(res => {
      console.log(res)
      })
      .catch(err => {
      console.log(err);
      })
  }

    function mockcNamechange(e){
      setMockName(e.target.value)
    }

    function mockcfullPricechange(e){
      setMockfullPrice(e.target.value)
    }
    return(
        <div>
             
            Edit Shop Page
            <p>Name:{name}</p>
            <p>ID:{_id}</p>

              <FormGroup row>
                <Label for="productName" sm={2}>Product Name :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productName"  onChange={mockcNamechange}  value={getMockName}/>
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="productfullPrice" sm={2}>Product FullPrice :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productfullPrice"  onChange={mockcfullPricechange}  value={getMockfullPrice}/>
                  </Col>
              </FormGroup>

              <button onClick={Edit}>EDIT!</button>

        </div>    
    )
}

/*<p>Edit Name Here..</p>
<input ></input>
              
              
{
              rows.map(item =>(
                <ShowEdit movie={item}/>
              )) }*/