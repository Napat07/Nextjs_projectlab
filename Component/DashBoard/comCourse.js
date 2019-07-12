import react,{useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import {Button,ButtonGroup,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap' ;


export default function CompCourse (props) {
    const {courseImage,courseName,_id} = props.movie
    
    function changeMessage(){
        Router.push({
            pathname: '/Course/post',
            query: {    _id:_id,
                        name:courseName
                    },
          }) 
    }   

        const[modal,setmodal] =useState(false)

        function toggleConfirmDelete() {
            setmodal(!modal)
          }
        async function Delete(){
            console.log("ID:"+_id)  
            await axios
            .post("/api/Course/del", {_id})
            .then(res => {
            console.log(res)
            })
            .catch(err => {
            console.log(err);
            })
            setmodal(!modal)
            location.reload(true);
        }
        
        function Edit(){
            Router.push({
                pathname: '/AdminDashBoard/EditCourse',
                query: {    name:courseName,
                            _id:_id

                        }
              }) 
        }

        return(
            
            <div class="col-lg-3 col-md-5 mb-3" key={courseName}>
                <div class="card h-80">
                    <Link >
                        <a>
                            <img onClick={changeMessage} class="card-img-top img-for-shopcard" src={courseImage} alt=""/>
                        </a>
                    </Link>
                    <div class="card-footer">
                        <h4 class="card-title" >
                                <a onClick={changeMessage}>
                                {courseName}
                                </a>
                        </h4>

                        <ButtonGroup size="xl">
                            <Button onClick={Edit} color="primary">Edit</Button> 
                            <Button onClick={toggleConfirmDelete} size="sm" color="danger">Delete</Button>
                            <Modal isOpen={modal} toggle={toggleConfirmDelete}>
                            <ModalHeader toggle={toggleConfirmDelete}>ยืนยันที่จะลบ?</ModalHeader>
                            <ModalBody>
                                ต้องการที่จะลบ {courseName} 
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={Delete}>Delete</Button>
                                <Button color="secondary" onClick={toggleConfirmDelete}>Cancel</Button>
                            </ModalFooter>
                            </Modal>
                        </ButtonGroup>

                    </div>
                </div>
            </div>
        );
}

//<h5>{fullPrice}</h5>