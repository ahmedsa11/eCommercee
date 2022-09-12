import React from 'react'
import Image from 'next/image'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
const Twosection = () => {
  return (
  <>
  <div className='row text-center'>
    <div className='col-md-6'>
        <Image src={a1} className="w-100"alt="jh" />
        </div>
        <div className='col-md-6'>
        <Image src={a2} className="w-100"alt="jh" />
        </div>
  </div>
  </>
  )
}

export default Twosection