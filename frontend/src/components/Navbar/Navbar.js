import React from 'react'
import "./Navbar.css"
import meet from '../../assets/meeting.png'
import { Link } from '@mui/material'


const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="navbar_img">
          <img src={meet} alt="" height={45} width={45}/>
        </div>
        <div className="navbar_title">
          <h4>Interview Target</h4>
        </div>
      </div>
      <div className="navbar_right">
        <div className="nav_list">
          <ul className="list_item">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">How it Works</a></li>
          </ul>
        </div>

        <div className="navbar_login">
          <div className="nav_login">
            <a href="/">Login</a>
          </div>
          <div className="nav_start">
            <button><Link href="/live">Get Started</Link></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar