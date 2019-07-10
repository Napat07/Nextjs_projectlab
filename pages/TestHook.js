import React, { useContext,useState,useEffect } from 'react'
import { GlobalContext } from '../hook/GlobalHook.js'
import Form from "../Component/form"
import H from '../Component/testhook'
function TestHook (){
    return(
        <Form>
            <h1>Test Hook Global</h1>
            <H></H>
            <p></p>
        </Form>



    )
};
export default TestHook