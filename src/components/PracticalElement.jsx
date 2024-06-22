import { useState } from 'react';
import '../styles/general.css';

function PracticalElement({ id, removeElement }) {
    const [data, setData] = useState({
        company: 'XYZ company',
        positionTitle: 'SDE',
        responsibilites: '',
        from: 'June 2000',
        to: 'May 2100',
        id: id,
    });
    const [completed, setCompleted] = useState(0);

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }

    if(!completed){
        return (
            <div className="edu-element">
                <input
                    type="text"
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    placeholder="Name of Company"
                    className='edu-input'
                    required
                />
                <input
                    type="text"
                    name="positionTitle"
                    value={data.positionTitle}
                    onChange={handleChange}
                    placeholder="Positon in the Company"
                    className='edu-input'
                    required
                />
                <input
                    type="text"
                    name="responsibilites"
                    value={data.responsibilites}
                    onChange={handleChange}
                    placeholder="List Responsibilites"
                    className='edu-input'
                    required
                />
                <input
                    type="text"
                    name="from"
                    value={data.from}
                    onChange={handleChange}
                    placeholder="June 2000"
                    className='edu-input'
                    required
                />
                <input
                    type="text"
                    name="to"
                    value={data.to}
                    onChange={handleChange}
                    placeholder="May 2100"
                    className='edu-input'
                    required
                />
                <div>
                    <button onClick={() => setCompleted(completed ^ 1)}>Submit</button>
                    <button onClick={() => removeElement(id)}>Remove</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <>
                <div className='general-comp-cont edu-cont'>
                    <div className='general-comp-heading edu-ele'>{'Company Name: ' + data.company}</div>
                    <div className='general-comp-heading edu-ele'>{'Positon Title: ' + data.positionTitle}</div>
                    <div className='general-comp-heading edu-ele'>{'Main Responsibilites: ' + data.responsibilites}</div>
                    <div className='general-comp-heading edu-ele'>{'From: ' + data.from}</div>
                    <div className='general-comp-heading edu-ele'>{'To: ' + data.to}</div>
                    <button onClick={() => setCompleted(completed ^ 1)}>Edit</button>
                </div>
            </>
        )
    }
}

export default PracticalElement;
