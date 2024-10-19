import "../css/contact.css"
import React from 'react';

export function Contact(){
    return (
        <div className="container">


            <h1>Got something to say? Contact Us!</h1>
            <form className="contact-form">
                <label className='contact-label' htmlFor="fname">First Name</label>
                <input className='contact-text' type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label className='contact-label' htmlFor="lname">Last Name</label>
                <input className='contact-text' type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label className='contact-label' htmlFor="country">Country</label>
                <select className='contact-text' id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="philippines">Philippines</option>
                </select>

                <label className='contact-label' htmlFor="subject">Subject</label>
                <textarea className='contact-text' id="subject" name="subject" placeholder="Write something.."></textarea>

                <input className='contact-submit' type="submit" value="Submit" />
            </form>
        </div>
    )
}