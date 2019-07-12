import React, { useState, useEffect, useContext } from 'react';
import Head from '../../Component/head.js';
import { GlobalContext } from "../../hook/GlobalHook";
export default function shoppingcart(props) {
	const [order, setOrder] = useState([])
	const GlobalHook = useContext(GlobalContext);


	useEffect(() => {

		// GlobalHook.setglobalOrder(JSON.parse(window.localStorage.getItem('order')))
		// const oldOrder = JSON.parse(window.localStorage.getItem('order'))
		console.log(' set order : ', (JSON.parse(window.localStorage.getItem('order'))));


	}, []);

	// function getData() {
	// 	const order = JSON.parse(localStorage.getItem('order'))
	// 	GlobalHook.setglobalOrder(order)
	// 	console.log('order : ', order);
	// }

	return (
		<div>
			<Head title="Shopping Cart - Project Lab" />
			Shopping Cart
			{/* {order.map((e , index)=>{
				{index+1}
				{e.productName}
				{e.fullPrice}
			})} */}<br />
			

			{/* {GlobalHook.getglobalOrder.map(e => { e })} */}
		</div>
	);
}
