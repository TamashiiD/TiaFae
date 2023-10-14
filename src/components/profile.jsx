import React, { useState } from "react";
import BeautifulDropdown from "./navbar";
import LogIn from "./login";
import { useAuth0 } from "@auth0/auth0-react";
import { getDatabase, ref, set } from "firebase/database";


function writeUserData(userId, name) {
    const db = getDatabase();
    try{
       set(ref(db, 'users/' + userId), {
        username: name,
    });  
    }
    catch{
        console.log("the error is here")
    }
   

}


export default function Profile() {
    const [disabled, setdisabled] = useState(true)
    const [username, setUsername] = useState("")
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();


    const handlesubmit = () => {
        e.preventDefault()
        setdisabled(true)
    }
    const handleclick = () => {
        e.preventDefault()

        if (user) {
            const userId = user.email
            writeUserData(userId, username)

        }
        else {
            loginWithRedirect()
        }




        //logic for db
    }
    const handlechange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
        if (username.length > 2) {
            setdisabled(false)
        }
        if (username.length === 1) {
            setdisabled(true)
        }
    }

    return (
        <>

            {isAuthenticated ?
                <div>
                    <BeautifulDropdown />
                    <h1>My profile<br/>Under Construction</h1>
                    <form onChange={handlechange} onSubmit={handlesubmit} style={{ display: "flex", flexDirection: "row", }}>
                        <input type="text" placeholder="username"></input>
                        <button disabled={disabled} onClick={handleclick}>Submit</button>
                    </form>


                </div> :

                <LogIn />}
        </>
    )

}