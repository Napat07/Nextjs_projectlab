import React from 'react';
import { Container, Row, Col,NavbarBrand} from 'reactstrap';
import './footerStyle.css';
import { MdPhone,MdPlace,MdMail } from "react-icons/md";
import { FaFacebookSquare,FaYoutube } from "react-icons/fa";
import Link from 'next/link';
function Footer () {
    return (
        <div className="justify-content-center align-self-end">
                <br/>
                <br/>
            <footer  className="Footer-BackGround-Color">
            <Container >
                <Row >
                    <Col md="3">
                        <NavbarBrand href="/">
                            <img src="/static/pjl-logo.png" className="d-block w-100" alt="..."/>
                        </NavbarBrand>
                    </Col>
                    <Col lg="6" style={{marginTop:10}} >
                        <Row  >
                            <Col sm="4" >
                                <div >
                                    <MdPhone size={47} style={{color: '#4C99BC'}} />
                                    <a>062-594-6255</a>
                                </div>
                                
                            </Col>
                            <Col>
                                <div>
                                    <MdMail size={47} style={{color: '#4C99BC'}} />
                                    <a>info@projectlab.co.th</a>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <MdPlace size={47} style={{color: '#4C99BC'}}/>
                                    <a>ซอย พัฒนาการ 51 แขวง สวนหลวง เขต สวนหลวง กรุงเทพมหานคร 10250</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <div className="d-flex align-items-center " >
                    <Col sm={{  offset: 5 }} >
                        <Link href="https://www.facebook.com/projectlabthailand/" >
                            <a>
                                <FaFacebookSquare size={45} style={{color: '#4C99BC'}}  />
                            </a>
                        </Link>
                    </Col>
                    <Col >
                        <Link href="https://www.youtube.com/channel/UCetUZsmMdY7beu4h7qGPdJA" >
                            <a>
                                <FaYoutube size={55} style={{color: '#4C99BC'}} />
                            </a>    
                        </Link>
                    </Col>
                    </div>
                </Row>
            </Container>
            </footer>

            
        </div>
      );
    }
  
  export default Footer;