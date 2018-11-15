import React from 'react';
import './Header.css';

class Header extends React.Component {
	render () {
		return (
			
			<div className="container-fluid">


				<div className="text-center">

					<a href="/"> Home /</a>

					<a href="/login"> Login /</a>

					<a href="/signup"> Sign Up </a>
</div>
</div>
		);
	}
}

export default Header;