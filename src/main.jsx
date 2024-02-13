import * as React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import "./index.css";
import { postReducer } from './reducer.js'
import { createStore } from 'redux'
import { Provider as ReactReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from 'notistack';


const handleEndered = () => {
  console.log("handleEndered")
}

const store = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ReactReduxProvider  store={store}>
      <SnackbarProvider  anchorOrigin={{horizontal:'center' , vertical:'bottom'}} style={{backgroundColor:'white', color:'black',height:'60px', width:'540px',boxShadow:'none' ,border:'1px solid #DAE0E9'}} maxSnack={15}>
        <App />
      </SnackbarProvider>
    </ReactReduxProvider>
  </BrowserRouter>

)
