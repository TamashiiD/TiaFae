import { useAuth0 } from "@auth0/auth0-react";
import Home from './components/home';
import './App.css'
import LogIn from './components/login';
import BeautifulDropdown from "./components/navbar";

function App() {
const { isAuthenticated } = useAuth0()




  return (
    <>    
    {!isAuthenticated && <LogIn/>}
     {isAuthenticated && <Home/>}
   </>
  )
}

export default App
