import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import BeautifulDropdown from "./navbar";



function writeUserDataname(id, name) {
    set(ref(database, 'users/' + id), {
        username: name,
    });
}
function writeUserDatastatus(id, status) {
    set(ref(database, 'users/' + id +"/status"), {
        status: status,
    });
}
export default function Settings() {
    const [disabled, setdisabled] = useState(true)
    const [disabled2, setdisabled2] = useState(true)

    const [username, setUsername] = useState("")
    const [status, setStatus] = useState("")
    const { user } = useAuth0()

    const form = {
        display: "flex",
        flexDirection: "column",
        marginbottom: "2rem"
    }


    const handlesubmit = (e) => {
        e.preventDefault()
        setdisabled(true)

    }

   
   

    const handleclick = (e) => {
        const userId = user.email
        let cut = userId.indexOf("@")
        let replacethis = userId.slice(cut)
        let updatedID = userId.replace(replacethis, "")
        e.preventDefault()
        writeUserDataname(updatedID, username)
        setUsername("")
        setdisabled(true)
    }

    const handleclickstatus = (e) => {
        const userId = user.email
        let cut = userId.indexOf("@")
        let replacethis = userId.slice(cut)
        let updatedID = userId.replace(replacethis, "")
        e.preventDefault()
        writeUserDatastatus(updatedID, status)
        setStatus("")
        setdisabled2(true)
    }
    const handlechange = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
        if (username.length > 2) {
            setdisabled(false)
        }
        else if (username.length === 1) {
            setdisabled(true)
        }
        
    }

    const handlestatus = (e) => {
        e.preventDefault()
        setStatus(e.target.value)
        if (status.length > 5) {
            setdisabled2(false)
        }
        else if (status.length === 1) {
            setdisabled2(true)
        }
        
    }
    return (
        <>
        <BeautifulDropdown/> 
            <form style={form} onSubmit={handlesubmit}>
               Change Username <input value={username} onChange={handlechange} type="text" maxLength={15} placeholder="username"></input>
               <button disabled={disabled} onClick={handleclick}>Submit</button>

               Update Status <input value={status} onChange={handlestatus} type="text" maxLength={100} placeholder="Hello World"></input>
                <button disabled={disabled2} onClick={handleclickstatus}>Submit</button>
            </form>
        </>
    )
}