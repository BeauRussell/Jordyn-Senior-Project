const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '192.168.99.100',
	port: 32779,
	user: 'root',
	database: 'seniorproject'
});

module.exports = function (query, params, cb) {
	connection.query(query, params, function (err, results) {
		if (err) {
			return cb(err);
		}
		return cb(null, results);
	});
};