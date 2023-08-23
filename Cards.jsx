import React from "react"
import Content from "./Content"
import data from "./data" 
    
export default function Cards(){
    const Cont = data.map((item,idx)=>
                                <Content key={idx} {...item} /> )
    return(
        <div className="cards-wrapper">
            {Cont}
        </div>
    )
}
