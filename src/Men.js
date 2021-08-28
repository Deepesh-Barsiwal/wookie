import React,{useState} from 'react'
import Card from './Card';
import Sale from '../src/images/sale.jpg';
import New from '../src/images/new.jpg';
import img1 from '../src/images/man-2425121_1920.jpg';
import Mens from '../src/images/men.jpg'
import Women from '../src/images/women.jpg'
import Shoes from '../src/images/shoes.jpg'
import './index.css'
const Men = () => {
    const [Count, setCount] = useState(6)
    return (
        <>
     <div className="container-fluid">
           <div className="row">
           <div className="col col-12 text-center p-2">
<h3>BEST FOR MEN CATEGORIES</h3>
<h6>TOP PRODUCTS OF THIS WEEK</h6>
           </div>
           </div>
           <h1 className="text-primary d-none d-md-block">MEN({Count})</h1>
           {/*card*/}
           <div className="row">
           <div className="col col-12 col-sm-6 col-md-6 col-xl-3 ">
           <Card Count ={Count} img = {Sale} cardTitle="Torsten Derlaff" cardText="$20.00" cardBtn="ADD TO CART"/>
           </div>
            <div className="col col-12 col-sm-6 col-md-6 col-xl-3">
           <Card img = {img1} cardTitle="Morta Derlaff" cardText="$300.00" cardBtn="ADD TO CART"/>
           </div>
            <div className="col col-12 col-sm-6 col-md-6 col-xl-3">
           <Card img = {Women} cardTitle="Justin go" cardText="$200.00" cardBtn="ADD TO CART"/>
           </div>
            <div className="col col-12 col-sm-6 col-md-6 col-xl-3">
           <Card img = {Shoes} cardTitle="Elite centa" cardText="$300.00" cardBtn="ADD TO CART"/>
           </div>
             <div className="col col-12 col-sm-6 col-md-6 col-xl-3">
           <Card img = {Women} cardTitle="Tohito nama" cardText="$600.00" cardBtn="ADD TO CART"/>
           </div>
             <div className="col col-12 col-sm-6 col-md-6 col-xl-3">
           <Card img = {Sale} cardTitle="Haga Jon" cardText="$100.00" cardBtn="ADD TO CART"/>
           </div>
           </div>
     </div>{/*container*/}
        </>
    )
}

export default Men
