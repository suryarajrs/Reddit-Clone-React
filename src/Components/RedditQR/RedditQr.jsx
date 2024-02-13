import React, { useEffect, useState } from "react";
import "./RedditQr.css";
import { useDispatch, useSelector } from "react-redux";
import {qrcode} from "../../action";



const RedditQr = () => {
  const code = useSelector((e)=>e.qr)
  const [qr , setQr] = useState(code);
  // console.log("Qr" + qr)
  const dispatch = useDispatch()


  useEffect(()=>{
    document.body.style.overflow = "hidden"
     
    
    return()=>{
      document.body.style.overflow = "auto"
    }
  })
  return (
    <div className="reddit_clone-redditQr">
      <div className="reddit_clone-redditQr_container">
        <div className="reddit_clone-RedditQr_get_app">
          <h1>Get the Reddit app </h1>
          <button onClick={()=>{ 
            dispatch(qrcode(!qr))
            // setQr((p)=>!p)
            }} style={{borderRadius:'50%', width:'42px' ,height:'42px' , padding:'10px', backgroundColor:'rgba(0,0,0,0.1)'}} >X</button>
        </div>
        <div className="reddit_clone-RedditQr_scan">
          <p>Scan this QRcode to download the app now</p>
          <img src={'https://www.redditstatic.com/shreddit/assets/shreddit-qr-code.svg'} alt="Qr code" />
        </div>
        <div className="reddit_clone-RedditQr_footer">
          <p>Or Check it out in App Store</p>
          <div className="reddit_clone-RedditQr_button">
            <a href="https://play.google.com/store/apps/details?id=com.reddit.frontpage"><img src={'https://www.redditstatic.com/shreddit/assets/google-play.svg'} alt="" /></a>
            <a href="https://apps.apple.com/us/app/reddit/id1064216828"><img src={'https://www.redditstatic.com/shreddit/assets/app-store.svg'} alt="" /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditQr;
