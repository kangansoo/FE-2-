import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"


export default function Navbar() {

  return (
    <div className='NavBar'>
        <Link to='/main'>
            <span>LOGO</span>
        </Link>
        <Link to='/search'>
            <SearchIcon className='NavBarSearchIcon' color="white"></SearchIcon>
        </Link>
        
        <Link to='/mypage'>
            유저이름
        </Link>

    </div>
  )
}
