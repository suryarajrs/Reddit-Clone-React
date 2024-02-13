import React from "react";
import "./NavMenu.css";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRightCircle, BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { arr } from "../NavArray.jsx";
import { navdropmenu, popularTab, } from "../../../action.js";
import { useDispatch } from "react-redux";


const NavMenu = ({menu}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <div
      className="reddit_clone-nav_menu_item"
      style={{ width: "16rem" }}
      onClick={(e) => {
        const val = arr[parseInt(e.target.id) - 1];
      }}
    >
      <p style={{ fontSize: "0.8rem" }}>YOUR COMMUNITIES</p>
      <button
        id="1"
        onClick={() => {
        
          navigate("/");
          dispatch(popularTab(false))
          dispatch(navdropmenu(0))
          menu((p)=>{!p})
         
        
        
        }}
      >
        {" "}
        <AiFillHome className="reddit_clone-nav_menu_icons" /> Home
      </button>

      <button
        id="2"
        onClick={() => {
          dispatch(popularTab(true))
          dispatch(navdropmenu(1))
          menu((p)=>{!p})
        }}
      >
        <BsArrowUpRightCircle className="reddit_clone-nav_menu_icons" /> Popular
      </button>
      <button
        id="3"
        onClick={() => {
    
        navigate("/");
        dispatch(popularTab(false))
        dispatch(navdropmenu(2))
        menu((p)=>{!p})
        }}
      >
        <BsFileBarGraph className="reddit_clone-nav_menu_icons" /> All
      </button>
      <p style={{ fontSize: "0.8rem" }}>OTHER</p>
      <button id="4" onClick={() => { navigate("/comingpage");  menu((p)=>{!p});  dispatch(navdropmenu(3))}}>
        <RiUserSettingsLine className="reddit_clone-nav_menu_icons" /> User
        Setting
      </button>
      <button
        id="5"
        onClick={() => {
          navigate("/messages");
          dispatch(navdropmenu(4))
        }}
      >
        <AiOutlineMessage className="reddit_clone-nav_menu_icons" /> Message
      </button>
      <button
        id="6"
        onClick={() => {
        //   setNewPost(true);
          navigate("/");
          dispatch(navdropmenu(5))
        }}
      >
        <AiOutlinePlus className="reddit_clone-nav_menu_icons" /> Create Post
      </button>
      <button id="7" onClick={() => {navigate("/notifications");menu((p)=>{!p}); }}>
        <IoIosNotificationsOutline className="reddit_clone-nav_menu_icons" />{" "}
        Notifications
      </button>
      <button id="8" onClick={() => {navigate("/coins"); menu((p)=>{!p}); dispatch(navdropmenu(7))}}>
        <CiCoinInsert className="reddit_clone-nav_menu_icons" /> Coins
      </button>
      <button id="9" onClick={() => {navigate("/premium"); menu((p)=>{!p});  dispatch(navdropmenu(8))}}>
        <BsShield className="reddit_clone-nav_menu_icons" /> Premium
      </button>
    <button id="10" onClick={() => {navigate("/comingpage");menu((p)=>{!p}); dispatch(navdropmenu(9))} }>
        <IoShirtOutline className="reddit_clone-nav_menu_icons" /> Avatar
      </button>
    </div>
  );
};

export default NavMenu;
