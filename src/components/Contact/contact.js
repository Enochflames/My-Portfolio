import React, { useRef } from 'react'
import "./contact.css"
import Walmart from "../../assets/walmart.jpeg";
import Adobe from "../../assets/Adobe.jpeg";
import Microsoft from "../../assets/microsoft.jpeg";
import Facebook from "../../assets/facebook.jpeg";
import Linkedin from "../../assets/images.png";
import Twitter from "../../assets/x.jpeg";
import Instagram from "../../assets/instagramjpeg";
import YoutubeIcon from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(); 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m3bmu7g', 'template_s5tvoxs', form.current, {
            publicKey: '-8R6ullQ8h5ukoYnV3aEL',
          })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent')
            },
            (error) => {
              console.log(error.text);
            },
          );
         };
  return (
    <section id="contactPage">
        <div id="clients">
<h1 className="contactPageTitle">My Clients</h1>
<p className="clientDesc">Over the years, I've had the opportunity to work with notable Companies like:</p>
<div className="clientImgs">
    <img src={Walmart} alt="Client" className="clientImg" />
    <img src={Adobe} alt="Client" className="clientImg" />
    <img src={Microsoft} alt="Client" className="clientImg" />
    <img src={Facebook} alt="Client" height="100px" className="clientImg" />
</div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea className="msg" name="message"rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="send" className="submitBtn">submit</button>
                <div className="Links">
                 <img src={Linkedin} alt="linkedin" className="link" /> 
                 <img src={Twitter} alt="twitter" className="link" /> 
                 <img src={Instagram} alt="instagram" className="link" />   
                 <img src={YoutubeIcon} alt="youtube" className="link" />       
                </div>

            </form>
        </div>
    </section>
  )
}

export default Contact