import React from 'react';
import ReactDOM from 'react-dom';
import './block.css';
import About from '../MainBlock/about.js';
import ITC from '../MainBlock/ITC.js';
import Contact from '../MainBlock/contact.js';
import WebApp from '../MainBlock/WebApp.js';

const Nav = () => {
	function AboutClicked() {
		ReactDOM.render(<About/>, document.getElementById('block'));
	}
	function ITCClicked() {
		ReactDOM.render(<ITC/>, document.getElementById('block'));	
	}
	function ContactClicked() {
		ReactDOM.render(<Contact/>, document.getElementById('block'));
	}
	function WebAppClicked() {
		ReactDOM.render(<WebApp/>, document.getElementById('block'));
	}
	return (
		<div className="biggy zone">
			
			<button className="bigBut" id="About" onClick={AboutClicked}>About</button> 
			<button className="bigBut" id="ITC" onClick={ITCClicked}>IT Consultancy</button> 
			<button className="bigBut" id="WebApp" onClick={WebAppClicked}>Web & App Design</button> 
			<button className="bigBut" id="Contact" onClick={ContactClicked}>Contact</button>
		</div>
	)
}

export default Nav;