import React from 'react';
import './index.css';
import icon from './location.png'
// import Data from './Data';

export default Cards 
function Cards(props) {
    return (
        <div>
            <div className='card-content'>
                <div className='card-image'>
                    <img className='card-banner' src= {props.imageUrl} alt="Card"/>
                </div>
                <div className='card-stats'>
                    <div className='location-stats'>
                        <img src= {icon} alt="Location Icon"/>
                        <span>{props.location}&nbsp;&nbsp; <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    </div>

                    <h1>{props.title}</h1>
                    <strong>{props.startDate} - {props.endDate}</strong>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr/>
        </div>
        
    )
}