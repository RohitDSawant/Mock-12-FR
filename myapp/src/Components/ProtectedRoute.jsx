import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    let isAuth= true

    if(isAuth){
        <Navigate to={"/"}/>
    }
    else{
        return children
    }
    
}

export default ProtectedRoute