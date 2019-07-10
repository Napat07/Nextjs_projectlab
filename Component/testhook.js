import React,{useContext} from 'react'
import { GlobalContext } from '../hook/GlobalHook.js'
import Router from 'next/router';
export default function testhook() {
    const GlobalHook = useContext(GlobalContext)

    function Clickme() {
        GlobalHook.setcount(GlobalHook.getcount+1)
    }
    function Changme(value){
        GlobalHook.setproductName(value)
    }
    function Resetall(){
        GlobalHook.setcount(0)
        GlobalHook.setproductName("")
}
    

    return (
        <div>
            <h2>Count: {GlobalHook.getcount}</h2>
            <button onClick={Clickme}>Clike Me..</button>
            <br/><br/>

            <h2>Name: {GlobalHook.getproductName}</h2>
            <br/>
            <input onChange={(event) =>Changme(event.target.value)}></input>
            <br/><br/>
            <button onClick={Resetall}>ResetAll</button>
        </div>
    )
}
