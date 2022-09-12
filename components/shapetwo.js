import React from 'react'
import Image from 'next/image'
import p2 from '../images/p2.jpg'
import Style from '../styles/shapetwo.module.css'
const Shapetwo = () => {
  return (
    <>
    <div className={`${Style.shapetwo} container`}>
      <div className='row'>
        <div className='col-md-2'>
          <div className={Style.im}>
        <Image src={p2} alt="jh" />
        </div>
        </div>
        <div className='col-md-10'>
        <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
    nisi velit, eget consectetur nisl tincidunt eget. Nam euismod, nisi vel
  </p>
  <div className={Style.janki}>--JANKI</div>
        </div>
      </div>
  </div>
  </>
  )
}

export default Shapetwo