import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";


function Sidebar() {

  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div className='m-3 position-fixed'>
      <div className='d-flex flex-column gap-3'>
        <img className="logo-text" src="src\assets\instagram-text.png" alt="" />
        <div><i className="bi bi-house-door"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Message</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div onClick={()=>navigate("/create")}><i className="bi bi-file-plus"></i><span className="sidebar-text">Create</span></div>
        <div onClick={() => {navigate('/profile')}}><i className="bi bi-person-circle" ></i>Profile</div>
      </div >
      <div className='position-fixed bottom-0 mb-3 d-flex flex-column gap-3'>
        <div onClick={toggleTheme}><i className={darkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
          <span className="sidebar-text"> {darkMode ? "Light Mode" : "Dark Mode"} </span>
        </div>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
      </div>
    </div>
  )
}

export default Sidebar 