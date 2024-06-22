import { useState } from 'react';
import '../styles/general.css'

function General() {
    const [name, setName] = useState('John');
    const [email, setEmail] = useState('example@gmail.com');
    const [number, setNumber] = useState(2398323833);
    const [completed, SetCompleted] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        SetCompleted(prev => prev ^ 1);
    };
    if(!completed){
        return(
            <>
                <div className="general-heading">General Information</div>
                <form className='general-container' onSubmit={handleSubmit}>
                    <div className='label-container'>
                        <label htmlFor='general-name' id='label-name'>Name:</label>
                        <label htmlFor='general-email' id='label-email'>Email:</label>
                        <label htmlFor='general-no' id='label-no'>Phone Number:</label>
                    </div>
                    <input type="text" value = {name} onChange={(event) => setName(event.target.value)} id='general-name' placeholder='John' required/>
                    <input type="email" value = {email} onChange={(event) => setEmail(event.target.value)} id='general-email' placeholder='example@gmail.com' required/>
                    <input type="number" value = {number} onChange={(event) => setNumber(event.target.value)} id='general-no' placeholder='2398323833' min={1000000000} max={9999999999} required/>
                    <div className='form-sub'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )
    }
    else{
        return(
            <>
            <div className="general-heading">General Information</div>
            <div className='general-comp-cont'>
                <div className='general-comp-heading'>{'Name: ' + name}</div>
                <div className='general-comp-heading'>{'Email: ' + email}</div>
                <div className='general-comp-heading'>{'Phone Number: ' + number}</div>
                <button onClick={() => SetCompleted(completed ^ 1)}>Edit</button>
            </div>
            </>
        )
    }
}

export default General;