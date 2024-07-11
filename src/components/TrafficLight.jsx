import { useEffect } from 'react';

import Light from './Light';

import './styles/trafficLight.css';

function TrafficLight({lights, selectedColor, changeSelectedColor}){

    const changeColorAuto= () => {
        changeSelectedColor(id =>
            (id === (lights.length-1) ? 0 : (id+1))
        );
    };

    useEffect(() => {
        const timeout= setTimeout(changeColorAuto, 5000);
        return () => clearTimeout(timeout);
    }, [selectedColor]);

    return (
        <div className="traffic-light">
            {
                lights.map((light, i) =>
                    <Light key={i} light={light} turnOff={i!==selectedColor}
                        selectColor={() => changeSelectedColor(i)} index={i}/>
                )
            }
        </div>
    );
}

export default TrafficLight;