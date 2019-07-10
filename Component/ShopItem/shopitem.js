import React from 'react';
import {Button} from 'reactstrap';
export default function ShopItem(props) {
	const {productImage,productName,fullPrice} = props.Product
      return (
        <div>
            <div className="container">
				<div className="row">
					<div className="col-md-8 ">
					<br/>
						<img className="img-fluid" src={productImage} alt=""/>
    				</div>
					<div className="col-md-4">
     					<h3 className="my-3">{productName}</h3>
      					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nam viverra euismod odio, gravida pellentesque urna varius vitae. 
							Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. 
							Mauris ultricies, justo eu convallis placerat, felis enim.
							</p>
      					<h3 className="my-3">Project Details</h3>
      					<ul>
        					<li>Lorem Ipsum</li>
        					<li>Dolor Sit Amet</li>
        					<li>Consectetur</li>
        					<li>Adipiscing Elit</li>
      					</ul>
						  <h1>{fullPrice}</h1>
						<Button size="lg" color="primary" >Buy</Button>
    				</div>
				</div>
		
				<h3 className="my-4">Related Projects</h3>
				<div className="row">
					<div className="col-md-3 col-sm-6 mb-4">
						<a href="#">
            				<img className="img-fluid" src="https://cdn.sparkfun.com//assets/parts/1/1/1/2/6/13676-01.jpg" alt=""/>
          				</a>
					</div>
					<div className="col-md-3 col-sm-6 mb-4">
      					<a href="#">
            				<img className="img-fluid" src="https://cdn.sparkfun.com//assets/parts/1/1/1/2/6/13676-02.jpg" alt=""/>
          				</a>
    				</div>
					<div className="col-md-3 col-sm-6 mb-4">
      					<a href="#">
            				<img className="img-fluid" src="https://cdn.sparkfun.com//assets/parts/1/1/1/2/6/13676-03.jpg" alt=""/>
          				</a>
    				</div>
					<div className="col-md-3 col-sm-6 mb-4">
      					<a href="#">
            				<img className="img-fluid" src="https://cdn.sparkfun.com//assets/parts/1/1/1/2/6/13676-QuarterB.jpg" alt=""/>
          				</a>
    				</div>
					
				</div>
			</div>
        </div>
      );
    
  }
