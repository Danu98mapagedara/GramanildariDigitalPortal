
import React, { createContext, useContext,useState} from "react";
import  initialUserData from "../constants/user";


const UserContext = createContext();


const context = ({children}) => {

    const [userData, setUserData] = useState(initialUserData);
  return (

    <UserContext.Provider value={{userData, setUserData}}>
        {children}
        </ UserContext.Provider>

   
  )
}

export default context

export const user = () => {
  return useContext(UserContext);
};
