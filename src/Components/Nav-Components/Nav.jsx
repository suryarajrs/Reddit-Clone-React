import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./Nav.css"
import { BsArrowBarLeft,  BsChevronDown, BsQrCodeScan, } from "react-icons/bs";
import NavLoginIcons from "./NavLoginIcons";
import Logo from "./Logo";
import { arr } from "./NavArray.jsx";
import { useSelector } from "react-redux";
import NavMenu from "./navMenu/NavMenu.jsx";
import { useDispatch } from "react-redux";
import { windowWidthMenu } from "../../action.js"
import { qrcode } from "../../action.js"
import { showLoginForm } from "../../action.js"
import DotMenu from "./DotMenu.jsx";









const style = {
    border: "1px solid #edeff1",
    borderRadius: " 3px",
    cursor: "pointer",
};







const Nav = () => {
    const dispatch = useDispatch();



    const navmenu = useSelector((store) => store.navdropmenu);
    const windowsWidth = useSelector((store) => store?.windowWidth);
    const login = useSelector((store) => store?.isLoggedIn);


    const [option, setOption] = useState(false);
    const navigate = useNavigate();
    const [navMenuWidth, setNavMenuWidth] = useState();
    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth > 1200);
    const [border, setBorder] = useState();

    //    {console.log("border"+JSON.stringify(border))}
    const optionRef = useRef();

    useEffect(() => {
        const w = document.querySelector(".reddit_clone-nav_menu_btn").offsetWidth;
        setNavMenuWidth(w);
        const handleResize = () => {
            // dispatch(windowWidthMenu((parseFloat(window.innerWidth) > 1200)));

            setWindowWidth(parseFloat(window.innerWidth) > 1200);
        };
        window.addEventListener("resize", handleResize);
        const handleClickOutside = (e) => {
            if (optionRef.current && !optionRef.current.contains(e.target)) {
                setOption(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseIn = () => {
        if (!windowsWidth) {
            setBorder(style);
            // {console.log("HandleMouseIn")}
        }
    };
    const handleLeave = () => {
        if (border) {
            setBorder();
        }
    };


    return (
        <div className="reddit_clone-nav_fixed" >
            <div className="reddit_clone-nav">
                <div className="reddit_clone-nav_icon">
                    <div
                        className="reddit_clone-nav_reddit_name"
                        onClick={() => {

                            window.scroll(
                                {
                                    top: 0,
                                    behavior: 'auto',
                                }
                            )
                            navigate("/");

                        }}
                    >
                        <Logo></Logo>
                    </div>


                    <div className="reddit_clone-nav_menu" style={login?{}:{display:'none'}}>

                        <button
                            className="reddit_clone-nav_menu_btn"
                            onClick={() => {
                                windowsWidth === false ? setShowMenu((p) => !p) : "";
                                // {console.log("click",windowsWidth)}
                            }}
                            onMouseEnter={handleMouseIn}
                            onMouseLeave={handleLeave}
                            style={border}
                        >
                            {true ? <div>{arr[navmenu]}</div> : false}


                            <div>
                                {windowsWidth === false && showMenu && windowWidth && (
                                    <BsArrowBarLeft onClick={() => dispatch(windowWidthMenu(true))} />
                                )}
                                <BsChevronDown />{""}
                            </div>

                            {/* {console.log(windowsWidth , showMenu , windowWidth )} */}
                        </button>
                        {showMenu && (
                            <div>{windowsWidth ? <></> : <NavMenu menu={setShowMenu} />}</div>
                        )}
                    </div>

                    
                </div>
                {login?(<div className="reddit_clone-nav_input">
                    <div className="reddit_clone-nav_input_item">
                        <input
                            type="text"
                            placeholder="  Search Reddit"
                        // value={search}
                        // onChange={handleInput}
                        />
                    </div>
                </div>):(<div className="reddit_clone-nav_input">
                    <div className="reddit_clone-nav_input_item">
                        <input
                            type="text"
                            placeholder="  Search Reddit"
                        // value={search}
                        onChange={()=>{dispatch(showLoginForm("Login"))}}
                        />
                    </div>
                </div>)
                }
                {/* <hr /> */}
                {login ? (
                    <NavLoginIcons option={option} setOption={setOption} />
                ) : (
                    <div className="reddit_clone-nav_login_part">
                        <button

                            className="reddit_clone-nav_getapp"
                            onClick={() => dispatch(qrcode(true))}
                        >
                            {" "}
                            <BsQrCodeScan /> Get App

                        </button>

                        <button style={{ backgroundColor: 'rgb(255,69,1)' }} className="reddit_clone-nav_login" onClick={() => {
                            dispatch(showLoginForm("Login"));
                        }}>
                         Login
                        </button>
                    
                        <DotMenu></DotMenu>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Nav;