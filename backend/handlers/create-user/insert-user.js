'use strict';

const mysql = require('../../../packages/mysql');

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


};
