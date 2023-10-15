import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import BeautifulDropdown from "./navbar";
import { userID } from "./functions/user-id";



function writeUserDataname(id, name) {
    set(ref(database, 'users/' + id), {
        username: name,
    });
}
function writeUserDatastatus(id, status) {
    set(ref(database, 'users/' + id + "/status"), {
        status: status,
    });
}
function writeUserDataPfp (id, image){
    set(ref(database, "users/"+ id + "/image"),{
        url: image
    })
}
export default function Settings() {
    const [disabled, setdisabled] = useState(true)
    const [disabled2, setdisabled2] = useState(true)
    const [disabled3, setdisabled3] = useState(true)

    const [username, setUsername] = useState("")
    const [status, setStatus] = useState("")

    const [image, setImage] = useState("")



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
        let updatedID = userID(user.email)
        console.log("updatedid from settings", updatedID)
        e.preventDefault()
        writeUserDataname(updatedID, username)
        setUsername("")
        setdisabled(true)
    }

    const handleclickstatus = (e) => {
        let updatedID = userID(user.email)
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
    const handleimage = (e) => {
         e.preventDefault() 
         setImage(e.target.value)
         if (e.target.value.length > 0) {
            setdisabled3(false)
        }
       
    }

    const handleclickpfp = (e) => {
        let updatedID = userID(user.email)
        e.preventDefault()
        writeUserDataPfp (updatedID, image)
        setdisabled2(true)
        setImage("")
    }

    return (
        <>
            <BeautifulDropdown />
            <form style={form} onSubmit={handlesubmit}>
                Change Username <input value={username} onChange={handlechange} type="text" maxLength={15} placeholder="username"></input>
                <button disabled={disabled} onClick={handleclick}>Submit</button>

                Update Status <input value={status} onChange={handlestatus} type="text" maxLength={100} placeholder="Hello World"></input>
                <button disabled={disabled2} onClick={handleclickstatus}>Submit</button>

                Change Profile Picture <input value={image} onChange={handleimage} type="text" placeholder="paste image url here"></input>
                <button disabled={disabled3} onClick={handleclickpfp}>Submit</button>
            </form>
        </>
    )
}