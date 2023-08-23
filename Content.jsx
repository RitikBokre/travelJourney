import React from "react"

    
export default function Cards(props){
    const {title,location,googleMapsUrl,startDate,endDate,description,imageUrl}=props;
    return(
        <div className="content-wrapper">
            <img src={`./images/${imageUrl}`} /> 
            <div className="side-text">
                <div className="locator">
                    <img src="./images/Fill219.png" width="7px" height="10px"/>
                    <h5>{location}</h5>
                    <a className="map-url" href={googleMapsUrl} >View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <h4>{startDate} - {endDate}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
