import React from "react";

import "./Card.css"


export default function card(props){
    let badgeText;
    if(props.openspot=== 0){
        badgeText ="SOLG OUT";
    }else if(props.location == "Online"){
        badgeText = "ONLINE";
    }
    
    console.log(props)
    return(

        <div className="container">

        <div className="card-container">
            { badgeText && <div className="badge">{badgeText}</div>}
            <div>
            <img src={props.img}alt="" className="card-img"/>
            </div>
            <div className="card-stat">
                <img src={props.img} alt="" className="card-star"/>
                <span>{props.rating}</span>
                <span>{props.review}</span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>from <span className="price">${props.price}</span></b></p>

            </div>
        </div>
    )
}