const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 32807,
	user: 'root',
	database: 'seniorproject'
});

module.exports = function (query, params, cb) {
	connection.connect();

	connection.query(query, params, function (err, results) {
		if (err) {
			return cb(err);
		}
		return cb(null, results);
	});

	connection.end();
};