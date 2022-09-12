import React, { useEffect, useState } from "react";
import Link from "next/link";
import Style from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import CategoryIcon from "@mui/icons-material/Category";
import SvgIcon from "@mui/material/SvgIcon";
const Navbar = () => {
  const router = useRouter();
  const [temp, setTemp] = useState();
  const [user, setUser] = useState();
  const [cats, setCats] = useState([]);
  const { isLogin } = useSelector((state) => state.Users);
  useEffect(() => {
    const tempuser = localStorage.getItem("user");
    setTemp(tempuser);
    let user = JSON.parse(tempuser);
    setUser(user);
  }, [isLogin]);

  const renderedCats = () => {
    return cats.map((cat) => {
      return (
        <li 
          key={cat._id}
          onClick={() => {
            router.push({
              pathname: "categories",
              query: {
                cat_id: cat._id,
                cat: cat.name,
              },
            });
          }}
        >
          <a href="#" className="flexed align-center gap-1 no-decoration">
            <SvgIcon component={CategoryIcon} inheritViewBox />
            <span>{cat.name}</span>
          </a>
        </li>
      );
    });
  };
  useEffect(() => {
    axios
      .get("https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories")
      .then((res) => {
        setCats(res.data.data);
      });
  }, []);

  return (
    <>
      <nav
        className={`${Style.nv} navbar navbar-expand-lg flexed column gap-2`}
      >
        <div
          className={`${Style.hash} text-center`}
          // style={{ position: "absolute", width: "100%", left: "0", top: "0" }}
        >
          FLAT 20% OFF|Use Code &lsquo; JANKI &rsquo;
        </div>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center me-auto">
              {/* <Img src="/favicon.ico" alt="logo" width={40} height={40} /> */}
              <span className={`ms-2 ${Style.logo}`}>Janki</span>
            </a>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link ${
                      router.pathname == "/" ? `${Style.active}` : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${Style.cat}`}>
                <a
                  className={`nav-link ${
                    router.pathname == "/categories" ? `${Style.active}` : ""
                  } `}
                  aria-current="page"
                >
                  Categories
                </a>
                <div className={Style.mega}>
                  <ul className={Style.lii}>{renderedCats()}</ul>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/shop">
                  <a
                    className={`nav-link ${
                      router.pathname == "/shop" ? `${Style.active}` : ""
                    }`}
                  >
                    Shop
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/dashboard">
                  <a
                    className={`nav-link ${
                      router.pathname == "/dashboard" ? `${Style.active}` : ""
                    }`}
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
                <Link href="/about">
                  <a
                    className={`nav-link ${
                      router.pathname == "/about" ? `${Style.active}` : ""
                    }`}
                  >
                    About Us
                  </a>
                </Link>
              </li> */}
              <li className={`nav-item`}>
                <Link href="/contact">
                  <a
                    className={`nav-link ${
                      router.pathname == "/contact" ? `${Style.active}` : ""
                    }`}
                  >
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={Style.ser}>
            <form className={`${Style.subbox}`}>
              <i className="fas fa-search"></i>
              <input type="search" className={Style.ipt} placeholder="Search" />
              <Link href="/cart">
                <i className={`fas fa-shopping-cart ${Style.cart}`}>
                  <span className={Style.cartnum}>1</span>
                </i>
              </Link>
            </form>
          </div>
          <div className={Style.serlo}>
            <Link href="/wishlist">
              <i className="fas fa-heart">
                <span>&nbsp; Wishlist</span>
              </i>
            </Link>
            {temp ? (
              <Link href="/setting">
                <i className="fas fa-user">
                  <span className={Style.users}>&nbsp;{user.name}</span>
                </i>
              </Link>
            ) : (
              <Link href="/form">
                <i className="fas fa-lock">
                  {" "}
                  <span>&nbsp; Login/Register</span>
                </i>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
