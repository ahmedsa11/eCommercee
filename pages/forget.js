import React, { useRef ,useEffect} from "react";
import { forgetpassword } from "../redusers/users";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/loading";
import { useRouter } from "next/router";
function Forget() {
  const { isError, isLoading,sent } = useSelector((state) => state.Users);
  const Email = useRef(null);
  const route=useRouter()
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: Email.current.value,
    };
    dispatch(forgetpassword(data));
  };
useEffect(()=>{
    if(sent){
        route.push('/resetcode')
    }
}
,[sent])
  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="File">Enter your Email</label>
            <input
              type="email"
              ref={Email}
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

export default Forget;
