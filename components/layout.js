import React,{useState,useEffect} from "react";
import Footer from "./footer";
import Navbar from "./Navbar";
import Style from "../styles/lay.module.css";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  // const [temp, setTemp] = useState();
  // const [user, setUser] = useState();
  // const { isLogin } = useSelector((state) => state.Users);
  // useEffect(() => {
  //   if(isLogin){
  //   const tempuser = localStorage.getItem("user");
  //   setTemp(tempuser);
  //   let user = JSON.parse(tempuser);
  //   setUser(user);
  //   }
  // }, [isLogin]);
    return (
      <div className={Style.container}>
        <Navbar />
        { children}
        <Footer />
      </div>
    );
};

export default Layout;
