


import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

 const ProtectedRoutes = ({children}) => {

    const login = useSelector((store) => store.isLoggedIn);
    console.log(login)

    if(!login){
      return  <Navigate to="/"/>
    }


  return children
}

export default ProtectedRoutes