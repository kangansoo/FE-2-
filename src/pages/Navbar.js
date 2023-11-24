import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownGenres from '../components/DropDownGenres';

export default function Navbar() {
  const subsr = localStorage.getItem('subsr');

  return (
    <div className='NavBar'>
        <Link to='/main'>
            <span>LOGO</span>
        </Link>
        
        
        {/* <Link to='/search'> */}
          <DropDownGenres>
            
            </DropDownGenres>
            {/* </Link> */}
        

        <DropDownSubsr>
         {subsr}
        </DropDownSubsr>

    </div>
  )
}
