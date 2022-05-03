import React from 'react';
import LandingForm from '../LandingForm/LandingForm';
import './LandingSection.css';

function LandingSection() {
    return (
        <section id='landingSection'>
            <nav>
                <img src="" alt="Logo" />
                <ul>
                    <a href="#chooseUs"><li>Rólunk</li></a>
                    <a href="#services"><li>Szolgáltatások</li></a>
                    <a href="#contactSection"><li>Kapcsolat</li></a>
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