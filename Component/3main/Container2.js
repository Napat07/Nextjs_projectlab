import React from 'react';
import Main from './MainStyle.css' ;
import { Container } from 'reactstrap';
import ShopCard from '../3main/shopcard';
export default function Container1 () {
    return (
		<div className="background-color2">
		<Container>
  			<div class="container">
				<section class="mt-5 wow fadeIn">
					<div class="row">
						{/*<---------------------------------------->*/}
						<div class="col-md-6 mb-4 background-color-for-shop">
						<ShopCard/>
							
						</div>
					
						{/*<---------------------------------------->*/}
						
						<div class="col-md-6 mb-4">
							<img src="/static/shop.png" alt="shop"  className="img-radius img-fluid z-depth-1-half" />
						</div>
					</div>
			  </section>

			</div>
		</Container>
	
      <style global jsx>{
        Main
      }</style>	
		</div>
    );
}
