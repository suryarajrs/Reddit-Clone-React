
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./login.css";
import { loginUser,isLogin,  loginWithGoogle, showLoginForm, successMessage } from "../../action";
import  {useDispatch, useSelector} from "react-redux"
import { Divider } from "@mui/material";
import { auth, provider } from "../../fireBase";
const PROJECT_ID = "bkfxdn6q8uzn";


const Login = () => {
  const dispatch = useDispatch()

  const message = useSelector((store)=>store.successMessage)


useEffect(()=>{
  document.body.style.overflow = "hidden"
   
  
  return()=>{
    document.body.style.overflow = "auto"
  }
})

  const [inp, setInp] = useState({ email: "", password: ""});

  const [error, setError] = useState("");


  const handleChange = (e) => {
    if (error != "") {
      setError("");
    }
    setInp({ ...inp, [e.target.name]: e.target.value });
  };


  const handleLogin = async (e) => {

    e.preventDefault();

    try {
      const responce = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'projectID': PROJECT_ID
        },
        body: JSON.stringify({
            email: inp.email,
            password: inp.password,
            appType: 'reddit'
        })
    })
      const datas = await responce.json();
  
      setError(datas.message);

      const userName = datas?.data?.name;
        const userEmail = datas?.data?.email;
        const photoURL = datas?.data?.profileImage  ;

     
    

      dispatch(loginUser(userName, userEmail, photoURL));
      { (datas.status === 'success')?(
        dispatch(isLogin(true)),
        dispatch(showLoginForm("none"))
       ):({})}

  
       
       localStorage.setItem("reddit_token", JSON.stringify(datas.token));

       

     
    } catch (error) {
      console.log(error);
    }
    
   
  };






  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {


        const userName = result.user.displayName;
        const userEmail = result.user.email;
        const photoURL = result.user.photoURL;




        dispatch(loginWithGoogle( userName ,userEmail ,photoURL))
      
        dispatch(showLoginForm("none"));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };


  useEffect(() => {
    return () => {
      dispatch(successMessage(""))
    };
  }, []);


  return (
    <div className="reddit_clone-login">
      <div className="reddit_clone-login_close">
        <button onClick={() => dispatch(showLoginForm("none"))}>X</button>
      </div>
      <div className="reddit_clone-login_container">
        <div className="reddit_clone-login_heading">
          <h3>Log In</h3>
          <p>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a href=""> User Agreement </a>
            and <a href=""> Privacy Policy.</a>
          </p>
        </div>
        <div className="reddit_clone-login_shortcut">
          <button  className="googleBtn" onClick={handleGoogle}>
            <FcGoogle style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Google
          </button>
          <button className="appleBtn">
            <FaApple  style={{ fontSize: "1rem", marginRight: "2rem" }} />{" "}
            Continue with Apple
          </button>
        </div>
        <Divider>OR</Divider>
     
        
        <form className="reddit_clone-login_input" onSubmit={handleLogin} >
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
            value={inp.username}
          />

          {error && <p style={(error.status=="success")?({color:'green'}):({color:"red"})}>{error}</p>}
          {message&&<p style={{color:"green"}}>{message}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={handleChange}
            value={inp.password}
          />
          <p>
            Forgot your <a href="">username</a> of <a href="">password </a> ?
          </p>
        <p>
          New to Reddit?{" "}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              dispatch(showLoginForm("Signup"));
            }}
            >
            signup
          </a>{" "}
        </p>
        <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
