import React from 'react'
import Style from '../styles/detailscat.module.css'
const Detailscat = () => {
  return (
<>
<div className={Style.details}>
    <div className="container">
        <form>
            <select>
                <option value="">Sort By</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
            </select>
            <label>Color :</label>
            <div className={Style.color}>
            <label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Gold</span>
</label>
<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Rose</span>
</label>

<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Silver</span>
</label>
<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Gold</span>
</label>
<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Rose</span>
</label>

<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>Silver</span>
</label>
            </div>
            <label>Size(US) :</label>
            <div className={Style.size}>
            <label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>1</span>
</label>
<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>2</span>
</label>
<label className={Style.lab}>
  <input type="checkbox"/>
  <span className={Style.checkmark}>3</span>
</label>
            </div>
        </form>
    </div>
</div>
</>
  )
}

export default Detailscat