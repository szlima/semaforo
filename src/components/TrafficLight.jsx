

import Light from './Light';

import './styles/trafficLight.css';

function TrafficLight({lights, selectedColor}){

    return (
        <div className="traffic-light">
            {
                lights.map((light,i) => <Light color={light} turnOff={i!==selectedColor}/>)
            }
        </div>
    );
}

export default TrafficLight;