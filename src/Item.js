import React from 'react'
import Data from './Data'
const Item = ({id,cardTitle,cardText,cardBtn,img}) => {
    return (
        <>

         <div className="card m-1 w-25">
  <img src ={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{cardTitle}</h5>
    <p className="card-text">{cardText}</p>
  </div>
  
  <div className="card-footer">
    
    <a href="#" className="card-link btn btn-primary">{cardBtn}</a>
  </div>

      
</div>
        </>
    )
}

export default Item
