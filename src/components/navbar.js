import { Link } from "react-router-dom"; 
import './navbar.css'; 

export default function Navbar(){
	return(
		<nav className = "bar" >
		<h1 classname = "logo" > <Link to = "/">♻️</Link> </h1>
		<Link to = "/about" className ="about" >About</Link>
		<Link to = "/contact" className = "contact" >Contact</Link>
		</nav>
	); 
}
