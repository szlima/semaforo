

import Light from './Light';

import './styles/trafficLight.css';

function TrafficLight(){

    return (
        <div className="traffic-light">
            <Light />
            <Light />
            <Light />
        </div>
    );
}

export default TrafficLight;