import React,{useState} from 'react'
import Style from '../styles/chooseimg.module.css'
import P1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import Image from 'next/image'
const Chooseimg = () => {
    const [ProductImages, setProductImages] = useState([
        {
          img_id: 1,
          img_url: P1,
        },
        {
          img_id: 2,
          img_url: p2,
        },
        {
          img_id: 3,
          img_url: P1,
        },
      ]);
      const changeMainImage = (e) => {
        if (typeof window !== 'undefined') {
        document.querySelector(".productinfomainimagecontainer img").src =
          e.target.src;
        document
          .querySelectorAll(".productinfoalternativeimage")
          .forEach((el) => {
            el.classList.remove("active");
          });
        e.target.classList.add("active");
        }
        else{
            alert("window is undefined")
        }
      };
    
  return (
    <> 
    <div className={Style.productinfoimages}>
      <div className={Style.productinfomainimages}>
        <div className={`${Style.productinfomainimagecontainer} productinfomainimagecontainer`}>
          <Image
            className={Style.productinfomainimage}
            src={ProductImages.length > 0 ? ProductImages[0].img_url : ""}
            alt="sdf"
          />
        </div>
        <div className={Style.productinfoalternativeimagescontainer}>
          {ProductImages.map((image, i) => {
            return (
              <Image
                key={image.img_id}
                className={`${Style.productinfoalternativeimage} ${
                  i === 0 ? Style.active : ""
                } `}
                onClick={changeMainImage}
                alt="sdf"
                src={image.img_url} 
              />
            );
          })}
        </div>
        </div>
      </div>
    </>
  )
}

export default Chooseimg