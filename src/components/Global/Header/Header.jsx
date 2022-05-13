import React, { useState } from 'react';
import './Header.css';
import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header() {
    const [selectedSite, setSelectedSite] = useState("pest");

    return (
        <header>
            <div className='headerLocation'>
                <IoLocationOutline className='locationIcon'/>
                <h4>Dunakeszi, Magyarország</h4>
            </div>
            <div>
                <Link to="/" className='link'>
                    <h4 className={selectedSite === "pest" ? "selected" : null} onClick={(e) => {
                        console.log(e.target);
                        setSelectedSite("pest");
                    }}>Rovarírtás</h4>
                </Link>
                <span>|</span>
                <Link to="/ozone" className='link'>
                    <h4 className={selectedSite === "ozone" ? "selected" : null} onClick={(e) => {
                    console.log(e.target);
                    setSelectedSite("ozone");
                    }}>Ózonos fertőtlenítés</h4>
                </Link>
            </div>
            <div>
                <h4>+36-70-338-4734</h4>
                <span>|</span>
                <h4>eradicatedpest@gmail.com</h4>
            </div>
        </header>
    )
}

export default Header;