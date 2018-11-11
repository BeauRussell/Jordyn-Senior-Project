import React, { Component } from 'react';
import serviceRequest from 'Shared/serviceRequest';
import Header from 'Components/Header';
import MapComponent from 'Components/Map';

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

		this.handleclassName1Change = this.handleclassName1Change.bind(this);
		this.handleclassName2Change = this.handleclassName2Change.bind(this);
		this.handleclassName3Change = this.handleclassName3Change.bind(this);
		this.handleclassName4Change = this.handleclassName4Change.bind(this);
		this.handleclassName5Change = this.handleclassName5Change.bind(this);
		this.handleclassName6Change = this.handleclassName6Change.bind(this);
		this.submitSchedule = this.submitSchedule.bind(this);
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
				classes: [this.state.className1, this.state.className2, this.state.className3, this.state.className4, this.state.className5, this.state.className6]
			}
		}, function (err, resp, body) {
			if (err || resp.statusCode >= 400) {
				console.log(err);
				console.log(resp.statusCode);
				return;
			}

			if (!localStorage.getItem('userPublicId')) {
				localStorage.setItem('userPublicId': body.userPublicId);
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


					<h3 className ="text-center"> Enter classroom </h3>


					<div className="form-group">

						<label>Class One:</label>

						<input className="form-control" onChange={this.handleclassName1Change} placeholder="Example: Langner 123" />

					</div>

				<div className="form-group">

					<label>Class Two:</label>

					<input className="form-control" onChange={this.handleclassName2Change} placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label>Class Three:</label>

					<input className="form-control" onChange={this.handleclassName3Change} placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label>Class Four:</label>

					<input className="form-control" onChange={this.handleclassName4Change} placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label>Class Five:</label>

					<input className="form-control" onChange={this.handleclassName5Change} placeholder="Example: Langner 123" />

				</div>

				<div className="form-group">

					<label>Class Six:</label>

					<input className="form-control" onChange={this.handleclassName6Change} placeholder="Example: Langner 123" />

				</div>

				<div className="sign">

					<label htmlFor="Signup">Want to Sign up?</label>

				<label><a href="/signup" style={{color: 'dodgerblue'}}>Sign up</a></label>

				</div>

					<button onClick={this.submitSchedule} className="center-block btn btn-lg btn-primary">Submit</button>

				</form>

				</div>

				</div>

				<MapComponent />

				</div>
		);
	}
}

export default Home;
