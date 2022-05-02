import React, { useState } from 'react';
import './LandingForm.css';

function LandingForm() {
    const [formValue, setFormValue] = useState(
        { name: "", phone: "", service: "", location: "" }
    )

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue(
            { ...formValue, [name]: value }
        )
    }

    return (
        <form className='landingForm'>
            <h2>Kérjen visszahívást:</h2>
            <input type="text" name="name" id="name" placeholder="Név" value={formValue.name} onChange={handleChange} />
            <input type="text" name="phone" id="phone" placeholder="Telefonszám" value={formValue.phone} onChange={handleChange} />
            <input type="text" name="service" id="service" placeholder="Melyik szolgáltatás érdekli?" value={formValue.service} onChange={handleChange} />
            <input type="text" name="location" id="location" placeholder="Melyik város / kerület?" value={formValue.location} onChange={handleChange} />
            <button>Visszahívást kérek!</button>
        </form>
    )
}

export default LandingForm