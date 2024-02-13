import React from "react";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import "./LeftSideMenu.css";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { windowWidthMenu} from "../../action.js"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const darkModeStyle = {
  backgroundColor: "var(--color-lightDark)",
  color: "white",
};









const LeftSideMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((store  )=>store.isLoggedIn)
  const windowsWidth = useSelector((store) => store?.windowWidth?.value);





  return (
    <div
      className="reddit_clone-menu"
    >
      {login && <div className="reddit_clone-menu_close">
        <button style={{paddingRight:'10px'}} onClick={() => dispatch(windowWidthMenu(false))}><CloseOutlinedIcon  fontSize="medium"></CloseOutlinedIcon></button>
      </div>}
      {login&&<p>FEEDS</p>}
      <button
        id="1"
        onClick={() => {
          setNewPost(false);
          navigate("/");
          setIsPopularPage(false);
        }}
      >
        {" "}
        <AiFillHome className="react_clone-menu_icons" /> Home
      </button>
      <button
        id="2"
        onClick={() => {
          setRedditIndex((p) => p + 1);
          navigate("/popular");
          setIsAllPage(false);
          setIsPopularPage(true);
        }}
      >
        <BsArrowUpRightCircle className="react_clone-menu_icons" /> Popular
      </button>
      <button
        id="3"
        onClick={() => {
          setIsAllPage(true);
          setRedditIndex((p) => p + 1);
          navigate("/popular");
          setTop((p) => !p);
        }}
      >
        <BsFileBarGraph className="react_clone-menu_icons" /> All
      </button>
      {login && <p>OTHER</p>}
      <button id="4" onClick={() => navigate("/comingpage")}>
        <RiUserSettingsLine className="react_clone-menu_icons" /> User Setting
      </button>
      <button
        id="5"
        onClick={() => {
          navigate("/messages");
        }}
      >
        <AiOutlineMessage className="react_clone-menu_icons" /> Message
      </button>
      <button
        id="6"
        onClick={() => {
          setNewPost(true);
          navigate("/");
        }}
      >
        <AiOutlinePlus className="react_clone-menu_icons" /> Create Post
      </button>
      <button id="7" onClick={() => navigate("/notification")}>
        <IoIosNotificationsOutline className="react_clone-menu_icons" />{" "}
        Notifications
      </button>
      <button id="8" onClick={() => navigate("/coins")}>
        <CiCoinInsert className="react_clone-menu_icons" /> Coins
      </button>
      <button id="9" onClick={() => navigate("/premium")}>
        <BsShield className="react_clone-menu_icons" /> Premium
      </button>
      <button id="10" onClick={() => navigate("/comingpage")}>
        <IoShirtOutline className="react_clone-menu_icons" /> Avatar
      </button>
    </div>
  );
};

export default LeftSideMenu;
