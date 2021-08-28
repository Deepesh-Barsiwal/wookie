import React from 'react'
import img from '../src/images/blonde-1868701_1920.jpg';
import img1 from '../src/images/man-2425121_1920.jpg';
import img2 from '../src/images/model-2911330_1920.jpg';

import './index.css'
const Card = (props) => {
  
    return (
        <>
        <h2></h2>
           <div className="card m-1">
  <img src ={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.cardTitle}</h5>
    <p className="card-text">{props.cardText}</p>
  </div>
  
  <div className="card-footer">
    
    <a href="#" className="card-link btn btn-primary">{props.cardBtn}</a>
  </div>
</div> 
        </>
    )
}

export default Card
