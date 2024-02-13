import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./Signup.css";
import { setEmail, showLoginForm } from "../../action";
import { useDispatch, useSelector } from "react-redux";








const Signup = () => {
  const dispatch = useDispatch();
  const email = useSelector((store)=>store.email)
  const [eml , setEml] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(eml))
    dispatch(showLoginForm("create_password"));
  };

  useEffect(()=>{
    document.body.style.overflow = "hidden"
   
     

    return()=>{
      document.body.style.overflow = "auto"
    }
  })
  return (
    <div className="reddit_clone-signup">
      <div className="reddit_clone-signup_close">
        <button onClick={() => dispatch(showLoginForm("none"))}>X</button>
      </div>
      <div className="reddit_clone-signup_container">
        <div className="reddit_clone-signup_heading">
          <h3>Sign Up</h3>
          <p>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a href=""> User Agreement </a>
            and <a href=""> Privacy Policy.</a>
          </p>
        </div>
        <div className="reddit_clone-signup_shortcut">
          <button className="googleBtn">
            <FcGoogle style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Google
          </button>
          <button className="appleBtn">
            {" "}
            <FaApple style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Apple
          </button>
        </div>
        <hr />
        <form className="reddit_clone-signup_input" onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            value={eml}
            required
            onChange={(e) => {setEml(e.target.value)}}
          />
         
          <button style={{ letterSpacing: "1px" }}>Continue</button>
        </form>
        <p>
          Already a Redditor?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              dispatch(showLoginForm("Login"));
            }}
          >
            Login
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
