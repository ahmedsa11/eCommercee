import React from 'react'
import Image from 'next/image'
import p2 from '../images/s1.jpg'
import Style from '../styles/shapethree.module.css'
const Shapethree = () => {
  return (
    <div className={`${Style.shapethree} container`}>
      <h1 className="text-center">From Blogs</h1>
      <div className={Style.imge}>
      <Image src={p2} alt="jh" />
      <div className={Style.calender}> 18 JUN</div>
      </div>
      <div className={Style.text}>
        <h1>Why Earring</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
    nisi velit, eget consectetur nisl tincidunt eget. Nam euismod, nisi vel</p>
      </div>
  </div>
  )
}

export default Shapethree