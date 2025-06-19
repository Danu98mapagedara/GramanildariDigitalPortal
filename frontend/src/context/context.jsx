
import React, { createContext, useContext,useState,useEffect} from "react";
import  initialUserData from "../constants/user";


const UserContext = createContext();


const context = ({children}) => {



    const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored ? JSON.parse(stored) : initialUserData;
  });

 useEffect(() => {
  localStorage.setItem('userData', JSON.stringify(userData));
},[userData]);

  return (

    <UserContext.Provider value={{userData, setUserData}}>
        {children}
        </ UserContext.Provider>

   
  )
}

export default context

export const useUser = () => {
  return useContext(UserContext);
};
