import Form from './../Component/form';
import Carousel from './../Component/Carousel/Carousel'
import React from 'react';
import "./style.css"
import Main from '../Component/3main/main'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Head from '../Component/head.js';

export default function Home() {
	return (
		<div>
			<Head title="Home - Project Lab"/>
			<Form>
				<Carousel />
				<Main />
			</Form>
		</div>
	);
}