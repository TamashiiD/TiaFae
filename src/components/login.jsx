import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useRef } from "react";

function LogIn() {
  // const [buttonclicked, setButtonclicked] = useState(false)
  const buttonRef = useRef(null)
  const { loginWithRedirect } = useAuth0();

  const handleclick = () => {
    // show button
    // onclick, show please wait...
    let child = document.getElementById("child")
    buttonRef.current.removeChild(child)
    const loadingDiv = document.createElement("div");
    loadingDiv.innerText = "Loading...";
    buttonRef.current.appendChild(loadingDiv)
    setTimeout(() => {
      loginWithRedirect()
    }, 1500)
  }

  return (
    <>
      <h1> TiaFae </h1>
      <h2> Touch From Anywhere</h2>
      <div className='likebutton' ref={buttonRef}>
        <button id="child" onClick={handleclick}>Enter</button>
      </div>
      <div id="globe"></div>
    </>
  )
}

export default LogIn