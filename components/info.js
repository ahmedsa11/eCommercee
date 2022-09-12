import React from 'react'
import Style from '../styles/info.module.css'
const Info = () => {
  return (
<>
<div className={`container ${Style.info}`}>
<div className='row'>
  <p>
    <i className='fa fa-quote-left'></i>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
    nisi velit, eget consectetur nisl tincidunt eget. Nam euismod, nisi vel
    tincidunt eget, nisl nisl consectetur nisl, eget consectetur nisl nisl
    consectetur nisl. Nam euismod, nisi vel tincidunt eget, nisl nisl
  </p>
  <div className={Style.janki}>--JANKI</div>
  </div>
  </div>
</>
  )
}

export default Info