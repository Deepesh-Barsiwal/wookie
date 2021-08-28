import React from 'react'
import img from '../src/images/blonde-1868701_1920.jpg';
import img1 from '../src/images/man-2425121_1920.jpg';
import img2 from '../src/images/model-2911330_1920.jpg';
import Card from './Card';
import Sale from './src/images/sale.jpg';
import './index.css';
import {NavLink} from 'react-router-dom';


const Wookie = () => {
    return (
        <>
    {/**Header**/}
    <div id="carouselExampleCaptions" className=" carousel slide d-none d-md-block" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <NavLink to ="/" className="btn btn-primary">SHOP NOW</NavLink>
        <p className="text-primary fs-2 fw-bold">Brand new stylish product on sale.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <NavLink to ="/" className="btn btn-primary">SHOP NOW</NavLink>
        <p className="text-primary fs-2 fw-bold">GO AHEAD AND BUY SOMETHING FOR LOVED ONES.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    <NavLink to ="/" className="btn btn-primary">SHOP NOW</NavLink>
        <p className="text-primary fs-2 fw-bold">EXPLORE OUR SHOP IN THIS CITIES.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/*section-1*/}
<div className="container-fluid">

<div className="row img-grid">

    <div className="col col-4 col-md-4 col-xl-4">

<div className='row'>
    <div className="col col-12 img-box">
    <span className="badge">SALES</span>
<img src={Sale} className="w-100"/>

    </div>
</div>

<div className='row'>
    <div className="col col-12 img-box">
    <span className="badge">NEW</span>
    <img src={img1} className="w-100"/>
    </div>
</div>
    </div>


    <div className="col col-4 col-md-4 col-xl-4 img-box">
    <span className="badge">MEN</span>
    <img src={img2} className="w-100 h-100"/>
</div>


 <div className="col col-4 col-md-4 col-xl-4">

 <div className='row'>
    <div className="col col-12 img-box">
    <span className="badge">WOMEN</span>
<img src={img} className="w-100"/>

    </div>
</div>

<div className='row'>
    <div className="col col-12 img-box">
    <span className="badge">SHOES</span>
    <img src={img1} className="w-100"/>
    </div>
</div>



</div>

</div>{/*row*/}

{/*section-2*/}

<div className="row">
    <div className="col col-12 d-flex flex-column align-items-center p-2">
      <h3>BEST SELLER</h3>
    <h5>TOP PRODUCTS OF THIS WEEK</h5>
    </div>
</div>

{/*section-3*/}

<div className="row">
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img =  {img} cardBtn="Add To Cart" cardTitle="Nairobi Shoes" cardText="$40.00"/>
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img1}  cardBtn="Add To Cart" cardTitle="Shvets Ts" cardText="$10.00" />
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Thesalt Set" cardText="$20.00"/>
    </div>

    
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Thesalt Set" cardText="$20.00"/>
    </div>
</div>

<div className="row">
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img =  {img} cardBtn="Add To Cart" cardTitle="Frans Van Heerden" cardText="$200.00"/>
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img1}  cardBtn="Add To Cart" cardTitle="Anthony Derosa" cardText="$300.00" />
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Torsten Derlaff" cardText="$400.00"/>
    </div>

    
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Thesalt Set" cardText="$20.00"/>
    </div>
</div>

<div className="row">
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img =  {img} cardBtn="Add To Cart" cardTitle="Nairobi Shoes" cardText="$40.00"/>
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img1}  cardBtn="Add To Cart" cardTitle="Shvets Ts" cardText="$10.00" />
    </div>

    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Thesalt Set" cardText="$20.00"/>
    </div>

    
    <div className="col col-6 col-md-6 col-xl-3 text-center">
<Card  img = {img2}    cardBtn="Add To Cart" cardTitle="Thesalt Set" cardText="$20.00"/>
    </div>
</div>

<div className="row">
    <div className="col col-12">

    </div>
</div>







</div>{/*container*/}









        </>
    )
}

export default Wookie;
