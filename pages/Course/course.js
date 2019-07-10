import Form from '../../Component/form.js'
import Head from '../../Component/head.js';
import 'bootstrap-css-only/css/bootstrap.min.css';
import {Jumbotron, Button,Container,CardImg} from 'reactstrap';
import './CourseStyle.css';
export default function Course () {
  return (
    <div>
      <Head title="Education - Project Lab" />
      <Form >
        <Container>
          <div className="jumbotron jumbotron-img" style={{marginTop:"20px"}}>
            <div class="container h-100">
             <div class="row h-100 align-items-center">
              <div class="col-12 text-center">
                <a href="./SignupCourse" class="btn btn-primary js-scroll-trigger">Read More</a>
              </div>
            </div>
          </div>
        </div>
        </Container>
        

        <div className="container ">
          <div className="row ">
            <div className="col-sm-4 text-center border border-primary rounded ">
              <h3 >Course One</h3>
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/MB3.png"/>
              <p>Lorem ipsum dolor                       dsadsadsLorem ipsum dolor dsaLorem ipsum dolor dsaLorem ipsum dolor dsaLorem ipsum dolor dsaLorem ipsum dolor dsa..</p>
              <Button>Read More...</Button>
            </div>
            <div className="col-sm-4 text-center border border-primary rounded">
              <h3 >Course Two</h3>
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/img001.png"/>
              <div  className="align-self-end" >
              <p>Lorem ipsum dolor..</p>
              <Button>Read More...</Button>
              </div>
              
              
            </div>
            <div className="col-sm-4 text-center border border-primary rounded">
              <h3 >Course There</h3> 
              <CardImg src="http://projectlab.co.th/static/frontend/school/img/course.jpg"/>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
      </Form>

    </div>
      );
    
  }