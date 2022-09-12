import React, { useRef, useState,useEffect } from "react";
import {updateAdmin,getAdminbyid} from '../redusers/admins';
import Image from "next/image";
import { useRouter } from "next/router";
import Style from "../styles/update.module.css";
import Stylee from '../styles/settings.module.css'
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/loading";
const ReadAd = () => {
  const route = useRouter();
  const { isLoading, admins } = useSelector((state) => state.admins);
  console.log(admins);
  const [admindata, setAdmindata] = useState();
  // useEffect(() => {
  //   if(admins){
  //     setAdmindata(admins.data);
      
  //     console.log(admindata.name);
  //   }
  // }, [admins]);

  const adminName = useRef();
  const adminEmail = useRef();
  const adminOldPassword = useRef();
  const adminNewPassword = useRef();
  const adminNewConfirmPassword = useRef();
  const adminRole = useRef();
  const [message, setMessage] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    adminName.current.value = admins.name;
    adminEmail.current.value = admins.email;
    adminRole.current.value = admins.role;
  }, [admins]);
 
  const validation = () => {
    const message = {};
    if (adminName.current.value === "") {
        message.adminName = "Name is required";
    }
    if (adminEmail.current.value === "") {
        message.adminEmail = "Email is required";
    }
    if (adminOldPassword.current.value === "") {
        message.adminOldPassword = "Old Password is required";
    }
    if (adminNewPassword.current.value === "") {
        message.adminNewPassword = "New Password is required";
    }
    if (adminNewConfirmPassword.current.value === "") {
        message.adminNewConfirmPassword = "Confirm Password is required";
    }
    if (adminNewPassword.current.value !== adminNewConfirmPassword.current.value) {
        message.adminNewConfirmPassword =

            "New Password and Confirm Password must be same";
    }
    if (adminRole.current.value === "") {
        message.adminRole = "Role is required";
    }
    setMessage(message);
    return Object.keys(message).length === 0 ? null : message;
}
  const editbutton = (e) => {

    const editname = document.getElementById("editname");
    const editadminEmail = document.getElementById("editadminEmail");
    const editpass = document.getElementById('editpass');

    const cancel = document.getElementById("cancel");
    const inputsetting = document.getElementsByClassName("inputsetting");
    editname.onclick = () => {
      document.getElementById("inputname").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("inputname").style.border = "1px solid black";
    };
    editpass.onclick = () => {
        document.getElementById('oldpass').removeAttribute('disabled');
        document.getElementById('hidepass').style.display = 'block';
        document.getElementById('saveandcancel').style.display = 'block';
  
        document.getElementById('oldpass').textContent = 'Enter Old Password';
      
      };
      editadminEmail.onclick = () => {
      document.getElementById("adminEmail").removeAttribute("disabled");
      document.getElementById("saveandcancel").style.display = "block";
      document.getElementById("adminEmail").style.border = "1px solid white";
    };
    cancel.onclick = (e) => {
      for (let i = 0; i < inputsetting.length; i++) {
        inputsetting[i].setAttribute("disabled", "disabled");
      }
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputname").value = adminName.current.value;
  
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validation();
    if (message) return
    if (!document.getElementById("inputname").disabled) {
      const formData = new FormData();
      formData.append("name", adminName.current.value);
      dispatch(updateBrand({ id: brands._id, data: formData }));
      document.getElementById("saveandcancel").style.display = "none";
      document.getElementById("inputname").setAttribute("disabled", "disabled");
    }
    if (!document.getElementById("adminEmail").disabled) {
      const formData = new FormData();
      formData.append(
        "email",
    adminEmail.current.value
      );
      dispatch(updateBrand({id:brands._id,data:formData}));
      document.getElementById("saveandcancel").style.display = "none";
    }
    if (!document.getElementById('oldpass').disabled) {
        const formData = new FormData();
        formData.append("oldPassword", adminOldPassword.current.value);
        formData.append("newPassword", adminNewPassword.current.value);
        formData.append("newConfirmPassword", adminNewConfirmPassword.current.value);
        dispatch(updateAdmin({id:admins._id,data:formData}));
        document.getElementById('saveandcancel').style.display = 'none';
        document.getElementById('oldpass').setAttribute('disabled', 'disabled');
        document.getElementById('hidepass').style.display = 'none';
        }
  };
  useEffect(() => {
    if (route.query.admin_id)
    dispatch(getAdminbyid(route.query.admin_id));
  }, [route.query.admin_id]);
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
            <label htmlFor="adminName">Admin Name</label>
            <div className={Style.inputcout}>
              <i
                id="editname"
                className={`fas fa-pen ${Style.editbutton}`}
                onClick={editbutton}
              ></i>
              <input
                id="inputname"
                type="text"
                name="adminName"
                className="form-control inputsetting"
                disabled            
                ref={adminName}
              />
            </div>
            <p className="error">{message&&message.adminName}</p>
          </div>
            <div className="form-group">
            <label htmlFor="adminEmail">Admin Email</label>
            <div className={Style.inputcout}>
                <i
                    id="editadminEmail"
                    className={`fas fa-pen ${Style.editbutton}`}
                    onClick={editbutton}
                ></i>
                <input
                    id="adminEmail"
                    type="email" 
                    name="adminEmail"
                    className="form-control inputsetting"
                    disabled
                    ref={adminEmail}
                />
            </div>
            <p className="error">{message&&message.adminEmail}</p>
        </div>
        <div className="form-group">
            <label htmlFor="adminOldPassword">Old Password</label>
            <div className={Style.inputcout}>
                <i
                    id="editpass"
                    className={`fas fa-pen ${Style.editbutton}`}
                    onClick={editbutton}
                ></i>
                <input
                    id="oldpass"  
                    type="password"
                    name="adminOldPassword"
                    className="form-control inputsetting"
                    disabled
                    ref={adminOldPassword}
                />
            </div>
            <p className="error">{message&&message.adminOldPassword}</p>
        </div>
        <div id="hidepass" className={Stylee.hidepass}>
            <div className="form-group">
                      <label htmlFor="username" className="form-label">
                        Enter New Password
                      </label>
                      <div className={Stylee.inputcout}>
                        <input
                          className="inputsetting"
                          type="password"
                          ref={adminNewPassword}
                          name="newPassword"
                        />
                      </div>
                        <p className="error">{message&&message.adminNewPassword}</p>
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="form-label">
                        Confirm New Password
                      </label>
                      <div className={Stylee.inputcout}>
                        <input
                          className="inputsetting"
                          type="password"
                         ref={adminNewConfirmPassword}
                          name="confirmNewPassword"
                        />
                      </div>
                        <p className="error">{message&&message.adminNewConfirmPassword}</p>

                    </div>
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

export default ReadAd;
