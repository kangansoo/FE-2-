import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownGenres from '../components/DropDownGenres';

export default function Navbar() {
  const subsr = localStorage.getItem('subsr');

  return (
    <div className='NavBar'>
        <div className='LinkContainer'>
          <Link to='/main' className='NavbarLink'>
              <span className='Logo'>LOGO</span>
          </Link>
        </div>
        
          {/* <Link to='/search'> */}
            <DropDownGenres>
              
            </DropDownGenres>
              {/* </Link> */}
          
        <div className="SubsrContainer"> 
          <DropDownSubsr>
            {subsr}
          </DropDownSubsr>
        </div>
    </div>
  )
}
