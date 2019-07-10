import react,{Component,useState} from 'react';
export default function EditShop (props){
    return(
        <div>
            {console.log(props.url.query)}
            Edit Shop Page
            <p>Name:{props.url.query.name}</p>
            <p>ID:{props.url.query._id}</p>
            <p>Edit Name Here..</p>
            <input ></input>
        </div>
    )
}