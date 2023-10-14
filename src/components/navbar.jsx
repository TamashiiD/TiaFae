import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./profile";

const BeautifulDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Menu');
    const options = [
      'Home',
      'Profile',
      'Settings',
      'Log Out'
      
    ];
  

    const { logout } = useAuth0();




    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      if(option === "Log Out"){
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      
    };

    return (
      <>

      <div className="beautiful-dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption}
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} onClick={() => {selectOption(option);}
              }>
                {option === "Profile" && <Link className="links" to="/profile">Profile</Link> }
                {option === "Home" && <Link className="links" to="/home">Home</Link>}
               {option === "Settings" && <Link className="links" to="/profile/settings">Settings</Link>}

                {option === "Log Out" && option}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      </>
    );
  };
 
  export default BeautifulDropdown;
  

