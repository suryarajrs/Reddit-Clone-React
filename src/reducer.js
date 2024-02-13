import INITIAL_STATE from "./INITIAL_STATES/INITIAL_STATE";
import INITIAL_CURRENT_USER from "./INITIAL_STATES/initial_current_user";


export const postReducer = (state = INITIAL_STATE, action = {}) => {
    // console.log("state:" + state)
    switch (action.type) {

        case "fetchPostsDetails":


            return {

                ...state,

                posts: [...action.payload.post],
            }

        case "addInfiniteScroll":
            return {
                ...state,
                posts: [...state.posts, ...action.payload.data]
            }


        case "getCommentsData":
            return {
                ...state,
                commentsData: { ...state.commentsData, ...action.payload }
            }
        case "navdropmenu":
            // console.log("navdropmenu CALLED")
            return {
                ...state,
                navdropmenu: action.payload,
            }

        case "windowWidth":
            return {
                ...state,
                windowWidth: action.payload
            }

        case "IsLogin":
            return {
                ...state,
                isLoggedIn: action.payload,
                
            }

        case "QrCode":
            return {
                ...state,
                qr: action.payload
            }

        case "showLoginForm":
            return {
                ...state,
                showLoginForm: action.payload
            }

        case "successMessage":
            return {
                ...state,
                successMessage: action.payload
            }

        case "setEmail":
            return {
                ...state,
                setEmail: action.payload
            }

        case "loginWithGoogle":
            const { googleUsername, googleEmail, googlePhotoURL } =
                action.payload;
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    username: googleUsername,
                    email: googleEmail,
                    photoURL: googlePhotoURL,
                },
                isLoggedIn: true,
                showLoginForm: "none"
            };

        case "userLogout":
            return {
                ...state,
                currentUser: { ...state.currentUser, ...INITIAL_CURRENT_USER },
                isLoggedIn: false,
            };

        case "popularTab":
            return {
                ...state,
                popularTab: action.payload
            }

        case "loginUser":
            const { username, email, photoURL } = action.payload;
        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                username: username,
                email: email,
                photoURL: photoURL,
            },
          
        };

        default:
            return INITIAL_STATE;
    }
}

