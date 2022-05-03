import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

function Services() {
    const services = [
        {img: "csotany.JPG", text: "Csótányírtás"},
        {img: "hangya.JPG", text: "Hangyaírtás"},
        {img: "legy.JPG", text: "Légyírtás"},
        {img: "moly.JPG", text: "Molyírtás"},
        {img: "poloska.JPG", text: "Poloskaírtás"},
        {img: "ragcsalo.JPG", text: "Rágcsáló írtás"},
        {img: "fertotlenit.JPG", text: "Általános fertőtlenítés"}
    ]

    return (
        <div className='services'>
            <h3 className='title'>Szolgáltatásaink</h3>
            <div className='serviceCards'>
                {services.map((service, index) => <ServiceCard key={index} img={service.img} text={service.text} /> )}
                
            </div>
        </div>
    )
}

export default Services