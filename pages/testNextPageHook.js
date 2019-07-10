import React,{useContext} from 'react'
import { GlobalContext } from '../hook/GlobalHook.js'
import Form from "../Component/form"
import Nextpage from '../Component/testhooknextpage'
export default function NextPage() { 
    const GlobalHook = useContext(GlobalContext)
    return (
        <Form>
            <h1>Test Next Page Hook</h1>
            <Nextpage/>

        </Form>
    )
}
