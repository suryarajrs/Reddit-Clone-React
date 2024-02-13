import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Containers/HomePage.jsx'
import Layout from './Containers/Layout'
import PremiumPage from './Containers/PremiumPage'
import CommentPage from './Containers/CommentsPage.jsx'
import Pagenotfound from './Containers/Pagenotfound'
import ScrollToTop from './Components/ScrolltoTop/ScrolToTop.jsx'
import { useDispatch, useSelector } from 'react-redux'
import RedditQr from './Components/RedditQR/RedditQr.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Siginup.jsx'
import CreatePassword from './Components/CreatePassword/CreatePassword.jsx'
import NotlogginHomePage from './Containers/NotlogginHomePage.jsx'
import CreatePostPage from './Containers/CreatePostPage.jsx'
import Notifications from './Components/notifications/Notifications.jsx'
import { isLogin } from './action.js'
import ProtectedRoutes from './Containers/ProtectedRoutes.jsx'


function App() {
  const qr = useSelector((store) => store.qr);
  const login = useSelector((store) => store.isLoggedIn);
  const dispatch = useDispatch()
  const showLoginForm = useSelector((store) => store.showLoginForm);

  // if(localStorage.getItem("reddit_token")){
  //   dispatch(isLogin(true))
  // }else
  //   dispatch(isLogin(false))
  // }

  const over_lay = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "9999",
    scroll:'hidden'
    
  };

  return (
    <>

 
      {login && <ScrollToTop></ScrollToTop>}
      <Routes>
        <Route path='*' element={<Layout><ProtectedRoutes><Pagenotfound></Pagenotfound></ProtectedRoutes></Layout>}></Route>
        <Route path='/' element={<Layout>{login ? <HomePage></HomePage> : (<NotlogginHomePage></NotlogginHomePage>)} </Layout>}></Route>
        <Route path='/premium' element={<Layout><ProtectedRoutes><PremiumPage></PremiumPage></ProtectedRoutes></Layout>} />
        <Route path='comments/:id' element={<Layout><ProtectedRoutes><CommentPage/></ProtectedRoutes></Layout>} ></Route>
        <Route path='/createPost' element={<Layout><ProtectedRoutes><CreatePostPage/></ProtectedRoutes></Layout>} ></Route>
        <Route path='/notifications' element={<Layout><ProtectedRoutes><Notifications/></ProtectedRoutes></Layout>} ></Route>


      </Routes>

      <div
        className="reddit_clone-app_authentication"
        style={showLoginForm == "none" ? {} : over_lay}
      >
        {showLoginForm == "Login" ? (<Login />) : showLoginForm == "Signup" ? (<Signup />) : showLoginForm == "create_password" ? (<CreatePassword />) : (false)}
      </div>

      {qr && (
        <div className="reddit_clone-app_qr" style={qr ? over_lay : {}}>
          <RedditQr />
        </div>
      )}
    
    </>
  )
}

export default App
