import React,{useRef,useState,useEffect} from 'react'
import Style from '../styles/settings.module.css'
import { useRouter } from "next/router";
import { Updatepassword,deletUser,upDateuser } from '../redusers/users';
import { useDispatch,useSelector } from 'react-redux';
import {setLogin} from '../redusers/users'
import Loading from '../components/loading';
const Settings = () => {
    const [temp, setTemp] = useState({});
    const [user, setUser] = useState({});
    const {isLoading,isLogin} = useSelector(state=>state.Users)
    const Name=useRef(user.name)
    const Email=useRef(user.email)
    const OldPassword=useRef() 
    const ConfirmNewPassword=useRef()
    const NewPassword=useRef()
    const [error, seterror] = useState({});
    const dispatch = useDispatch();
    const logou = useRouter();
    const logout = () => {
        if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');
      dispatch(setLogin(false))
      window.location.href = '/';
      logou.push('/');
        }
    };
    useEffect(() => {
        const tempuser = localStorage.getItem("user")
        setTemp(tempuser)
        let user = JSON.parse(tempuser);
        setUser(user)
        console.log(user)
 
    }, [isLogin])
    useEffect(() => {
      Name.current.value=user.name
      Email.current.value=user.email
    }, [user])
    const validation = () => {
        const error = {};
        if (Name.current.value.trim() === '') {
          error.Name = 'username is require';
        } else if (Name.length < 3) {
          error.Name = 'username must be bigger than 2';
        }
        if (!document.getElementById('inputpass').disabled) {
          if (OldPassword.current.value.trim() === '') {
            error.oldPassword = 'password is require';
          }
          if (NewPassword.current.value.trim() === '') {
            error.newPassword = 'password is require';
          }
          if (ConfirmNewPassword.current.value.trim() === '') {
            error.confirmNewPassword = 'password is require';
          } else if (newPassword.length < 8) {
            error.newPassword = 'password must be bigger than 8';
          }
          if (ConfirmNewPassword !== newPassword)
            error.confirmNewPassword = 'must enter the same pass';
        }
        if (Email.current.value.trim() === '') error.email = 'email is require';
        seterror(error);
        return Object.keys(error).length === 0 ? null : error;
      };
      const editbutton = (e) => {
        if (typeof window !== 'undefined') {
        const editname = document.getElementById('editname');
        const editemail = document.getElementById('editemail');
        // const editgender = document.getElementById('editgender');
        const editpass = document.getElementById('editpass');
        const cancel = document.getElementById('cancel');
        const inputsetting = document.getElementsByClassName('inputsetting');
        editname.onclick = () => {
          document.getElementById('inputname').removeAttribute('disabled');
          document.getElementById('saveandcancel').style.display = 'block';
          document.getElementById('inputname').style.border = '1px solid white';
        };
        editemail.onclick = () => {
          document.getElementById('inputemail').removeAttribute('disabled');
          document.getElementById('saveandcancel').style.display = 'block';
          document.getElementById('inputname').style.border = '1px solid white';
        };
        // editgender.onclick = () => {
        //   document.getElementById('inputgender').removeAttribute('disabled');
        //   document.getElementById('saveandcancel').style.display = 'block';
        //   document.getElementById('inputname').style.border = '1px solid white';
        // };
        editpass.onclick = () => {
          document.getElementById('inputpass').removeAttribute('disabled');
          document.getElementById('hidepass').style.display = 'block';
          document.getElementById('inputname').style.border = '1px solid white';
          document.getElementById('oldpass').textContent = 'Enter Old Password';
          document.getElementById('saveandcancel').style.display = 'block';
        };
        cancel.onclick = (e) => {
          // eslint-disable-next-line
          window.location.href = window.location.href;
          document.getElementById('saveandcancel').style.display = 'none';
        //   document.getElementById('inputgender').value = user.gender;
          document.getElementById('inputname').value = user.name;
          document.getElementById('inputemail').value = user.email;
          for (let i = 0; i < inputsetting.length; i++) {
            inputsetting[i].setAttribute('disabled', 'disabled');
          }
          document.getElementById('hidepass').style.display = 'none';
          document.getElementById('oldpass').textContent = 'Password';
        //   document
        //     .getElementById('inputgender')
        //     .setAttribute('disabled', 'disabled');
        };
    }
      };
      const handlesetting = (e) => {
        e.preventDefault();
        const error = validation();
        if (error) return;
        const data = {
            name: Name.current.value,
            email: Email.current.value,
            currentPassword:OldPassword.current.value,
            password:NewPassword.current.value,
            passwordConfirm:ConfirmNewPassword.current.value
        }
            dispatch(upDateuser(data))
            
      };
