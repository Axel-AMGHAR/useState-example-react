import React, { useState } from 'react';
import './Room.css'

const Room = (props) => {
    const [isLit, setIsLit] = useState(true);
    const [isOn, setIsOn] = useState(false);
    const [temp, setTemp] = useState(22);

    return (
        <div className="room">
            <h3> Chambre {props.chambre} :</h3>
            <div id="status" className={isLit ? 'lit' : 'free'}></div>
            <span>La chambre est {isLit ? 'disponible' : 'occupée'}</span>
            <button onClick={() => setIsLit(prev => !prev)}>
                Changer l'état
            </button>

           {!isLit && (<>
            <div id="status" className={isOn ? 'on' : 'off'}></div>
            <span>La lumière est {isOn ? 'allumée' : 'éteinte'}</span>

            <button onClick={() => setIsOn(prev =>{
                    if(!isLit)
                        return !prev;
                    else(alert('chambre dispo'))
                })}>
                {isOn ? 'Eteindre' : 'Allumer'} la lumière !
            </button>
            
            <div>Température :</div>
            <div>{temp}°C</div>
            <button onClick={() => setTemp(prev =>prev+=1)}>
                +
            </button>
            <button onClick={() => setTemp(prev => prev-=1)}>
                -
            </button>
            </>)}
        </div>
    );
};

export default Room;
