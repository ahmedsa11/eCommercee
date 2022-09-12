import React from 'react'
import Image from 'next/image'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
const Foursection = () => {
  return (
  <>
  <div className='row text-center'>
    <div className='col-md-6'>
        <Image src={p1} className="w-100"alt="jh" />
        </div>
        <div className='col-md-6'>
        <Image src={p1} className="w-100"alt="jh" />
        </div>
  </div>
  <div className='row'>
    <div className='col-md-6'>
        <Image src={p2} className="w-100"alt="jh" />
        </div>
        <div className='col-md-6'>
        <Image src={p1} className="w-100"alt="jh" />
        </div>
  </div>
  </>
  )
}

export default Foursection