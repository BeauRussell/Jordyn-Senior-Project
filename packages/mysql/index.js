const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'me',
	password: 'secret',
	database: 'project'
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