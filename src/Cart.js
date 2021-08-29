import React from 'react'
import Data from './Data';
import Item from './Item'
const Cart = () => {
    return (
        <>
        
          <div className="container-fluid">
          <div className="row">
          <div className="d-flex justify-content-center flex-wrap">
            {
                Data.map((curElem)=>{
                    return <Item key={curElem.id} {...curElem}/>
                    
                })
            }
          </div>
          
          </div>
          </div>
        
        </>
    )
}

export default Cart
