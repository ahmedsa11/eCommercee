import React from 'react'
import Style from '../styles/relatedshape.module.css'
import Image from 'next/image'
import p1 from '../images/p1.jpg'
const Relatedproshape = () => {
  return (
    <>
    <div className="container">
        <div className={`${Style.rel} text-center`}> 
    <Image src={p1} alt="jh" />
    </div>
    <h3 className='text-center'>Specialists</h3>
    <h6 className='text-center'>Rs.999</h6>
    </div>
    </>
  )
}

export default Relatedproshape