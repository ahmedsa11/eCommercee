import React from 'react'
import Style from '../../styles/laydashboard.module.css'
const layout = ({children}) => {
  return (
<>
<div className={Style.content}>
    <h2 className='text-center'>Dashboard</h2>
    <hr/>
    <br/>
    {children}
</div>
</>
  )
}

export default layout