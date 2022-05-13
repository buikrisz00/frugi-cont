import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Services from '../Services/Services';
import './AboutSection.css';

function AboutSection() {
    return (
        <section id='aboutSection'>
            <ChooseUs />
            <Services />
        </section>
    )
}

export default AboutSection