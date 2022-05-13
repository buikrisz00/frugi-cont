import React from 'react';
import './WhyOzoneSection.css';

function WhyOzoneSection() {
    return (
        <section id='whyOzoneSection'>
            <h3 className='title'>Miért minket válasszon?</h3>
            <div className="advantageCard">
                <img src="./frugi-cont/images/bacteria.png" alt="Bacteria" />
                <div>
                    <h4>Megöli a falakon megtelepedett penészt és gombákat</h4>
                    <h4>Elpusztítja a baktériumokat és vírusokat</h4>
                    <h4>Elpusztítja a koronavírust is</h4>
                </div>
            </div>
            <div className="advantageCard">
                <img src="./frugi-cont/images/fresh.png" alt="Bacteria" />
                <div>
                    <h4>Pollenmentesít</h4>
                    <h4>Tiszta, és egészséges levegőt biztosít</h4>
                    <h4>Lakások, irodák, légkondícionáló eszközök és nagyobb terek tisztítására és fertőtlenítésére is alkalmas</h4>
                </div>
            </div>
            <div className="advantageCard">
                <img src="./frugi-cont/images/smell.png" alt="Bacteria" />
                <div>
                    <h4>Megszünteti a kellemetlen szagokat</h4>
                    <h4>Ajánlott légúti megbetegedéssel / allergiával élők számára</h4>
                    <h4>Ajánlot dohányzást elhagyók számára</h4>
                </div>
            </div>
        </section>
    )
}

export default WhyOzoneSection;