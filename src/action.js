

export const fetchPostDetails = (post) => {
  // {console.log("post"+JSON.stringify(post))}
  return {
    type: "fetchPostsDetails",
    payload: { post },
  };
};

export const addInfiniteScroll = (data) => {

  return {
    type: "addInfiniteScroll",
    payload: { data },
  }
}
export const getCommentsData = (data) => {
  return {
    type: "getCommentsData",
    payload: { data },
  }
}

export const navdropmenu = (menu) => {

  return {
    type: "navdropmenu",
    payload: menu,
  }
}


export const windowWidthMenu = (window) => {

  return {
    type: "windowWidth",
    payload: window
  }
}

export const isLogin = (window) => {

  return {
    type: "IsLogin",
    payload: window
  }
}


export const qrcode = (data) => {

  return {
    type: "QrCode",
    payload: data
  }
}
export const showLoginForm = (data) => {

  return {
    type: "showLoginForm",
    payload: data
  }
}

export const successMessage = (data) => {

  return {
    type: 'successMessage',
    payload: data
  }
}

export const setEmail = (data) => {


  return {
    type: 'setEmail',
    payload: data
  }
}

export const loginWithGoogle = (
  googleUsername = "",
  googleEmail = "",
  googlePhotoURL = "") => {
  return {
    type: 'loginWithGoogle',
    payload: {
      googleUsername,
      googleEmail,
      googlePhotoURL,
    }
  }
}

export const loginUser = (username="", email="", photoURL="") => {
  return {
    type: "loginUser",
    payload: { username, email , photoURL},
    
  };
};

export const userLogout = () => {
  return {
    type: "userLogout",
  };
};
export const popularTab = (data) => {
  return {
    type: "popularTab",
    payload: data
  };
};