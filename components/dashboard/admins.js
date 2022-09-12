import React, { useState, useRef, useEffect } from "react";
import Style from "../../styles/laydashboard.module.css";
import Stylee from "../../styles/contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
  insertAdmin,
  getAdminbyid,
  getAdmins,
  deleteAdmin,
} from "../../redusers/admins";
import { useRouter } from "next/dist/client/router";
import Loading from "../loading";

const Admins = () => {
  const { isLoading, admins } = useSelector((state) => state.admins);
  console.log(admins);
  const dispatch = useDispatch();
  const router = useRouter();
  const adminName = useRef();
  const adminEmail = useRef();
  const adminPassword = useRef();
  const adminConfirmPassword = useRef();
  const adminPhone = useRef();
  const adminRole = useRef();
  const adminActive = useRef();
  const [message, setMessage] = useState({});
  useEffect(() => {
    dispatch(getAdmins());
  }, [dispatch, admins.length]);

  const validation = () => {
    const message = {};
    if (adminName.current.value === "") {
      message.adminName = "Name is required";
    }
    if (adminEmail.current.value === "") {
      message.adminEmail = "Email is required";
    }
    if (adminPassword.current.value === "") {
      message.adminPassword = "Password is required";
    }
    if (adminConfirmPassword.current.value === "") {
      message.adminConfirmPassword = "Confirm Password is required";
    }
    if (adminPassword.current.value !== adminConfirmPassword.current.value) {
      message.adminConfirmPassword =
        "Password and Confirm Password must be same";
    }
    if (adminPhone.current.value === "") {
      message.adminPhone = "Phone is required";
    }
    if (adminRole.current.value === "") {
      message.adminRole = "Role is required";
    }
    setMessage(message);
    return Object.keys(message).length === 0 ? null : message;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation();
    if (error) return;
    const formData = new FormData();
    formData.append("name", adminName.current.value);
    formData.append("email", adminEmail.current.value);
    formData.append("password", adminPassword.current.value);
    formData.append("phone", adminPhone.current.value);
    formData.append("role", adminRole.current.value);
    formData.append("passwordConfirm", adminConfirmPassword.current.value);
    dispatch(insertAdmin(formData));
    adminName.current.value = "";
    adminEmail.current.value = "";
    adminPassword.current.value = "";
    adminConfirmPassword.current.value = "";
    adminPhone.current.value = "";
    adminRole.current.value = "";
  };
  const getadminid = (admin) => {
    dispatch(getAdminbyid(admin._id));
    router.push({
      pathname: "readupdateadmin",
      query: { admin_id: admin ? admin._id : "" },
    });
  };
  const Adminlist =
    admins.results > 0 ? (
      admins.data.map((admin) => (
        <tr key={admin._id}>
          <td>{admin.name}</td>
          <td>{admin.email}</td>
          <td>{admin.phone}</td>
          <td>{admin.role}</td>
          <td>{admin.emailVerificationVerified ? "Active" : "Inactive"}</td>
          <td>
            <button
              className={Style.btnoption}
              onClick={() => getadminid(admin)}
            >
              Read &#38; Update
            </button>
          </td>
          <td>
            <button
              className={Style.btnoption}
              onClick={() =>
                dispatch(deleteAdmin(admin))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log(originalPromiseResult);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                    // handle error here
                  })
              }
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5">No Admin Found</td>
      </tr>
    );
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className={Style.sidebar}>
        <a className="active" href="#addam">
          Add Admins
        </a>
        <a href="#allam">All Admins</a>
      </div>
      <div className={Style.content}>
        <div className={Style.addc} id="addam">
          <div className="container">
          <div className={Style.inpst}>
          <form onSubmit={handleSubmit}>
            {/* <div className={Stylee.firstg}> */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className={`form-control ${Stylee.m}`}
                  id="name"
                  ref={adminName}
                />
                <p className={Stylee.error}>{message && message.adminName}</p>
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select ref={adminRole}    className={`form-control ${Stylee.m}`}>
                
                  <option value="manager">Manager</option>
                  <option value="user">User</option>
                </select>
                <p className={Stylee.error}>{message && message.adminRole}</p>
              </div>
            {/* </div> */}
            {/* <div className={Stylee.secondg}> */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className={`form-control ${Stylee.m}`}
                  id="email"
                  ref={adminEmail}
                />
                <p className={Stylee.error}>{message && message.adminEmail}</p>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  className={`form-control ${Stylee.m}`}
                  id="phone"
                  ref={adminPhone}
                />
                <p className={Stylee.error}>{message && message.adminPhone}</p>
              </div>
              {/* </div> */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${Stylee.m}`}
                  id="password"
                  ref={adminPassword}
                />
                <p className={Stylee.error}>
                  {message && message.adminPassword}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="CPASSWORD">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control ${Stylee.m}`}
                  id="CPASSWORD"
                  ref={adminConfirmPassword}
                />
                <p className={Stylee.error}>
                  {message && message.adminConfirmPassword}
                </p>
              </div>
        
            <button type="submit" className={Stylee.contsbtn}>
              Add
            </button>
          </form>
          </div>
          </div>
        </div>
        <div className={Style.allc} id="allam">
          <h1>All Admins</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Role</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>{Adminlist}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admins;
