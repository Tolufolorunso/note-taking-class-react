import React, { useReducer, useContext } from "react";
import reducer from "./appReducer";
import {
  REGISTER_BEGIN,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './action';


const AppContext = React.createContext();


const user = localStorage.getItem("user")
const token = localStorage.getItem("token")

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token ? token : null,
  error: "",
  success: ""
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  async function register(data) {
    dispatch({type: REGISTER_BEGIN})
   try {
      const response = await fetch("http://localhost:4000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      })
     const result = await response.json()
  
      if (result.status) {
        dispatch({ type: REGISTER_SUCCESS, payload: result.message })
        
        
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      dispatch({type: REGISTER_ERROR, payload: error.message })
    }
}

  return (
    <AppContext.Provider value={{...state,register}} >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };


