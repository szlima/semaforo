

import Light from './Light';

import './styles/trafficLight.css';

function TrafficLight({lights, selectedColor, changeSelectedColor}){

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