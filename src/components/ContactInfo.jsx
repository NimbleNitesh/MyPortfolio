import React from 'react'
import message from "../assets/message.gif";

const contactInfo = () => {
	return (
		<div className="contacts">
		<h1>Get In Touch</h1>
		<div className="container contact__container">
			<div className="about__contact">
			<div className="contactOption">
				<img src={message} alt="message" width={500} height={500} style={{borderRadius: '7rem'}}/>
			</div>
			<form action="">
				<input type="text" name="name" placeholder="Your Full Name" required/>
				<input type="email" name="email" placeholder="Your Email" required/>
				<textarea name="message" rows="7" placeholder="Your Message"></textarea>
				<button type="submit" className="CTA">Send Message</button>
			</form>
			</div>
		</div>
		</div>
	)
}

export default contactInfo