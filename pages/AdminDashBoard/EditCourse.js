import react,{Component,useState} from 'react';
export default function EditCourse (props){
    return(
        <div>
            {console.log("Name:"+props.url.query.name+"Id:"+props.url.query._id)}
            Edit Course Page
            <p>Name:{props.url.query.name}</p>
            <p>ID:{props.url.query._id}</p>
        </div>
    )
}