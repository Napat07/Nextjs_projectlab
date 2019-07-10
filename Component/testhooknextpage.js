import React,{useContext} from 'react'
import { GlobalContext } from '../hook/GlobalHook.js'

export default function testhooknextpage(props) {
    const GlobalHook = useContext(GlobalContext)
    return (
        <div>
            
            <h2>Name    :   {GlobalHook.getproductName}</h2>
            <h3>Count   :   {GlobalHook.getcount}</h3>
        </div>
    );
}
