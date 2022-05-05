import React from "react";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import "./index.css";
import data from "./data.js"


 import Navigation from "./Component/Navigation";


 export default function App(){

    const cards = data.map(item => {
        return(
            <Card
            key = {item.id}
            img = {item.img}
            rating = {item.rating}
            review = {item.review}
            location = {item.location}
            title = {item.title}
            price = {item.price}
            openspot = {item.openspot}
            />

        )
    })
     return(
         <div>
             <Navigation />
             <Hero />
             {cards}             
             </div>
     )
 }