import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownGenres from '../components/DropDownGenres';

export default function Navbar() {

  return (
    <div className='NavBar'>
        <div className='LinkContainer'>
          <Link to='/main' className='NavbarLink'>
              <span className='Logo'>LOGO</span>
          </Link>
        </div>
        
          {/* <Link to='/search'> */}
           <div className="GenreMenu"> 
            <DropDownGenres>
              
            </DropDownGenres>
              {/* </Link> */}
            </div>
        <div className="SubsrContainer"> 
          <DropDownSubsr>
            
          </DropDownSubsr>
        </div>
    </div>
  )
}
