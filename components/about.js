import React from 'react'
import Style from '../styles/about.module.css'
const About = () => {
  return (
<>
<div className={`container ${Style.about}`}>
<div className='row'>
  <h1 className='text-center'>About Us</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
    nisi velit, eget consectetur nisl tincidunt eget. Nam euismod, nisi vel
    tincidunt eget, nisl nisl consectetur nisl, eget consectetur nisl nisl
    consectetur nisl. Nam euismod, nisi vel tincidunt eget, nisl nisl
  </p>
</div>
<div className='row'>
  <div className='col-md-12 text-center'>
    <i className='fa fa-arrows'></i>
    <i className='fa fa-leaf'></i>
    <i className="fas fa-hand-holding-heart"></i>
    <i className='fa fa-car'></i>

    </div>
</div>
</div>
</>
  )
}

export default About