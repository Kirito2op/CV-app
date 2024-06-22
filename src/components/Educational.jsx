import { useState } from 'react';
import '../styles/general.css';
import { v4 as uuid } from 'uuid';
import EduElement from './EduElement';

function Educational() {
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
            <div className='edu-heading'>Educational Experience</div>
            {elements.map(id => (
                <EduElement key={id} id={id} removeElement={removeElement} />
            ))}
            <div className='edu-button'>
                <button onClick={addElement}>+</button>
            </div>
        </>
    );
}

export default Educational;
