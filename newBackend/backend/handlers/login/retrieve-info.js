'use strict';

const mysql = require('../../../packages/mysql');
const pino = require('pino')();

module.exports = function (givenEmail, cb) {
	const sql = `
		SELECT userPublicId, password
		FROM users
		WHERE email = ?
	`;
	
	const params = [
		givenEmail
	];

	mysql(sql, params, function (err, results) {
		if (err) {
			pino.info('Error checking login details', {
				err: err,
				sql: sql,
				params: params
			});
			return cb(err);
		}

		return cb(null, results);
	});
};