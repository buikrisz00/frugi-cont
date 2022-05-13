import React from 'react';
import LandingForm from '../../Global/LandingForm/LandingForm';
import './OzoneLandingSection.css';

function OzoneLandingSection() {
  return (
    <section id="ozoneLandingSection">
        <nav>
            <img src="" alt="Logo" />
            <ul>
                <a href="#chooseUs"><li>Miért fontos?</li></a>
                <a href="#services"><li>Hogyan működik?</li></a>
                <a href="#contactSection"><li>Kapcsolat</li></a>
            </ul>
        </nav>
        <div className='content'>
            <div>
                <h2>??Tiszta/egészséges légkör / Ózongenerátoros..??</h2>
            </div>
            <LandingForm />
        </div>
    </section>
  )
}

export default OzoneLandingSection;