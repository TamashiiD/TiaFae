import React, { useEffect, useState } from "react";
import BeautifulDropdown from "./navbar";

import { getDatabase, ref, onValue } from "firebase/database";
import { useAuth0 } from "@auth0/auth0-react";
import { userID } from "./functions/user-id";




export default function Profile() {
    const [username, setUsername] = useState("")
    const [message, setMessage] = useState("")
    const [pfp, setPfp] = useState("")
    const { user } = useAuth0()
    const image = {
        height: "200px",
        width: "200px"
    }

    useEffect(() => {
        const db = getDatabase();
        let updatedID = userID(user.email)
        return onValue(ref(db, '/users/' + updatedID), (snapshot) => {
            const nickname = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            const status = (snapshot.val() && snapshot.val().status || "")
            const image = (snapshot.val() && snapshot.val().image || "")
            setUsername(nickname)
            setMessage(status)
            setPfp(image)
        }, {
            onlyOnce: true
        });
    }, [])

    return (
        <>


            <div>
                <BeautifulDropdown />
                <h1>Hi There, <br />{username}!</h1>
                <img style={image} src={pfp.url} alt="profile picture"></img>
                <h2>{message.status}</h2>
                <p>Stats Coming Soon</p>

            </div>
        </>
    )

}