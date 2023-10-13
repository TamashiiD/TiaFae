import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

function LogIn (){
    const [apple, getApple] = useState(false)

    const { loginWithRedirect} = useAuth0();
  
    const handleclick = () => {
      if(!apple){
        getApple(true) 
        loginWithRedirect()
      }
     else{
        getApple(false)
      }
     
    }

return (
    <>
        <h1> TiaFae </h1>
        <h2> Touch From Anywhere</h2>
        <div className='likebutton'>
        {apple ? <div> Please Wait... </div> : <div> </div>} 
        {!apple ? <button onClick={handleclick}>Enter</button> : ""}
        </div>
    </>
    
    )
}

export default LogIn