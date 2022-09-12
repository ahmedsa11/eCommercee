import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
// import WOW from '../node_modules/wow.js/dist/wow'
import Style from "../styles/firstslider.module.css";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s5 from "../images/s5.webp";
const Slidershow = () => {
  const router = useRouter();
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wow.js") : null;
  useEffect(() => {
    new WOW().init();

  }, []);
  const shopNow = () => {
    router.push("/shop");
  }
  return (
    <>
      <div className={Style.landing}>
        <div className={Style.overlay}></div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators z">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className={`${Style.ba} carousel-inner`}>
            <div className="carousel-item active">
              <Image
                src={s1}
                className={`${Style.imgg} d-block w-100`}
                alt="..."
              />
              <div className={Style.carousel}>
                <h1 className="wow animate__fadeInUp" data-wow-duration="2s">
                  SPECIALISTS
                </h1>
                <p className="wow animate__fadeInUp" data-wow-duration="2.5s">
                  Sign in for the best experience
                </p>
                <p
                  className="wow animate__fadeInUp lii"
                  data-wow-duration="2.8s"
                >
                  Online or Over the Phone
                </p>
                <button onClick={shopNow}>Shope Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={s2}
                className={`${Style.imgg} d-block w-100`}
                alt="..."
              />
              <div className={Style.carousel}>
                <h1 className="wow animate__fadeInUp" data-wow-duration="2s">
                  SPECIALISTS
                </h1>
                <p className="wow animate__fadeInUp" data-wow-duration="2.5s">
                  Sign in for the best experience
                </p>
                <p
                  className="wow animate__fadeInUp lii"
                  data-wow-duration="2.8s"
                >
                  Online or Over the Phone
                </p>
                <button onClick={shopNow}>Shope Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={s3}
                className={`${Style.imgg} d-block w-100`}
                alt="..."
              /> 
              <div className={Style.carousel}>
                <h1 className="wow animate__fadeInUp" data-wow-duration="2s">
                  SPECIALISTS
                </h1>
                <p className="wow animate__fadeInUp" data-wow-duration="2.5s">
                  Sign in for the best experience
                </p>
                <p
                  className="wow animate__fadeInUp lii"
                  data-wow-duration="2.8s"
                >
                  Online or Over the Phone
                </p>
                <button onClick={shopNow}>Shope Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={s5}
                className={`${Style.imgg} d-block w-100`}
                alt="..."
              />
              <div className={Style.carousel}>
                <h1 className="wow animate__fadeInUp" data-wow-duration="2s">
                  SPECIALISTS
                </h1>
                <p className="wow animate__fadeInUp" data-wow-duration="2.5s">
                  Sign in for the best experience
                </p>
                <p
                  className="wow animate__fadeInUp lii"
                  data-wow-duration="2.8s"
                >
                  Online or Over the Phone
                </p>
                <button onClick={shopNow}>Shope Now</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slidershow;
