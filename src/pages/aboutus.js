import Navbar from "../components/navbar"; 
import Footer from "../components/footer"; 
import RotatingEmoji from "../components/rotatingEmoji"; 
import './aboutus.css'

export default function About(){
	return(
		<div className = "about-us-page">
		<Navbar /> 
		<div className = "rounded-panel">
		<h1 className="title">What's the story behind policycle</h1>
		<hr />
		<h4 className = "about-us-paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia molestie erat, in ullamcorper felis faucibus sed. Cras vitae ultricies arcu. Aliquam tempor euismod malesuada. Vivamus ullamcorper ipsum ac dolor elementum viverra. Maecenas finibus feugiat libero ac tincidunt. In lobortis mauris a faucibus fermentum. Quisque vel tincidunt libero. Etiam euismod dolor ut est consequat, id laoreet risus viverra. Proin leo nisi, sollicitudin et nulla in, porttitor porttitor urna. Aenean laoreet, mi eu tempus bibendum, mauris massa pulvinar eros, nec blandit lacus nisi non felis. Quisque sem diam, tincidunt vitae turpis eget, gravida fringilla ante. Vestibulum finibus risus quam, nec vestibulum metus laoreet at. Vestibulum vitae augue molestie, congue erat a, volutpat ligula. Quisque ut nunc turpis. Donec porta fermentum rutrum. Quisque congue erat at mauris aliquam, nec rhoncus libero volutpat.
Fusce sollicitudin faucibus ex quis porttitor. Phasellus in nulla quis enim feugiat sodales nec eget sapien. Etiam non gravida dui. Duis ligula urna, suscipit et bibendum a, porta eget justo. Curabitur vehicula viverra accumsan. Nulla facilisi. Proin efficitur massa quis neque fringilla, eget efficitur leo mollis. Pellentesque blandit sodales vestibulum. In mattis iaculis arcu, vitae dapibus nunc luctus et. Nunc ullamcorper feugiat aliquam. Suspendisse id egestas ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
		</h4>
		</div>
		<div className= "Shadow-div-ignore">
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		</div>
		<Footer /> 
		</div>
	); 
}
