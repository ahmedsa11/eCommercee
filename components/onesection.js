import React from 'react'
import Image from 'next/image'
import a3 from '../images/a3.jpg'
const Onesection = () => {
  return (
  <>
  <div className='row text-center'>
    <div className='col-md-12'>
        <Image src={a3} className="w-100"alt="jh" />
        </div>
  </div>
  </>
  )
}

export default Onesection