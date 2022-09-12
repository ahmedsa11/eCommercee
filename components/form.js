import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signup, login } from "../redusers/users";
import { useRouter } from "next/router";
import Loading from "./loading";
import axios from "axios";
import { isFulfilled } from "@reduxjs/toolkit";
const Form = () => {
  const dispatch = useDispatch();
  const { isLogin, isLoading, isError, users } = useSelector(
    (state) => state.Users
  );
  const [errorr, seterror] = useState([]);
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const ConfirmPassword = useRef(null);
  const Gender = useRef(null);
  const Emaillog = useRef(null);
  const Passwordlog = useRef();
  const route = useRouter();
  const repp = () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const form = document.getElementById("formm");

    signUpButton.addEventListener("click", () => {
      form.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      form.classList.remove("right-panel-active");
    });
  };
  const handlesugnup = (e) => {
    e.preventDefault();
    const error = validsignup();
    if (error) return;
    const data = {
      name: Name.current.value,
      email: Email.current.value,
      password: Password.current.value,
      passwordConfirm: ConfirmPassword.current.value,
      gender: Gender.current.value,
    };
    // dispatch(signup(data))
    // route.push('/checkemail')
    axios
      .post(
        "https://e-commerce-app-api-v1.herokuapp.com/api/v1/auth/signup",
        data
      )
      .then((res) => {
        console.log(res);
        route.push("/checkemail");
      })
      .catch((err) => {
        console.log(err.response.data);
        seterror(err.response.data.errors);
      });
  };
  const handlelogin = (e) => {
    e.preventDefault();
    const error = validlogin();
    if (error) return;
    const data = {
      email: Emaillog.current.value,
      password: Passwordlog.current.value,
    };
    dispatch(login(data));

  };
  useEffect(() => {
    if (isLogin) {
      route.push("/");
    }
  }), [isLogin];
  const validsignup = () => {
    const error = {};
    if (Name.current.value.trim() === "") {
      error.name = "username is require";
    } else if (Name.current.value.length < 3) {
      error.name = "username must be bigger than 2";
    }
    if (Email.current.value.trim() === "") {
      error.email = "email is require";
    }
    if (Password.current.value.trim() === "") {
      error.password = "password is require";
    } else if (Password.current.length < 8) {
      error.password = "password must be bigger than 8";
    }
    if (ConfirmPassword.current.value !== Password.current.value)
      error.confirm = "must enter the same password";
    if (Gender.current.value === "") {
      error.gender = "gender is require";
    }
    seterror(error);
    return Object.keys(error).length === 0 ? null : error;
  };

  const validlogin = () => {
    const error = {};
    if (Emaillog.current.value.trim() === "") {
      error.emaillog = "email is require";
    }
    if (Passwordlog.current.value.trim() === "") {
      error.passwordlog = "password is require";
    }

    seterror(error);
    return Object.keys(error).length === 0 ? null : error;
  };
  useEffect(() => {
    repp();
  }, []);
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div id="sign-in-button"></div>
      <div className="form" id="formm">
        <div className="form-container sign-up" id="s">
          <form onSubmit={handlesugnup}>
            {/* <Image src="" alt="logo" width="40"height="50"/> */}
            <h1 className="jTITLE">Janki</h1>
            <h2 className="REGTITLE">REGISTER</h2>
            <div className="inputcontainer">
              <i className="fas fa-user"></i>
              <input type="text" ref={Name} placeholder="Full Name" />
            </div>
            {errorr.length > 0 &&
              errorr.map((error) => {
                // return <span className="text-danger">{error.msg}</span>
                if (error.param === "name") {
                  console.log(error.msg);
                  return <span className="text-danger">{error.msg}</span>;
                }
              })}
            {errorr.name && <span className="text-danger">{errorr.name}</span>}
            <div className="inputcontainer">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" ref={Email} />
            </div>
            {errorr.length > 0 &&
              errorr.map((error) => {
                // return <span className="text-danger">{error.msg}</span>
                if (error.param === "email") {
                  console.log(error.msg);
                  return <span className="text-danger">{error.msg}</span>;
                }
              })}
            {errorr.email && (
              <span className="text-danger">{errorr.email}</span>
            )}

            <div className="inputcontainer">
              <i className="fas fa-lock"></i>
              <input
                className="form-control"
                type="password"
                placeholder="Enter Password"
                ref={Password}
              />
            </div>
            {errorr.length > 0 &&
              errorr.map((error) => {
                // return <span className="text-danger">{error.msg}</span>
                if (error.param === "password") {
                  console.log(error.msg);
                  return <span className="text-danger">{error.msg}</span>;
                }
              })}
            {errorr.password && (
              <span className="text-danger">{errorr.password}</span>
            )}

            <div className="inputcontainer">
              <i className="fas fa-lock"></i>
              <input
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                ref={ConfirmPassword}
              />
            </div>
            {errorr.length > 0 &&
              errorr.map((error) => {
                // return <span className="text-danger">{error.msg}</span>
                if (error.param === "passoerdConfirm") {
                  console.log(error.msg);
                  return <span className="text-danger">{error.msg}</span>;
                }
              })}
            {errorr.confirm && (
              <span className="text-danger">{errorr.confirm}</span>
            )}
            <div className="inputcontainer">
              <i className="fas fa-venus-mars"></i>
              <select ref={Gender}>
                <option defaultValue hidden disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {errorr.length > 0 &&
              errorr.map((error) => {
                // return <span className="text-danger">{error.msg}</span>
                if (error.param === "gender") {
                  console.log(error.msg);
                  return <span className="text-danger">{error.msg}</span>;
                }
              })}
            {errorr.gender && (
              <span className="text-danger">{errorr.gender}</span>
            )}
            <button type="submit" className="signup">
              REGISTER
            </button>
            <p className="agree logg">
              Already have an account ?
              <a href="#l" className="log">
                Login
              </a>
            </p>
            <br />
          </form>
        </div>
        <div className="form-container sign-iin" id="l">
          <form onSubmit={handlelogin}>
            {/* <Image src="" alt="logo" /> */}
            <h1 className="jTITLE">Janki</h1>
            <h2 className="LOGTITLE">LOGIN</h2>
            <div className="inputcontainer">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" ref={Emaillog} />
            </div>

            {errorr.emaillog && (
              <span className="text-danger">{errorr.emaillog}</span>
            )}
            <div className="inputcontainer">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" ref={Passwordlog} />
            </div>
            {errorr.passwordlog && (
              <span className="text-danger">{errorr.passwordlog}</span>
            )}
            {isError && (
              <span className="text-danger">{isError}</span>
            )}

            <button type="submit" className="login">
              LOGIN
            </button>
            <p className="agree logg">
              you need create account ?
              <a href="#s" className="log">
                REGISTER
              </a>
            </p>
            <Link href="/forget">forget your password..?</Link>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2 className="titleoverlay">Welcome Back!</h2>
              <p>
                To keep connected with us <br />
                please login with your <br />
                personal info
              </p>
              <button className="go" id="signIn">
                LOGIN
              </button>
        
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="titleoverlay">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="go" id="signUp">
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
