import React, { useState } from 'react';
import './ServiceCard.css';

function ServiceCard({ id, img, title, setShowDetails }) {

	return (
		<div className='serviceCard' onClick={() => setShowDetails({ show: true, id })}>
			<img src={`./images/${img}`} alt={img} />
			<h4>{title}</h4>
		</div>
	)
  }

export default ServiceCard;