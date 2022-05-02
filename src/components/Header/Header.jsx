import React from 'react';
import './Header.css';
import { IoLocationOutline } from 'react-icons/io5';

function Header() {
  return (
    <header>
        <div>
            <IoLocationOutline className='locationIcon'/>
            <h4>Dunakeszi, Magyarország</h4>
        </div>
        <div>
            <h4>+36-70-338-4734</h4>
            <span>|</span>
            <h4>eradicatedpest@gmail.com</h4>
        </div>
    </header>
  )
}

export default Header