'use strict';

const mysql = require('../../../packages/mysql');
const pino = require('pino')();

module.exports = function (options, cb) {
	const sql = `
	INSERT INTO users (
		email,
		date,
		name,
		username,
		publicId,
		password
	) VALUES (?,?,?,?,?,?);
	`;
	
	console.log(options);
	const params = [
		options.email,
		options.date,
		options.name,
		options.username,
		options.publicId,
		options.password
	];

	mysql(sql, params, function (err, results) {
		if (err) {
			pino.info('Error inserting new user', {
				err: err,
				sql: sql,
				params: params
			});
			return cb(err);
		}

		return rb(null, results);
	});
};
