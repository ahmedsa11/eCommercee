import React,{useRef,useEffect} from "react";
import {resetCode
}from '../redusers/users'
import Style from "../styles/resetcode.module.css";
import {useSelector,useDispatch} from 'react-redux'
import imm from '../images/sdsd.png'
import Loading from "../components/loading";
import {useRouter} from 'next/router'
function ResetCode() {
    const {isError,isLoading,users,verify,email}=useSelector(state=>state.Users)
const code1 = useRef(null);
const code2 = useRef(null);
const code3 = useRef(null);
const code4 = useRef(null);
const code5 = useRef(null);
const route=useRouter()
const code6 = useRef(null);
const dispatch=useDispatch()
const nextotp = () => {
    console.log("asd")
    // if(typeof window !== 'undefined'){
    const otp = document.querySelectorAll('.otp');
    for (let i = 0; i < otp.length - 1; i++) {
      otp[i].addEventListener('keyup', function () {
        this.nextElementSibling.focus();
      });
    }
  
}

const handleSubmit=(e)=>{
    e.preventDefault()
  const data={
    resetCode:code1.current.value+code2.current.value+code3.current.value+code4.current.value+code5.current.value+code6.current.value
    }
    dispatch(resetCode(data))
}
useEffect
(()=>{
    if(verify){
        route.push('/resetpassword')
    }
}
,[verify])
 useEffect(()=>{
    nextotp()
}
,[])
  return <>
  {isLoading?<Loading/>:null}
    <div className={Style.verification}>
          <div className={Style.about}>
            <div className={Style.info}>
              <h2>Enter verification code</h2>
              <p> We have sent the Verification code to </p>{' '}
              <p className={Style.mobile}>{email&&email}</p>
              <form onSubmit={handleSubmit}>
                <div className={Style.code}>
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num1"
                    ref={code1}
                    maxLength={1}
                  />
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num2"
                    ref={code2}
                    maxLength={1}
                  />
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num3"
                    ref={code3}
                    maxLength={1}
                  />
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num4"
                    ref={code4}
                    maxLength={1}
                  />
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num5"
                    ref={code5}
                    maxLength={1}
                  />
                  <input
                    className={Style.otp}
                    required
                    type="text"
                    name="num6" 
                    ref={code6}
                    maxLength={1}
                  />  
                </div>
                <p className="text-danger">{isError && isError}</p>
                <button type="submit">Verify</button>
              </form>
            </div>

          </div>
        </div>
  </>;
}

export default ResetCode;
