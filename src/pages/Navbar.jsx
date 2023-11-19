import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"
import DropDownSubsr from '../components/DropDownSubsr';

export default function Navbar() {
  const subsr = localStorage.getItem('subsr');

  return (
    <div className='NavBar'>
        <Link to='/main'>
            <span>LOGO</span>
        </Link>
        <Link to='/search'>
            <SearchIcon className='NavBarSearchIcon' color="white"></SearchIcon>
        </Link>
        
        <DropDownSubsr>
         {subsr}
        </DropDownSubsr>

    </div>
  )
}