const deleteuser = () => {
    // const data = {
    //     currentPassword:OldPassword.current.value,
    //     password:NewPassword.current.value,
    //     passwordConfirm:ConfirmNewPassword.current.value
    // }
    dispatch(deletUser())
}

  return (
    <>
    {isLoading?<Loading/>:null}
    <div className="container">
        <h1 className='text-center'>Settings</h1>
        <div className={Style.data}>
                <form id="upload" onSubmit={handlesetting}>
                  {/* <div className="proimg">
                    <div className="imgprof">{renderPreview()}</div>
                    <div className="image-editor">
                      <i className="fas fa-pen editpic"></i>
                      <input
                        type="file"
                        accept="image/*"
                        id="imginput"
                        
                        onChange={fileUpload}
                      />
                    </div>
                  </div> */}

                  <div className={Style.formdata}>
                    <label htmlFor="username" className="form-label">
                      UserName
                    </label>
                    <div className={Style.inputcout}>
                      <i
                        id="editname"
                        className={`fas fa-pen ${Style.editbutton}`}
                        onClick={editbutton}
                      ></i>
                      <input
                        id="inputname"
                        className="inputsetting"
                        type="text"
      
                        disabled
                        name="Name"
                        ref={Name}
                      />
                    </div>
                    {error.Name && (
                      <span className="text-danger">{error.Name}</span>
                    )}
                    <label htmlFor="username" className="form-label">
                    Email
                    </label>
                    <div className={Style.inputcout}>
                      <i
                        id="editemail"
                        className={`fas fa-pen ${Style.editbutton}`}
                        onClick={editbutton}
                      ></i>
                      <input
                        id="inputemail"
                        className="inputsetting"
                        type="email"
                        disabled
                       ref={Email}
                        name="email"
                      />
                    </div>
                    {error.email && (
                      <span className="text-danger">{error.email}</span>
                    )}
                    {/* <label htmlFor="username" className="form-label">
                     Password
                    </label>
                    <div className={Style.inputcout}>
                      <i
                        id="editgender"
                        className={`fas fa-pen ${Style.editbutton}`}
                        onClick={editbutton}
                      ></i>
                      <select
                        disabled
                        value={Gender}
                        id="inputgender"
                        onChange={handleChange}
                        name="Gender"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    {error.Gender && (
                      <span className="text-danger">{error.Gender}</span>
                    )} */}
                    <label
                      id="oldpass"
                      htmlFor="username"
                      className="form-label"
                    >
                      Password
                    </label>
                    <div className={Style.inputcout}>
                      <i
                        id="editpass"
                        className={`fas fa-pen ${Style.editbutton}`}
                        onClick={editbutton}
                      ></i>
                      <input
                        disabled
                        id="inputpass"
                        className="inputsetting"
                        type="password"
                     ref={OldPassword}
                        name="oldPassword"
                      />
                    </div>
                    {error.oldPassword && (
                      <span className="text-danger">{error.oldPassword}</span>
                    )}
                    <div id="hidepass" className={Style.hidepass}>
                      <label htmlFor="username" className="form-label">
                        Enter New Password
                      </label>
                      <div className={Style.inputcout}>
                        <input
                          className="inputsetting"
                          type="password"
                          ref={NewPassword}
                          name="newPassword"
                        />
                      </div>
                      {error.newPassword && (
                        <span className="text-danger">{error.newPassword}</span>
                      )}
                      <label htmlFor="username" className="form-label">
                        Confirm New Password
                      </label>
                      <div className={Style.inputcout}>
                        <input
                          className="inputsetting"
                          type="password"
                         ref={ConfirmNewPassword}
                          name="confirmNewPassword"
                        />
                      </div>
                      {error.confirmNewPassword && (
                        <span className="text-danger">
                          {error.confirmNewPassword}
                        </span>
                      )}
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
                <button className="contsbtnn"
       
                  onClick={logout}
                >Logout</button>
                <button className='contsbtn' onClick={deleteuser}>delete my account</button>
              </div>
        </div>
    </>
  )
}

export default Settings