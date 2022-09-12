import React from 'react'
import Style from '../styles/relatedproducts.module.css'
import Relatedproshape from './relatedproshape'
import Swiperr from './swiper'
const Relatedproducts = () => {
    const user=[ 
        {id:1,name:'John',age:30}, 
        {id:2,name:'Sara',age:25},
        {id:3,name:'Bill',age:35},
        {id:4,name:'Bill',age:35},
        {id:5,name:'Bill',age:35},
        {id:6,name:'Bill',age:35},
        {id:7,name:'Bill',age:35},
      ]
  return (
    <div className="container">
 <div className={Style.relatedproducts}>
   
    <h1>Related Products</h1>
    <Swiperr user={user}pagination={true}slidesPerView={4}spaceBetween={30}>
        <Relatedproshape/>
      </Swiperr>
    </div>
 </div>
  )
}

export default Relatedproducts