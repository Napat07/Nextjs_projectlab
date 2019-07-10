import React,{useState,useEffect} from 'react';
import Form from '../../Component/form'
import Head from '../../Component/head.js';
import axios from 'axios';
import Display from '../../Component/ShopItem/shopitem'
export default function Post (props) {

	const[rows,setrows] =useState([])

	 useEffect(async() => {
		console.log(props.url.query.name)
		const pushSearchData = {"keyword":props.url.query.name}    
		await axios
		.post(`http://localhost:3000/api/product/item`, pushSearchData)
		.then(res => {
			console.log(res.data)
		setrows(res.data)
		})
		.catch(err => {
		  console.log(err);
		});
	  }, [])

	

	return(
		<div>
			<Head title="Shop - Project Lab" />
            <Form>
	  			{
           		 	rows.map(item =>(
						<Display Product={item}/>
					)) }
			</Form>
	</div>
  );
}
