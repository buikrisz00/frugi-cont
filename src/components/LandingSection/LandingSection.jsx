import React from 'react';
import LandingForm from '../LandingForm/LandingForm';
import './LandingSection.css';

function LandingSection() {
    return (
        <section id='landingSection'>
            <nav>
                <img src="" alt="Logo" />
                <ul>
                    <li>Rólunk</li>
                    <li>Szolgáltatások</li>
                    <li>Kapcsolat</li>
                </ul>
            </nav>
            <div className='content'>
                <h2>Lakások védelme a váratlan betolakodóktól</h2>
                <LandingForm />
            </div>
        </section>
    )
}   

export default LandingSection