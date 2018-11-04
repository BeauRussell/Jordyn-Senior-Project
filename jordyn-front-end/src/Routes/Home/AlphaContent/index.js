
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Alpha extends Component {
	render () {
		const { logo } = this.props;

		return (
			<div>
				<p>
					{logo}
				</p>
				<p>
					Edit <code>src/Components/App.js</code> and save to reload.
				</p>
				<div>
					Home
					<Link className="App-link" to="/signup">Sign Up</Link>
					<Link className="App-link" to="/login">Login</Link>
				</div>
			</div>
		);
	}
}

Alpha.propTypes = {
	logo: PropTypes.element.isRequired
};

export default Alpha;
