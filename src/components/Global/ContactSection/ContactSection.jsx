import React, { useState } from 'react';
import './ContactSection.css';
import { IoLocationOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';


function ContactSection() {
    const [formData, setFormData] = useState(
        { contactName: "", contactPhone: "", contactMail: "", contactService: "", contactMessage: "" }
    )

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <section id='contactSection'>
            <div className='contactInfo'>
                <h3 className='title'>Kapcsolat</h3>
                <div className='contactInfoCards'>
                    <div className="contactInfoCard">
                        <IoLocationOutline className='icon' />
                        <div>
                            <h3>Iroda cím</h3>
                            <h5>2120, Dunakeszi Mária utca 23.</h5>
                        </div>
                    </div>
                    <div className="contactInfoCard">
                        <FiPhoneCall className='icon' />
                        <div>
                            <h3>Telefonszám</h3>
                            <h5>+36-70-338-4734</h5>
                        </div>
                    </div>
                    <div className="contactInfoCard">
                        <GoMail className='icon' />
                        <div>
                            <h3>E-mail cím</h3>
                            <h5>eradicatedpest@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>

            {!formSubmitted ? <form onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
            }}>
                <h2>Lépjen kapcsolatba velünk</h2>
                <div>
                    <input type="text" name="contactName" id="contactName" placeholder='Név' value={formData.contactName} onChange={handleChange} required />
                    <input type="text" name="contactPhone" id="contactPhone" placeholder='Telefonszám' value={formData.contactPhone} onChange={handleChange} required />
                </div>
                <div>
                    <input type="text" name="contactMail" id="contactMail" placeholder='E-mail' value={formData.contactMail} onChange={handleChange} required />
                    <input type="text" name="contactService" id="contactService" placeholder='Szolgáltatás' value={formData.contactService} onChange={handleChange} required />
                </div>
                <textarea name="contactMessage" id="contactMessage" cols="30" rows="10" placeholder='Üzenet...' value={formData.contactMessage} onChange={handleChange} required />
                <button>Küldés</button>
            </form>
            :
            <form>
                <h2 className='confirmationTxt'>Köszönjük!<br/><br/> Munkatársunk 24 órán belül válaszolni fog üzenetére!</h2>
            </form>
            }
        </section>
    )
}

export default ContactSection;