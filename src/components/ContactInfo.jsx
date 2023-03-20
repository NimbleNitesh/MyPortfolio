import React from 'react'

const contactInfo = () => {
	return (
		<div className="contacts">
		<h1>Get In Touch</h1>
		<div className="container contact__container">
			<div className="about__contact">
			<div className="contactOption">
				<a href="mailto:nitesh_2001me42@iitp.ac.in" className="about_card_contact">
					<h5 className="high">Email</h5>
					<small className="emailid">nitesh_2001me42@iitp.ac.in</small>
					<h6 className="highlight">Send a mail</h6>
				</a>
				<a href="https://t.me/HorridBear" className="about_card_contact">
					<h5 className="high">Telegram</h5>
					<small>HorridBear</small>
					<h6 className="highlight">Send a message</h6>
				</a>
				<a href="https://discordapp.com/users/781841339829714946" className="about_card_contact">
					<h5 className="high">Discord</h5>
					<small>UnaidedCan #1491</small>
					<h6 className="highlight">Send a message</h6>
				</a>
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