import React, { useState } from "react";
import BeautifulDropdown from "./navbar";
import LogIn from "./login";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const options = ["Tag! You're It!", "Run, You Are Not It"]

function Home() {
    const { isAuthenticated } = useAuth0();

    const username = "username"


    return (
        <div id="HOME">
            {isAuthenticated ?
                <div>
                    <BeautifulDropdown />
                    <h1> Hello World </h1>
                    <p> Wanna Play Tag?</p>
                    <button > <Link className="links" to="/taggame">Touch</Link> </button>
                    <p> Wanna Play Steal the Bacon?</p>
                    <button><Link className="links" to="/stealthebacon">Touch</Link></button>
                    <div id="globe"></div>
                </div> :

                <LogIn />
            }
        </div>
    )

}

export default Home 