import React, { Component } from 'react';
import serviceRequest from 'Shared/serviceRequest';
import Header from 'Components/Header';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			className1: '',
			className2: '',
			className3: '',
			className4: '',
			className5: '',
			className6: '',
			userPublicId: localStorage.getItem('userPublicId'),
			dorm: ''
		}

		console.log(this.state.userPublicId);
	}

	handleclassName1Change (event) {
		this.setState({
			className1: event.target.value
		});
	}

	handleclassName2Change (event) {
		this.setState({
			className2: event.target.value
		});
	}

	handleclassName3Change (event) {
		this.setState({
			className3: event.target.value
		});
	}
	
	handleclassName4Change (event) {
		this.setState({
			className4: event.target.value
		});
	}

	handleclassName5Change (event) {
		this.setState({
			className5: event.target.value
		});
	}

	handleclassName6Change (event) {
		this.setState({
			className6: event.target.value
		});
	}

	submitSchedule () {
		serviceRequest({
			method: 'POST',
			uri: '/schedule/create',
			body: {
				userPublicId: this.state.userPublicId,
				dorm: this.state.dorm,
				classNamees: [this.state.className1, this.state.className2, this.state.className3, this.state.className4, this.state.className5, this.state.className6]
			}
		}, function (err, resp, body) {
			if (err || resp.statusCode >= 400) {
				console.log(err);
				console.log(resp.statusCode);
				return;
			}
		});
	}

	render () {
		return (
			<div className="container">

				<Header />

				<div className="row">

					<div className="col-sm-7 center-block">

					<form>


					<h3 className ="text-center"> Enter classNameroom </h3>


					<div className="form-group">

						<label htmlFor="className One">className One:</label>

						<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

					</div>

				<div className="form-group">

					<label htmlFor="className Two">className Two:</label>

					<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label htmlFor="className Three">className Three:</label>

					<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label htmlFor="className Four">className Four:</label>

					<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label htmlFor="className Five">className Five:</label>

					<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label htmlFor="className Six">className Six:</label>

					<input type="text" className="form-control" id="text" placeholder="Example: Langner 123" />

				</div>

				<div className="sign">

					<label htmlFor="Signup">Want to Sign up?</label>

				<label><a href="/signup" style={{color: 'dodgerblue'}}>Sign up</a></label>

				</div>

					<button onClick={this.submitSchedule} type="submit" className="center-block btn btn-lg btn-primary">Submit</button>

				</form>

				</div>

				</div>

				</div>
		);
	}
}

export default Home;
