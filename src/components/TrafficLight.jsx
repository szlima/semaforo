

import Light from './Light';

import './styles/trafficLight.css';

function TrafficLight(){

    return (
        <div className="traffic-light">
            <Light color='red'/>
            <Light color='yellow'/>
            <Light color='green'/>
        </div>
    );
}

export default TrafficLight;