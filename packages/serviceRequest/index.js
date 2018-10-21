const request = require('request');

module.exports = function serviceRequest (options, cb) {
	request({
		uri: `localhost`
	});
};
