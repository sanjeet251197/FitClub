import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_laf12mh', 'template_hgb4jpe', form.current, 'OJ3c_qDypIRGw4dBH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
<div className="Join" id="join-us">
    <div className="left-j">
    <hr />
        <div>
            <span className='stroke-text'>READY TO </span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY </span>
            <span className='stroke-text'>WITH US</span>
        </div>
    </div>
    <div className="right-j"></div>
    <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your email address' />
        <button className='btn btn-j'>Join Now</button>
    </form>
</div>
  )
}

export default Join
