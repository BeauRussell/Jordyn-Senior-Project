
import React, { Component } from 'react';
import Layout from 'Presentation/Layout';
import Logo from 'Presentation/Logo';
import AlphaContent from './AlphaContent';

class Home extends Component {
	render () {
		return (
			<Layout>
				<AlphaContent logo={<Logo />} />
			</Layout>
		);
	}
}

export default Home;
