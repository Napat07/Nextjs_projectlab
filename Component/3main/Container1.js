import React from 'react';
import Main from './MainStyle.css' ;
import { Container,Row,Col,FormGroup,NavbarBrand} from 'reactstrap';

export default function Container1 () {
    return (
		<div class="background-color1" >
		<Container >
  			<div class="container ">
				<section class="mt-5 wow fadeIn">
					
					<div class="row">
						<div class="col-md-6 mb-4">
							
							<img src="/static/math-phy1.jpg" alt="math-phy1" className="img-radius img-fluid  hoverable z-depth-1 " />
						</div>

						<div class="col-md-6   mb-4  background-color-for-course ">
						<h1 className="text-center" style={{marginTop: 10 }} >course</h1>
        					<Row>
          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="/course">
											<img src="/static/math1.PNG" alt="math1"  className="img-radius img-fluid hoverable z-depth-1"  />
										</NavbarBrand>
									</FormGroup>
          						</Col>

          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="/course">
											<img src="/static/phy3.PNG" alt="phy3"  className="img-radius img-fluid  hoverable z-depth-1"  />
										</NavbarBrand>
            						</FormGroup>
          						</Col>

       	 					</Row>							
								<Row>
          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="/course">
											<img src="/static/math2.PNG" alt="math2" className="img-radius img-fluid  hoverable z-depth-1" />
										</NavbarBrand>
									</FormGroup>
          						</Col>

          						<Col mb="6">
            						<FormGroup>
										<NavbarBrand href="/course">
											<img src="/static/phy2.PNG" alt="phy2" className="img-radius img-fluid hoverable z-depth-1 " />
            							</NavbarBrand>
									</FormGroup>
          						</Col>
       	 					</Row>
								

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
