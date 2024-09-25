import { useContext, useRef, useState } from "react";
import "./login.css";
import { login } from "../../apiCalls";
import { AuthContext } from "../../context/Auth/AuthContext";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const phone = useRef();
  const password = useRef();
  const [secure, setSecure] = useState(true);
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(
      { phone: phone.current.value, password: password.current.value },
      dispatch,
      toast
    );
  };

  const handleSecure = () => {
    setSecure(!secure);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <img src="/assets/logo.png" alt="" />
          </h3>
          {/* <span className="loginDesc">Help people now.</span> */}
        </div>
        <form className="loginRight" onSubmit={handleSubmit}>
          <div className="loginBox">
            <input
              placeholder="Phone Number"
              className="loginInput"
              type="phone"
              ref={phone}
              required
            />
            <div className="loginPassword">
              <input
                placeholder="Password"
                type={secure ? "password" : "text"}
                ref={password}
                required
              />
              <div className="passwordIcon" onClick={handleSecure}>
                {secure ? <VisibilityOff /> : <Visibility />}
              </div>
            </div>
            <button className="loginButton" disabled={isFetching} type="submit">
              {isFetching ? (
                <CircularProgress color="inherit" size="30px" />
              ) : (
                "Log In"
              )}
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
