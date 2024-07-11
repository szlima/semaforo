
import './styles/light.css';

function Light({light, turnOff=true, selectColor, index}){

    const handleKeyDown= e => {
        if(e.key === 'Enter')
            selectColor();
    };

    return (
        <div
            className={`light light--${light.color} ${turnOff && 'light--turn-off'}`}
            tabIndex={index} aria-label={light.name}
            onClick={selectColor} onKeyDown={handleKeyDown}>
        </div>
    );
}

export default Light;