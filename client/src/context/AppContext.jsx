import { createContext } from "react";

export const AppContext = createContext()
 
export const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(flase)


  const value = {
    backendUrl,
    isloggedIn, setIsLoggedIn,
    userData, setUserData

  }
  
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}