'use strict';

const mysql = require('../../../packages/mysql');
const pino = require('pino')();

module.exports = function (options, cb) {
	const sql = `
	INSERT INTO schedules (
		publicId,
		userPublicId,
		dorm,
		class1,
		class2,
		class3,
		class4,
		class5,
		class6
	) VALUES (?,?,?,?,?,?,?,?,?);
	`;
	
	const params = [
		options.publicId,
		options.userPublicId,
		options.dorm
	];

	for (let i = 0; i < options.classes.length && i < 5; i++) {
		params.push(options.classes[i]);
	}

	mysql(sql, params, function (err, results) {
		if (err) {
			pino.info('Error inserting new user', {
				err: err,
				sql: sql,
				params: params
			});
			return cb(err);
		}

		return cb(null, options.publicId);
	});
};
