import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"

export default function Navbar() {
  const email = localStorage.getItem('email');

  return (
    <div className='NavBar'>
        <Link to='/main'>
            <span>LOGO</span>
        </Link>
        <Link to='/search'>
            <SearchIcon className='NavBarSearchIcon' color="white"></SearchIcon>
        </Link>
        
        <Link to='/mypage'>
         {email}
        </Link>

    </div>
  )
}
