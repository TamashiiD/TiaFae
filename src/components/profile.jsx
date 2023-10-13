import React from "react";
import BeautifulDropdown from "./navbar";
import LogIn from "./login";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile (){
    const { isAuthenticated, user } = useAuth0();

    return(
        <>

        {isAuthenticated ?
            <div> 
                <BeautifulDropdown/>
                <h1>My profile</h1>
            </div>:
            
            <LogIn/>}
        </>
    )

}