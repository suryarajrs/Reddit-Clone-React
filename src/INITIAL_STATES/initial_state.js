import INITIAL_CURRENT_USER from "./initial_current_user.js";




const INITIAL_STATE = {
  posts: [],
  filteredPosts: [],
  selectedPost: {},
  commentsData: {},
  users: [],
  navdropmenu:0,
  windowWidth:false,
  isLoggedIn: false,
  qr:false,
  showLoginForm:'none',
  currentUser: INITIAL_CURRENT_USER,
  successMessage:'',
  setEmail:'',
  popularTab:false,

  
};



  export default INITIAL_STATE;