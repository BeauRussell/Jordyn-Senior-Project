const serviceRequest = require('../../packages/serviceRequest');

module.exports = function createUser (options, cb) {
	serviceRequest({
		method: 'POST',
		uri: '/user/create',
		body: {
			email: options.email,
			password: options.password,
			studentName: options.name
		}
	}, function (err, resp, body) {
		if (err) {
			console.log(err);
			cb(err);
		}
		if (resp.statusCode >= 400) {
			console.log('Unexpected response from create user endpoint');
			console.log(resp.statusCode);
			console.log(body);
			cb('Unexpected Response');
		}

		cb(null, body);
	});
};