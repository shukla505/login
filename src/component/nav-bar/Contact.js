import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        
        if (name && email && subject && message) {
            const serviceId = 'service_id';
            const templateId = 'template_id';
            const userId = 'user_id';
            const templateParams = {
                name,
                email,
                subject,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="contact-form">
        
            <div className='right'>

            <input type="text" className="input-1" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /><br></br>
            <input type="email" className="input-1" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><br></br>
            <input type="text" className="input-1" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)} /><br></br><br></br>
            <textarea placeholder="Your message" className="textarea-1" value={message} onChange={e => setMessage(e.target.value)}></textarea><br></br><br></br>
            <button onClick={submit} className="button-1">Send Message</button><br></br><br></br>

            <span className={emailSent ? 'visible' : null} style={{color:"green"}}><h1>Thank you for your contact, we will be in touch in on time!</h1></span>
            </div>
            <div>.</div>
          

        </div>
       
    );
};


export {Contact};