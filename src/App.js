import Navbar from "./components/navbar"; 
import Footer from "./components/footer"; 
import './app.css';
import RotatingEmoji from './components/rotatingEmoji'; 

function App() {
  return (
    <div className="landing-page">
	<Navbar />	  
	  	<div className = "text">
	  	<h1 className = "Title">Policycle</h1>
	  	</div>

	  	<div className = "text">
	 	<RotatingEmoji emoji="♻️" />
	  	</div>

	  	<div className = "text"> 
	  	<h3 className = "Subtitle">A strong enviromental player</h3>
	 	</div>

		<div className = "about-paragraph"> 
	  	<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis urna a posuere tempor. Aenean vulputate pellentesque felis, quis posuere lorem condimentum vitae. Nam id laoreet sem. Etiam nec turpis. </h3>
	 	</div>
	<Footer /> 
    </div>
  );
}

export default App;
