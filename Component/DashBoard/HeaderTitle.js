import React from 'react'

export default function HeaderTitle(props) {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:"#69cde5",height:"85px"}}>
                <h2 style={{color:"white"}}>{props.Name}</h2>
            </div>
        </div> 
        // backgroundColor:"powderblue"
    )
}
