import React, { useContext } from "react";
import Footer from "./Footer";
import { RiAdvertisementFill } from "react-icons/ri";
import premium from "../../images/premium.png";
import "./Premium.css";
import avatar from "../../images/avatar.jpg";
import lounge from "../../images/lounge.jpg";
import app from "../../images/customapp.jpg";
import { useDispatch } from "react-redux";
import { navdropmenu } from "../../action";
import { useSnackbar } from "notistack";



const Premium = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch =useDispatch();
  dispatch(navdropmenu(8))

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    


    enqueueSnackbar('Features Comming soon!', {
      variant
    });
   
  };
  return (
    <div className="reddit_clone-premium_container">
      <div
        className="reddit_clone-premium"
        style={{ width: '100%' }}
      >
        <img src={premium} alt="" className="premium-banner" />
        <div className="reddit_premium_heading">
          <h1>Join Reddit Premium Today</h1>
        </div>
        <div className="reddit_clone-premium_grid">
          <div className="reddit_clone-premium_grid_item">
            <RiAdvertisementFill className="reddit_clone-premium_icons" />

            <h4>Ad-free Browsing</h4>
            <p>Enjoy redditing without interruptions from ads</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={avatar} alt="" />
            <h4>Exclusive Avatar Gear</h4>
            <p>Outfit your avatar with the best gear and accessories</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={lounge} alt="" />
            <h4>Member lounge</h4>
            <p>Discover all the illuminati secrets in r/lounge</p>
          </div>
          <div className="reddit_clone-premium_grid_item">
            <img src={app} alt="" />
            <h4>Custom App Icons*</h4>
            <p>Change your app icon to something more your style</p>
          </div>{" "}
          <div
            className="reddit_clone-premium_grid_item"
            style={{ backgroundColor: "var(--color-background)" }}
          ></div>
          
          <div
            className="reddit_clone-premium_grid_item"
            style={{ backgroundColor: "var(--color-background)" }}
          ></div>
        </div>
        <div className="reddit_clone-premium_button">
          <button onClick={handleClickVariant('info')} className="reddit_clone-premium_button_b1">
            {" "}
            <span>${Math.ceil(Math.random() * 1000) / 100}/Month</span>
          </button>
          <button onClick={handleClickVariant('info')} className="reddit_clone-premium_button_b2">
            ${Math.ceil(Math.random() * 1000) / 100}/Year <span> Save 30%</span>{" "}
          </button>
        </div>
        <div className="reddit_clone-premium_text">
          <p>Subscriptions automatically renew</p>
          <p>
            * Custom app icons and welcome gifts are only available through a
            paid Reddit Premium subscription.
          </p>
          <button onClick={handleClickVariant('info')}>Visit the Reddit Premium FAQs</button>
        </div>
        <Footer/>
      </div>
    </div>
  );
};
export default Premium;
