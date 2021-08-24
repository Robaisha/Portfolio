import React, { useState, useEffect } from 'react'
import "./contact.css";
import fire from './fire'


export default function Contact() {
    const [details, setDetails] = useState({
        name: "",
        cont: "",
        message: ""
    })


    const setName = (data) => {
        setDetails({ ...details, name: data.target.value })
    }
    const setContact = (data) => {
        setDetails({ ...details, cont: data.target.value })

    }
    const setMessage = (data) => {
        setDetails({ ...details, message: data.target.value })
    }
    const handleSubmit = () => {
        if (details.name && details.cont && details.message) {
            fire.database().ref('Contactform').push(details);
        }
    }
    return (
        <div className="container-fluid">
            <div className="icon">
                <h2 className='head'>CONTACT ME </h2>

            </div>
            <div className="form-card">
                <div className='container' style={{ display: 'flex', flexDirection: 'row', paddingLeft: '100px' }}>
                    <div>
                        <label htmlFor="name" >
                            NAME <br />
                            <input type="text" onChange={setName} placeholder='Enter Your Name' />
                        </label>
                        <br /><br />
                        <label htmlFor="cont">
                            PHONE   <br />
                            <input type="text" onChange={setContact} placeholder='Enter Your Phone No' />
                        </label>
                        <br />
                        <br />
                        <label htmlFor="cont">
                            INSTITUTE<br />
                            <input type="text" onChange={setContact} placeholder='Enter Your Institute' />
                        </label>
                    </div>
                    <br />

                    <div style={{ paddingLeft: '80px' }}>
                        <label htmlFor="message">
                            MESSAGE <br />
                            <textarea style={{ width: '100%' }} rows='5' cols='30' type="text" onChange={setMessage} placeholder='Enter Your Message' />
                        </label>
                    </div>
                </div>
                <input onClick={handleSubmit} style={{ textAlign: 'center', marginTop: '15px', borderRadius: 5, border: 0, width: '100px' }} type="submit" className='btn-primary' value="Submit"></input>
            </div>
        </div>
    )
}
