import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import './contact.css'

export default function Contact(){
	return(
		<div className = "contact-page">
		<Navbar /> 
		<div className = "contact-form">
		<h1>Contact</h1>
			<form className = "act-form">
			  <div>
			    <label for="name">Name:</label><br /> 
			    <input type="text" id="name" name="name" required />
			  </div>
			  <div>
			    <label for="email">Email:</label><br />
			    <input type="email" id="email" name="email" required />
			  </div>
			  <div>
			    <label for="message">Message:</label><br />
			    <textarea id="message" name="message" rows="4" required></textarea>
			  </div>
			  <button type="submit">Submit</button>
			</form>
		</div>
		<Footer />
		</div>
	); 
}
