import { useState } from 'react';
import '../styles/general.css';
import { v4 as uuid } from 'uuid';
import PracticalElement from './PracticalElement';

function Practical() {
    const [elements, setElements] = useState([uuid()]);

    function addElement() {
        setElements([...elements, uuid()]);
    }

    function removeElement(id) {
        const newArray = elements.filter(elementId => elementId !== id);
        setElements(newArray);
    }

    return (
        <>
            <div className='edu-heading'>Practical Experience</div>
            {elements.map(id => (
                <PracticalElement key={id} id={id} removeElement={removeElement} />
            ))}
            <div className='edu-button'>
                <button onClick={addElement}>+</button>
            </div>
        </>
    );
}

export default Practical;
