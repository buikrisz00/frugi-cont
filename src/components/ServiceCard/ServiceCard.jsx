import React from 'react';
import './ServiceCard.css';

function ServiceCard({ img, text}) {
  return (
    <div className='serviceCard'>
        <img src={`./images/${img}`} alt={img} />
        <h4>{text}</h4>
    </div>
  )
}

export default ServiceCard;