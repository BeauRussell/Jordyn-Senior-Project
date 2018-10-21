const request = require('request');

request({
	method: 'POST',
	url: 'http://localhost:8080/user/create',
	json: true,
	body: {
		email: 'jemartin@tlu.edu',
		password: 'HelloWorld1',
		studentName: 'Jordyn Martin'
	}
}, function (err, resp, body) {
	if (err) {
		console.log('err');
		console.log(err);
		return;
	}
	console.log(err);
	console.log(resp.statusCode);
	console.log(body);
});