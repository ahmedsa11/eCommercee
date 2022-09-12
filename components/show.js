import React from "react";
import Image from "next/image";
import Style from "../styles/show.module.css";
import p1 from "../images/p1.jpg";
const Show = () => {
  return (
    <>
    <div className={Style.showw}>
      <div className="row">
        <div className="col-md-4">
          <figure className={Style.swing}>
            <Image src={p1} />
          </figure>
        </div>
        <div className="col-md-4">
          <figure className={Style.swing}>
            <Image src={p1} />
          </figure>
        </div>
        <div className="col-md-4">
          <figure className={Style.swing}>
            <Image src={p1} />
          </figure>
        </div>
      </div>
      </div>
    </>
  );
};

export default Show;
