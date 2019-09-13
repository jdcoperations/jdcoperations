import React from 'react';
import './mainblock.css';
import me from '../../Images/me.jpg';

const Nav = () => {
	return (
		<div className="txtStyle grid">
			<div className="big">
				JDC Operations has been operating since 2018.  During that time I have created many websites.   I am now working on App development and building my portfolio
				of Apps.
				<br/><br/>
				I also offer business consultancy services to businesses on a contract basis.
				<br/><br/>
				My Office is based on the East Coast of Norfolk.  I regularly travel to and from London to meet with my clients.
				<br/><br/>
				Please feel free to browse my site and contact with any queries.
			</div>
			<div className="small">
				<img className="smallImage" src={me} alt="James Cook, Managing Director"/>
			</div>
		</div>
	)
}

export default Nav;