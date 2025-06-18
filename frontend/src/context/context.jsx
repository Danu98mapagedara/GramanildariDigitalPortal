import React from 'react'
import React, { createContext, useContext,useEffect } from "react";
import  userData from "../constants/user";


const UserContext = createContext();


const context = ({children}) => {
  return (

    <UserContext.Provider value={userData}>
        {children}
        
        </ UserContext.Provider>

   
  )
}

export default context