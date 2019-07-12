import React,{useState,useContext,useEffect} from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';
import Router from 'next/router';
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

    //const [rows, setrows] = useState([])
    const [getMockImage,setMockImage] = useState("")
    const [getMockUPC,setMockUPC] = useState("")
    const [getMockName,setMockName] = useState("")
    const [getMockBrand,setMockBrand] = useState("")
    const [getMockType,setMockType] = useState("")
    const [getMockfullPrice,setMockfullPrice] = useState("")
    const [getMockTax,setMockTax] = useState("")
    const [getMocknoTax,setMocknoTax] = useState("")
    const [getMockAvailability,setMockAvailability] = useState("")
    const [getMockWeight,setMockWeight] = useState("")

	 useEffect(async() => {
		console.log(props.url.query.name)
		const pushId = {"keyword":_id}    
		await axios
		.post(`http://localhost:3000/api/product/SEdit`, pushId)
		.then(res => {
			console.log(res.data)
        // setrows(res.data)
        setMockImage(res.data[0].productImage)
        setMockUPC(res.data[0].productUPC)
        setMockName(res.data[0].productName)
        setMockBrand(res.data[0].productBrand)
        setMockfullPrice(res.data[0].fullPrice)
        setMockType(res.data[0].productType)
        setMockTax(res.data[0].tax)
        setMocknoTax(res.data[0].notax)
        setMockAvailability(res.data[0].availability)
        setMockWeight(res.data[0].weight)
		})
		.catch(err => {
		  console.log(err);
    });
    }, [])
    
    async function Edit(){
      
      const inputs2 = {
        "_id":_id,
        "productName":getMockName,
        "fullPrice":getMockfullPrice,
        "productImage":getMockImage,
        "productUPC":getMockUPC,
        "productBrand":getMockBrand,
        "productType":getMockType,
        "tax":getMockTax,
        "notax":getMocknoTax,
        "availability":getMockAvailability,
        "weight":getMockWeight
      }
      
        console.log(inputs2._id+" : "+inputs2.productName+" : "+inputs2.fullPrice+" : "+inputs2.productImage+" : "+
        inputs2.productUPC+" : "+inputs2.productBrand+" : "+inputs2.productType+" : "+inputs2.tax+" : "+
        inputs2.notax+" : "+inputs2.availability+" : "+inputs2.weight)
      
      await axios
      .post("/api/product/edit", inputs2)
      .then(res => {
      alert("Product Update Success!!!");
      console.log(res)
      Router.push({
        pathname: '/AdminDashBoard/showItemShop',
      }) 
      })
      .catch(err => {
      console.log(err);
      })
  }

    function mockcImagechange(e){
      setMockImage(e.target.value)
    }

    function mockcUPCchange(e){
      setMockUPC(e.target.value)
    }

    function mockcNamechange(e){
      setMockName(e.target.value)
    }

    function mockcBrandchange(e){
      setMockBrand(e.target.value)
    }

    function mockcTypechange(e){
      setMockType(e.target.value)
    }

    function mockcfullPricechange(e){
      setMockfullPrice(e.target.value)
    }
    
    function mockcTaxchange(e){
      setMockTax(e.target.value)
    }

    function mockcnoTaxchange(e){
      setMocknoTax(e.target.value)
    }

    function mockcAvailabilitychange(e){
      setMockAvailability(e.target.value)
    }

    function mockcWeightchange(e){
      setMockWeight(e.target.value)
    }


    return(
        <div>
             
            Edit Shop Page
            <p>Name:{name}</p>
            <p>ID:{_id}</p>

            <FormGroup row>
                <Label for="productImage" sm={2}>Product Image :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productImage"  onChange={mockcImagechange} value={getMockImage} />
                  </Col>
              </FormGroup>

              
              <FormGroup row>
                <Label for="productUPC" sm={2}>Product UPC :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productUPC"  onChange={mockcUPCchange} value={getMockUPC} />
                  </Col>
              </FormGroup>


              <FormGroup row>
                <Label for="productName" sm={2}>Product Name :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productName"  onChange={mockcNamechange} value={getMockName} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="productBrand" sm={2}>Product Brand : </Label>
                  <Col sm={10}>
                    <Input type="select" name="productBrand"  onChange={mockcBrandchange} value={getMockBrand} >
                        <option>Select Product Brand</option>
                        <option>Project Lab</option>
                        <option>UFactory</option>
                        <option>SparkFun</option>
                        <option>Seeed Studio</option>
                        <option>ROBOTIS</option>
                        <option>IRONBOY</option>
                        <option>Make Block</option>
                    </Input>
                  </Col>
              </FormGroup>
              
              <FormGroup row>
                <Label for="productType" sm={2}>Product Type : </Label>
                  <Col sm={10}>
                    <Input type="select" name="productType" onChange={mockcTypechange} value={getMockType} >
                        <option>Select Product Type</option>
                        <option>Educational Kits</option>
                        <option>Electronic Parts</option>
                        <option>Mechanical Parts</option>
                    </Input>
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="productfullPrice" sm={2}>Product FullPrice :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productfullPrice"  onChange={mockcfullPricechange}  value={getMockfullPrice} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="tax" sm={2}>Tax :</Label>
                  <Col sm={10}>
                    <Input type="text" name="tax" onChange={mockcTaxchange} value={getMockTax} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="notax" sm={2}>Price (Excl. tax) :</Label>
                  <Col sm={10}>
                    <Input type="text" name="notax"  onChange={mockcnoTaxchange} value={getMocknoTax} />
                  </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="availability" sm={2}>Availability :</Label>
                  <Col sm={10}>
                    <Input type="select" name="availability"onChange={mockcAvailabilitychange} value={getMockAvailability}  >
                        <option>Select Availability</option>
                        <option>Available</option>
                        <option>Unavailable</option>
                    </Input>
                 </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="weight" sm={2}>Weight (g) :</Label>
                  <Col sm={10}>
                    <Input type="text" name="weight" onChange={mockcWeightchange} value={getMockWeight} />
                  </Col>
              </FormGroup>

              <button onClick={Edit}>EDIT!</button>

        </div>    
    )
}
