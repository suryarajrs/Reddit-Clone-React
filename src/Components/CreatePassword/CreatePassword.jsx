import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import "./CreatePassword.css";
import { useDispatch, useSelector } from "react-redux";
import { showLoginForm, successMessage } from "../../action"
const PROJECT_ID = "bkfxdn6q8uzn";





const CreatePassword = () => {

  const dispatch =useDispatch()
  const email = useSelector((store)=>store.setEmail)

  const [inp, setInp] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    usernameError: "",
    createpasswordError: "",
    userError:"",
  });
  const handleChange = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
    setError({
      usernameError: "",
      createpasswordError: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inp.username.length <= 3 || inp.username.length > 15) {
      setError({
        ...error,
        usernameError: "username must have characters between and 4 to 15",
      });
      e.preventDefault();
      return;
    }
    if (inp.password.length <= 6) {
      e.preventDefault();
      setError({
        ...error,
        createpasswordError: "password must have more than 6 characters",
      });
      return;
    }

    // make an registeration for the email and username
    try {
      const responce = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'projectID': PROJECT_ID
        },
        body: JSON.stringify({
            name: inp.username,
            email: email,
            password: inp.password,
            appType: 'reddit'
        })
    })
     
      const data = await responce.json();

      console.log(data)
      console.log(data.message)
      setError({ ...error, userError: data });
     { (data.status === 'success')?(
      dispatch(successMessage("Account Creation Successful Please Login!!! ")),
      dispatch(showLoginForm("Login"))
     ):({})}
      
    } catch (err) {
      console.log(err);
      setError({ ...error, usernameError: err?.message });
    }
  };
  useEffect(()=>{
  document.body.style.overflow = "hidden"
   
  
  return()=>{
    document.body.style.overflow = "auto"
  }
})
  return (  
    <div className="reddit_clone-create_password">
      <div className="reddit_clone-create_password_close">
        <button onClick={() => dispatch(showLoginForm("Signup"))}>
          <BiArrowBack />
        </button>
      </div>
      <div className="reddit_clone-create_password_container">
        <div className="reddit_clone-create_password_heading">
          <h3>Create your username and password</h3>
          <p>
            Reddit is anonymous, so your username is what you’ll go by here.
            Choose wisely—because once you get a name, you can’t change it.
          </p>
        </div>

       
        <form
          className="reddit_clone-create_password_input"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={inp.username}
            onChange={handleChange}
            required
          />
          {error.usernameError && (
            <p style={{ color: "red" }}>{error.usernameError}</p>
          )}
  
          <input
            type="password"
            placeholder="Create Password"
            name="password"
            required
            onChange={handleChange}
            value={inp.password}
          />
          {error.createpasswordError && (
            <p style={{ color: "red" }}>{error.createpasswordError}</p>
          )}
          {error.userError && (
            <p style={(error.userError.status=="fail")?({color:'red'}):({color:"green"})}>{error.userError.message}</p>
          )}
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
