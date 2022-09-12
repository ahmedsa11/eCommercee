import React from 'react'
import Style from "../styles/firstslider.module.css"
const Search = () => {
  return (
   <>
   <form className={`${Style.subbox} text-center`}>
<i className="fas fa-search"></i>
<input  className={Style.ipt} type="email" name=""placeholder = "search our store"/>
<i className="fas fa-suitcase"></i>
</form>
   </>
  )
}

export default Search