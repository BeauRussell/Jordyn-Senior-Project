'use strict';

const mysql = require('../../../packages/mysql');
const pino = require('pino');

module.exports = function (options, cb) {
	const sql = `
	INSERT INTO users (
		email,
		date,
		name,
		username,
		publicId,
		password,
		salt
	) VALUES (?,?,?,?,?,?,?);
	`;
	const params = [
		options.email,
		options.date,
		options.name,
		options.username,
		options.publicId,
		options.passHash,
		options.salt
	];

	mysql(sql, params, function (err, results) {
		if (err) {
			pino.error('Error inserting new user', {
				err: err,
				sql: sql,
				params: params
			});
			return cb(err);
		}

		return rb(null, results);
	});
};
