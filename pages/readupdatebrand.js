import React, { useRef, useState,useEffect } from "react";
import { updateBrand ,getBrand} from "../redusers/brand";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "../styles/update.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/loading";
const Read = () => {
  const route = useRouter();
  const { brands, isLoading } = useSelector((state) => state.Brand);
  console.log(brands);
  const [BrandName, setBrandName] = useState();
  console.log(BrandName) 
  // const { BrandName, BrandImage } = formValue;
  const [picture, setpicture] = useState();
  const dispatch = useDispatch();
  const editbutton = (e) => {
    const editname = document.getElementById("editname");
    const editimg = document.getElementById("editimg");
    const cancel = document.getElementById("cancel");
    const inputsetting = document.getElementsByClassName("inputsetting");
    editname.onclick = () => {
      document.getElementById("inputname").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputname").style.border = "1px solid black";
    };
    editimg.onclick = () => {
      document.getElementById("inputimg").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputname").style.border = "1px solid white";
    };
    cancel.onclick = (e) => {
      // eslint-disable-next-line
      // window.location.href = window.location.href;
      for (let i = 0; i < inputsetting.length; i++) {
        inputsetting[i].setAttribute("disabled", "disabled");
      }
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputname").value = BrandName;
      document.getElementById("brandim").src = picture;
  
    };
  };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormValue((prevState) => {
  //     return {
  //       ...prevState,
  //       [name]: value,
  //     };
  //   });
  // };

  const fileUpload = (e) => {
    const file = e.target.files[0];
    setpicture(file);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!document.getElementById("inputname").disabled) {
      const formData = new FormData();
      formData.append("name", BrandName);
      dispatch(updateBrand({ id: brands._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputname").setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("inputimg").disabled) {
      const formData = new FormData();
      formData.append(
        "image",
        picture,
        // BrandImage.current.files[0].name
      );
      dispatch(updateBrand({id:brands._id,data:formData}));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputimg").src = picture;
    }
  };
  useEffect(() => {
    setBrandName(brands.name);
    setpicture(brands.image);
  } ,[brands]);
  useEffect(() => {
    if (route.query.brand_id)
    dispatch(getBrand(route.query.brand_id));
    setBrandName(brands.name);
    setpicture(brands.image);
  }, [route.query.brand_id]);
  return (
    <>
    {isLoading ?<Loading/> : null}
      <div className="container">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          //    encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="title">Brand Name</label>
            <div className={Style.inputcout}>
              <i
                id="editname"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputname"
                type="text"
                name="BrandName"
                className="form-control inputsetting"
                require="true"
                disabled            
                onChange={(e) => setBrandName(e.target.value)}
                value={BrandName}
              />
            </div>
          </div>
          <div className="frm-group">
            <label htmlFor="images">Brand Image</label>
            <div className={Style.inputcout}>
              <i
                id="editimg"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputimg"
                type="file"
                className="form-control inputsetting"
                require="true"
                accept="image/*"
                disabled
                name="BrandImage"
                onChange={fileUpload}
                // value={brands.image}
              />
            </div>
 
            <Image id="brandim" src={brands.image} width={40} height={50} alt="sd" />
          </div>
          <div id="saveandcancel" className={Style.saveandcancel}>
            <button type="button" id="cancel" className={Style.cancel}>
              cancel
            </button>
            <button type="submit" id="save" className={Style.save}>
              save
            </button>
          </div>
        </form>
        <div className={Style.clear}></div>
      </div>
    </>
  );
};

export default Read;
