

import { useNavigate } from "react-router-dom";
import { CgLogIn, CgProfile } from "react-icons/cg";
import { FcAdvertising } from "react-icons/fc";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./Nav.css";













const NavOptions = () => {

    const navigate = useNavigate();
  
    const handleLogin = async () => {

    };
  

  
    return (
  
      <div className="reddit_clone-nav_option">
              <button onClick={handleLogin}>
        <CgLogIn /> LogIn & SignUp
      </button>
      <button onClick={() => navigate("/comingpage")}>
        <FcAdvertising /> Advertise on Reddit
      </button>
      <button onClick={() => navigate("/comingpage")}>
        <ShoppingBagOutlinedIcon /> Shop Collectible Avatars
      </button>
  
  
      </div>
    );
  };

  export default NavOptions