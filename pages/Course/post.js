import React,{useState,useContext,useEffect} from 'react';
import Formm from '../../Component/form'
import Head from '../../Component/head.js';
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';

export default function Post (props){

    const {_id,name} = props.url.query

    return(
        <div>
             
            Post Course Page
            <p>Name:{name}</p>
            <p>ID:{_id}</p>

        </div>
    )

}