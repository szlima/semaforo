
import './styles/light.css';

function Light({color, turnOff=true}){

    return (
        <div className={`light light--${color} ${turnOff && 'light--turn-off'}`}></div>
    );
}

export default Light;