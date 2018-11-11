import React from 'react';
import serviceRequest from 'Shared/serviceRequest';
import GoogleMapComponent from './create-map.js';

class MapComponent extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			lat: null,
			lng: null
		}

		this.findBuildingCoords = this.findBuildingCoords.bind(this);
	}

	findBuildingCoords () {
		serviceRequest({
			uri: '/building',
			data: {
				building: this.props.building
			}
		}, function (err, resp, body) {
			if (err || resp.statusCode >= 400) {
				console.log(err);
				console.log(resp.statusCode);
				console.log(body);
			}

			this.setState({
				lat: body.latitude,
				lng: body.longitude
			});
		});
	}

	render () {
		return(
			<div className="map">
				<GoogleMapComponent
					isMarkerShown
					coordinates={this.state}
				  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ height: `400px` }} />}
				  mapElement={<div style={{ height: `100%`, width: '400px' }} />}
				/>
			</div>
		);
	}
}

export default MapComponent;