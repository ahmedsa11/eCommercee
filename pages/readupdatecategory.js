import React, {useState,useEffect } from "react";
import { updateCategory ,getCategoryById} from "../redusers/categories";
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "../styles/update.module.css";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/loading";
const Readc = () => {

  const route=useRouter();
    const { Categories,isLoading } = useSelector((state) => state.categories);
    console.log(Categories);
  const [CategoryName, setCategoryName] = useState();
  const [CategoryPriority, setCategoryPriority] = useState();
  const [picture, setpicture] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (route.query.category_id)
    dispatch(getCategoryById(route.query.category_id));
    setCategoryName(Categories.name);
    setCategoryPriority(Categories.priority);
    setpicture(Categories.image);
  }, [route.query.category_id]);
  useEffect(() => {
    setCategoryName(Categories.name);
    setCategoryPriority(Categories.priority);
    setpicture(Categories.image);
  }, [Categories]);
  const editbutton = (e) => {
    const editname = document.getElementById("editnamec");
    const editimg = document.getElementById("editimgc");
    const editpirority = document.getElementById("editpirority");
    const cancel = document.getElementById("cancel");
    const inputsetting = document.getElementsByClassName("inputsetting");
    editname.onclick = () => {
      document.getElementById("inputnamec").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputnamec").style.border = "1px solid black";
    };
    editimg.onclick = () => {
      document.getElementById("inputimgc").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputimgc").style.border = "1px solid white";
    };
    editpirority.onclick = () => {
        document.getElementById("inputpirority").removeAttribute("disabled");
        document.getElementById("saveandcancel").style.display = "block";
        document.getElementById("inputpirority").style.border = "1px solid white";
    }

    cancel.onclick = (e) => {
      for (let i = 0; i < inputsetting.length; i++) {
        inputsetting[i].setAttribute("disabled", "disabled");
      }
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputnamec").value = CategoryName;
        document.getElementById("catimg").src = picture;
        document.getElementById("inputpirority").value = CategoryPriority;

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
    if (!document.getElementById("inputnamec").disabled) {
      const formData = new FormData();
      formData.append("name", CategoryName);
      dispatch(updateCategory({ id: Categories._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputnamec").setAttribute("disabled", "disabled");
    }

    if (!document.getElementById("inputimgc").disabled) {
      const formData = new FormData();
      formData.append(
        "image",
      picture,
        // BrandImage.current.files[0].name
      );
      dispatch(updateCategory({id:Categories._id,data:formData}));
      document.getElementById("saveandcancel").style.display = "none";
    }
    if (!document.getElementById("inputpirority").disabled) {
      const formData = new FormData();
      formData.append("priority", CategoryPriority);
      dispatch(updateCategory({ id: Categories._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputpirority").setAttribute("disabled", "disabled");
    }
  };

  return (
    <>
    {isLoading ? <Loading/> : null}
      <div className="container">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          //    encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="title">Category Name</label>
            <div className={Style.inputcout}>
              <i
                id="editnamec"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputnamec"
                type="text"
                name="CategoryName"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={e => setCategoryName(e.target.value)}
                value={CategoryName}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="title">Priority</label>
            <div className={Style.inputcout}>
              <i
                id="editpirority"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputpirority"
                type="text"
                name="CategoryPriority"
                className="form-control inputsetting"
                require="true"
                disabled
                onChange={e => setCategoryPriority(e.target.value)}
                value={CategoryPriority}
              />
            </div>
          </div>
          <div className="frm-group">
            <label htmlFor="images">Category Image</label>
            <div className={Style.inputcout}>
              <i
                id="editimgc"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputimgc"
                type="file"
                className="form-control inputsetting"
                require="true"
                accept="image/*"
                disabled
                name="BrandImage"
                onChange={fileUpload}
                />
            </div>
            <Image id="catimg" src={Categories.image} width={40} height={50} alt="sd" />
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

export default Readc;
