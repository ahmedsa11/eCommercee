import React from 'react'
import Style from '../styles/contact.module.css'
const Contact = () => {
  return (
<>
<div className="container">
  <br/>
<div className="row">
<div className="col-md-6">
  <div className={Style.details}>
    <h6>CONTACT DETAILS</h6>
    <i className="fas fa-phone">&nbsp;<span> &nbsp; +91-9888888888</span></i>
    <i className="fab fa-whatsapp">&nbsp;<span> &nbsp; +91-9888888888</span></i>
    <i className="fas fa-envelope">&nbsp;<span>  &nbsp;karansxa@gmail.com</span></i>
    </div>
  </div>
  <div className="col-md-6">
    <div className={Style.inpst}>
    <h6>HAVE QUESTIONS? GET IN TOUCH!</h6>
    <form>
      <div className={Style.firstg}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className={`form-control ${Style.w}`} id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Last Name</label>
        <input type="text" className={`form-control ${Style.w}`} id="lastname" />
      </div>
      </div>
      <div className={Style.secondg}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className={`form-control ${Style.w}`} id="email" />
      </div>
        <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" className={`form-control ${Style.w}`} id="phone" />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select className={`form-control ${Style.s}`} id="subject">
          <option>Select Subject</option>
          <option>1</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
        className= {`form-control ${Style.m}`} 
          id="message"
          rows="3"  
        ></textarea>
      </div>
        </form>
        <button type="submit" className="btnconts">
          GET IN TOUCH
        </button>
    </div>
    </div>
</div>
</div>
</>
  )
}

export default Contact