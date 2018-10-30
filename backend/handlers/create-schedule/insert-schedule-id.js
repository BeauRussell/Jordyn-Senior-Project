'use strict';

const mysql = require('../../../packages/mysql');
const pino = require('pino')();

module.exports = function (userPublicId, schedulePublicId, cb) {
	const sql = `
		UPDATE users
		SET scheduleId = ?
		WHERE publicId = ?
	`;

	params = [
		schedulePublicId,
		userPublicId
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

		return cb(null);
	});
};
