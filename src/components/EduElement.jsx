import { useState } from 'react';
import '../styles/general.css';

function EduElement({ id, removeElement }) {
    const [data, setData] = useState({
        school: 'XYZ school',
        titleOfStudy: 'CSE',
        date: 'June 2020',
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
                    name="school"
                    value={data.school}
                    onChange={handleChange}
                    placeholder="School"
                    className='edu-input'
                />
                <input
                    type="text"
                    name="titleOfStudy"
                    value={data.titleOfStudy}
                    onChange={handleChange}
                    placeholder="Title of Study"
                    className='edu-input'
                />
                <input
                    type="text"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    placeholder="Date"
                    className='edu-input'
                />
                <div>
                    <button className='edu-edit' onClick={() => setCompleted(completed ^ 1)}>Submit</button>
                    <button className='edu-remove' onClick={() => removeElement(id)}>Remove</button>
                </div>
            </div>
        );
    }
    else{
        return(
            <>
                <div className='general-comp-cont edu-cont'>
                    <div className='general-comp-heading edu-ele'>{'School Name: ' + data.school}</div>
                    <div className='general-comp-heading edu-ele'>{'Title Of Study: ' + data.titleOfStudy}</div>
                    <div className='general-comp-heading edu-ele'>{'Date: ' + data.date}</div>
                    <button onClick={() => setCompleted(completed ^ 1)}>Edit</button>
                </div>
            </>
        )
    }
}

export default EduElement;
