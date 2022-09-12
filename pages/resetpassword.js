import React, { useRef,useEffect } from "react";
import { resetPssword } from "../redusers/users";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Loading from "../components/loading";
function ResetPass() {
  const { isError, isLoading ,goodpass} = useSelector((state) => state.Users);
  const Password = useRef(null);
  const ConfirmPassword = useRef(null);
  const dispatch = useDispatch();
  const route=useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      newPassword: Password.current.value,
      passwordConfirm: ConfirmPassword.current.value,
    };
    dispatch(resetPssword(data));
  };
useEffect(()=>{
    if(goodpass){
    route.push('/')
    }
}
,[goodpass])
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="File">Enter your new Password</label>
            <input
              type="password"
              ref={Password}
              className="form-control"
              required="true"
            />
          </div>

            <div className="form-group">
            <label htmlFor="File">Confirm your new Password</label>
            <input
                type="password"
                ref={ConfirmPassword}
                className="form-control"
                required="true"
            />
            </div>
            <p className="text-danger">{isError && isError}</p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ResetPass;
