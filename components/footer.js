import React from "react";
import Style from "../styles/footer.module.css";
import Image from "next/image";
import Logo from "../images/logo.png";
const Footer = () => {
  return (
    <>
      <div className={Style.footer}>
        <div className={Style.hash}># Lovely Janki</div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footinfo">
                <Image src={Logo} alt="sd" />
                <p>
                  Janki is a web developer and a web designer. She is a
                  passionate person who loves to create. ......
                </p>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ${Style.inptfoot}`}
                      id="name"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className={Style.btnfoot}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3">
              <h2>Links</h2>
              <ul>
                <li>
                  <a href="index.html">
                    <i className="fas fa-chevron-right"></i>Products
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fas fa-chevron-right"></i>About Us
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fas fa-chevron-right"></i>Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fas fa-chevron-right"></i>Terms & Condtion
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2>Contact Us</h2>
              <ul>
                <li>H903,Titanium City Center ahmedabed-380015</li>
                <li>
                  <a href="category.html">
                    <i className="fas fa-phone"></i>+91-9888888888
                  </a>
                </li>
                <li>
                  <a href="category.html">
                    <i className="fab fa-whatsapp"></i>+91-9888888888
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-md-3 ${Style.follow}`}>
              <h2>follow us</h2>
              <a>
                <i className="fab fa-facebook"></i>
              </a>
              <a>
                <i className="fab fa-twitter"></i>
              </a>
              <a>
                <i className="fab fa-whatsapp"></i>
              </a>
              <a>
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={Style.copy}>
          <h6 className="text-center">&copy; Janki 2022</h6>
          <div className={Style.pay}>
            <a>
              <i className="fab fa-cc-paypal"></i>
            </a>
            <a>
              <i className="fab fa-cc-visa"></i>
            </a>
            <a>
              <i className="fab fa-cc-mastercard"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
